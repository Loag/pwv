// joi schema to validate incoming data
import joi from "joi";

export const newAccountSchema = joi.object({
  name: joi
  .string() // the users first and last name
  .required(),
  address: joi
  .string() // the users first and last name
  .required()
});

export const idSchema = joi.string().guid({version: 'uuidv4'})