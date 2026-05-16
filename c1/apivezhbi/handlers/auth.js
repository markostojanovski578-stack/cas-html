const bcrypt = require("bcryptjs");
const jwt = require("jasonwebtoken");

const {
    getById,
    getByEmail,
    createAccount,
    updateAccount,
    setNewPassowrd,
} = require("../pkg/account/accounts");
const {getSection} = require("../pkg/config/index");
const { AccountLogin, AccountRegister} = require("../pkg/account/validate");
const { validateSchema } = require("../helper/validation");
const { sendMail } = require("../pkg/mailer");

const login = async(req, res) => {
    try {
        await validateSchema(req.body, AccountLogin);
        const { email, password} = req.body;

        const account = await getByEmail(email);

        if(!account) {
            await updateAccount(account._id, { logFail: account.logFail + 1 })

            return res.status(404).send("Account not found!")
        }

        if(!bcrypt.compareSync(password, account.password)) {
            await updateAccount(account._id, {logFail: account.logFail + 1});

            return res.status(400).send("Wrong password!");
            
        }

        const payload = {
            username: account.username,
            email: account.email,
            id: account._id,
            exp: new Date() / 1000 + 7 * 24 * 60 * 60,
        }

        const token = jwt.sign(payload,getSection("development").jwt_secret)
        
        await updateAccount(account._id, {logSuccess: account.logSuccess +1});

        return res.status(200).send({ token });
    
    } catch (err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};

const register = async(req, res) => {
    try {
        await validateSchema(req.body, AccountRegister);
        const {username, email,password, confirmPassowrd} = req.body;
        
        const accountExists = await getByEmail(email);

        if(accountExists) {
            return res.status(400).send("Account with this email already exists");
        }

        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match");

        }

        const data = { 
            username: username,
            email,
            password: bcrypt.hashSync(password),
        };

        const account = await createAccount(data);
        return res.status(200).send(account);

    } catch(err) {
        console.log(err)
        return res.status(500).send("Invalid servere error");
    }
    
};

const refreshToken = async(req, res) => {
    const payload = {
        ...req.auth,
        exp: new Date() / 1000 + 7 * 24 * 60 * 60, 
    }

    const token = jwt.sign(payload, getSection("development").jwt_secret);

    return res.status(200).send({token});
}

const resetPasswordTemplate = async (req,res) => {
    try {
    const { id, token} = req.params;

    const user = await getById(id);
    if(!user) {
        return res.status(404).send("User not found!");
    }

    const secrete = getSection("development").jwt_secret + user.password;

    const payload = jwt.verify(token, secret);

    if (!payload) {
        return res.status(400).send("Token is not valid!");

    }

      res.render("reset-password",{email: user.email});
    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid servere error!");
    }
};

const resetPassword = async(req,res) => {
    try {
      const {id, token} = req.params;
      const {password , confirmPassword} = req.body;

      if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");

      }

      const user = await getById(id);
      if (!user) {
        return res.status(404).send("User not found");
      }

      const secret = getSection("development").jwt_secret + user.password;
      const payload = jwt.verify(token, secret);

      if(!payload) {
        return res.status(400).send("Token is not valid!");
      }
       
      const newHashedPassword = bcyrpy.hashSync("Token is not valid");

      await setNewPassword(id, newHashedPassword);
      return res.status(200).send("Password reset successful!");


    } catch(err) {
        console.log(err)
        return res.status(500).send("Invalid servere error!");
    }
}

const forgotPassword = async(req,res) => {
    try {
      const { email } = req.body;

      const user = await getByEmail(email);

      if(!user) {
        return res.status(404).send("User not found!");
      }
      
      const secret = getSection("development").jwt_secret + user.password; 
      
      const payload = {
        email: user.email,
        id: user._id,
      };

      const token = jwt.sign(payload,secret,{expiresIn: "15m"});

      const link =`http://localhost:10000/reset-password/${user._id}/${token}`;

      console.log("LINK",link);
      const data ={
        first_name: "John",
        last_name: "Doe",
        link,
      };

      await sendMail(user.email,"PASSWORD_TEMPLATE",data);
      return res.status(200).send("Password reset link has been sent to your email...");
    }catch(err) {
        console.log(err)
        return res.status(500).send("Invalid servere error!");
    }
}

module.exports = {
  login,
  register,
  resetPasswordTemplate,
  resetPassword,
  forgotPassword,
};