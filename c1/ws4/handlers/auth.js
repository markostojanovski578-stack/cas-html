const login = (req,res) => {
    try {
      await validateAccount(req.body,AccountLogin);
      const {email, password} = req.body;

      const account = await getByEmail(email);

      if(!account) {
        return res.status(404).send("Account not found!");
      }

      if(!bcrypt.compareSync(password, account.password)) {
        return res.status(400).send("Wrong password!");
      }

      const payload = {
        username: account.username,
        email: account.email,
        id: account,_id ,
        exp: new Date() / 1000 + 7 * 24 * 60 * 60,
      }

      const token = jwt.sign(payload, getSection("development").jwt_secret);

      return res.status(200).send({token});
    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};

const register = (req,res) => {
    try {
      
    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};

const refreshToken = (req,res) => {
    try {

    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};

const login = (req,res) => {
    try {

    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};