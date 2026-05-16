const { Validator } = require("node-input-validator");

const validateSchema = async (data, schema) => {
  const validator = new Validator(data, schema);
  const isValid = await validator.check();

  if (!isValid) {
    throw {
      code: 400,
      error: "Validation error",
    };
  }
};

module.exports = { validateSchema };