// joi schema to validate incoming data
import joi from "joi";

export const createUserSchema = joi.object({
  internal_id: joi
  .string() // the users first and last name
  .required(),
  name: joi
    .string() // the users first and last name
    .min(3)
    .required(),
  image: joi // image for a user
    .string(),
  email: joi
    .string()
    .email({ minDomainSegments: 2})
    .required(),
  phoneNumber: joi // have to just use regex for this
    .string()
    .min(14)
    // .pattern(/^[0-9]+$/)
    .required(),
  zip: joi
    .string()
    .required(),
  address: joi
    .string(),
  role: joi
    .string()
    .required(),
  accepted_tos: joi
    .boolean()
    .required(),
  accepted_privacy: joi
    .boolean()
    .required(),
  is_over_thirteen: joi
    .boolean()
    .required()
});

export const updateUserSchema = joi.object({
  name: joi
    .string() // the users first and last name
    .min(3),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "co"] } }),
  phoneNumber: joi // have to just use regex for this
    .string()
    .length(14),
    // .pattern(/^[0-9]+$/),
  address: joi
    .string()
});


export const idSchema = joi.string()