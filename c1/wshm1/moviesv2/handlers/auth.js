const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const {createAccount, getByEmail} = require("../models/accounts");

const register = async(req,res) => {
    try {
      const {username,email,password} = req.body;

      const exists = await getByEmail(email);

      if(exists) {
        return res.status(400).send("User already exists!");

      }

      const data = {
        username,
        email,
        password: bcrypt.hashSync(password),
      };

      const user = await createAccount(data);

      return res.status(200).send(user);
    } catch(err) {
        console.log(err);
        return res.status(500).send("Server error");
    } 
};

const login = async(req,res) => {
    try {
        const {email,password} = req.body;

        const user = await getByEmail(email);

        if(!user) {
            return res.status(404).send("User not found");
        }

        if(!bcrypt.compareSync(password, user.password)) {
            return res.status(400).send("Wrong password");
        }

        const payload = {
            id: user._id,
            email: user.email,
            username: user.username
        };

        const token = jwt.sign(payload,"secret123");

        return res.status(200).send({ token })
     
    }catch (err) {
        console.log(err);
        return res.status(500).send("Server error");

    }
};

module.exports = {
    register,
    login,
}