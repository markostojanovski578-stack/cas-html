const AccountLogin = {
  email: "required|email",
  password: "required|string",
};

const AccountRegister = {
  username: "required|string|minLength:3",
  email: "required|email",
  password: "required|string|minLength:6",
  confirmPassword: "required|string",
};

module.exports = {
  AccountLogin,
  AccountRegister,
};