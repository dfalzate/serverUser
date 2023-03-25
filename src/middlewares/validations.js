import Joi from "joi";

const createUserValidationSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).required(),
  password: Joi.string().min(6).required(),
});

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export function createUserValidation(req, res, next) {
  try {
    const data = req.body;
    const result = createUserValidationSchema.validate(data);
    if (result.error) res.status(401).send(result.error);
    next();
  } catch (error) {
    throw new Error(error.message);
  }
}

export function loginValidation(req, res, next) {
  try {
    const data = req.body;
    const result = loginValidationSchema.validate(data);
    if (result.error) res.status(401).send(result.error);
    next();
  } catch (error) {
    throw new Error(error.message);
  }
}
