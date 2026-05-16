const { Validator } = require("node-input-validator");

// data -> req.body, schema -> account schema

const AccountCreate = {
    username: "required|string",
    email: "required|email",
    password: "required|string",
};
// require ne treba da imame ovde za da ima fleksibilnost sekoe pole pri pomena
// ako imame required kaj password toa znaci deka 
// pri sekoj update ke treba da go menuvame i passwordot,vazhi i za drugite
const AccountUpdate = {
    username: "string",
    email: "email",
    password: "string",
};

// data = req body, 
// schema = AccountCreate,AccountUpdate
const validateAccount = async(data, schema) => {
    const validator = new Validator(data, schema);
    const ValidationChecker= await validator.check();


    console.log("Greska:", err);

    if(!ValidationChecker){
        throw{
            code: 400,
            error: "Greska na klient"
        };
    }
};

module.exports = {
    AccountCreate,
    AccountUpdate,
    validateAccount,
};