

const { validateAccount, AccountUpdate } = require("../models/validate");

const getAllAccounts = async(req,res) => {
    try{
      const accounts = await getAccounts();
      return res.status(200).send(accounts)
    } catch(err) {
        return res.status(500).send("Invalid server error")
    }
};

const createNewAccount = async(req,res) => {
    try{
     await validateAccount(req.body, AccountCreate);
     const newAccount = await createNewAccount(req.body);
     return res.status(200).send(newAccount);
    } catch(err) {
        return res.status(500).send(err? err.error: "Invalid server error")
    }
};

const updateCurrentAccount = async(req,res) => {
    try{
      await validateAccount(req.body,AccountUpdate);
      const updatedAccount = await updateAccount(req.params.id, req.body);
      return res.status(200).send(updatedAccount);
    } catch(err) {
        return res.status(500).send("Invalid server error")
    }
};

const removeCurrentAccount = async(req,res) => {
    try{
       const removedAccount = await removeAccount(req.params.id);
    return res.status(200).send(removedAccount);
    } catch(err) {
        return res.status(500).send("Invalid server error")
    }
};

