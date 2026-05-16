const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {getByEmail, createAccount} = require("../pkg/account/account");
const {createLog} = require("../pkg/loginLogs/lognLogs");

const register = async (req, res) => {
    try {
        const { username, email, password} = req.body;

        const exists = await getByEmail(email);

        if (exists) {
            return res.status(400).send("Account already exists");
        }

        const hashedPassword = bcrypt.hashSync(password);

        const account = await createAccount({
            username,
            email,
            password: hashedPassword,
        });

        return res.status(200).send(account);
    } catch(err) {
        console.log(err);
        return res.status(500).send("Server error");
    };
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const account = await getByEmail(email);

    if (!account) {
      await createLog({
        email,
        success: false,
        ip: req.ip,
      });

      return res.status(404).send("Account not found");
    }

    const isMatch = bcrypt.compareSync(password, account.password);

    if (!isMatch) {
      await createLog({
        email,
        success: false,
        ip: req.ip,
      });

      return res.status(400).send("Wrong password");
    }

    await createLog({
      email,
      success: true,
      ip: req.ip,
    });

    const token = jwt.sign(
      {
        id: account._id,
        email: account.email,
      },
      "tajna123", 
      { expiresIn: "7d" }
    );

    return res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

module.exports = {
  login,
  register,
};