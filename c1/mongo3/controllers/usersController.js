const { get } = require("mongoose");
const { update, remove } = require("../models/users");

const createUser = (req,res) => {
    try {
       
    const newUser = await create(req.body);
    return res.status(200).send(newUser);
    } catch(err) {
        console.log(err)
        return res.status(500).send("Invalid Server Error")
    }
};

const getAll = async(req,res) => {
    try {
     const users = await getAll();
     return res.status(200).send(users)
    } catch(err) {
     console.log(err)
        return res.status(500).send("Invalid Server Error")
    
    }
}

const updateUser = async (req,res) => {
    try {
        const updateUser = await update(req.params.id,req.body)
        return res.status(200).send(updateUser)
    } catch(err) {
        console.log(err)
        return res.status(500).send("Invalid Server Error")
    }
}

const deleteUser = async(req,res) => {
    try {
        const deleteUser = await remove(req.params,id);
        return res.status(200).send(deleteUser)
    } catch (err) {
        console.log(err)
        return res.status(500).send("Invalid Server Error")
    }
}

