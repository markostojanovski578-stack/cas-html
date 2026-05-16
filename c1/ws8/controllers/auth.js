const bcrypt = require("bcyrptjs");
const jwt = require("jsonwebtoken");

const {
    getByEmail,
    createAccount,
    updateAccount,
} = require("../models/accont/accounts");

const {getSection} = require("../config/index");

const { AccountLogin, AccountRegister} = require("../models/account/validate");
const { validateSchema } = require("../helper/validation");

const login = async(req, res) => {
    
    try {
    
    await validateSchema(req.body, AccountLogin);
    const {email , password} = req.body;

    const account = await getByEmail(email);

    if(!account) {
        return res.status(404).send("Account not found");
    }
    
    if(!bcrypt.compareSync(password, account.password)) {
        await updateAccount(account._id, {
            logFail: account.logFail +1,
        });
        return res.status(400).send("Wrong Password");
    }

    const payload = {
        username: account.username,
        email: account.email,
        id: account._id,
        exp: new Date() / 1000 + 7 * 24 * 60 * 60,
    };

    const token = jwt.sign(
        payload,
        getSection("development").jwt_secret
    );

    await updateAccount(account._id, {
        logSuccess: account.logSuccess +1,
    });

    return res.status(200).send({ token });

} catch (err) {
    console.log(err);
    return res.status(500).send("Invalid server error");
}

};

const register = async(req, res) => {
    try {
    
    await validateSchema(req.body, AccountRegister);
    
    const { username,email,password,confirmPassword} = req.body;

    const accountExists = await getByEmail(email);

    if (accountExists) {
        return res.status(400).send("Account with this email already exists!");
    }
    

    if(password !== confirmPassword) {
        return res.status(400).send("Passwords do not match!");

    }

    const data = {
        username,
        email,
        password: bcrypt.hashSync(password),
    }

    const account = await createAccount(data);


    } catch(err) {
        console.log(err)
        return res.status(500).send("Invalid server error");
    }
}

module.exports = {
    login,
    register,
};



