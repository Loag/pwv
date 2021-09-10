import joi from "joi";

export const problemSchema = joi.object({
  owner_id: joi
  .number()
  .required(),
  account_id: joi
  .number()
  .required(),
  project_id: joi
  .number(),
  description: joi
  .string()
  .required()
})

export const UpdateProblemSchema = joi.object({
  
})

export const idSchema = joi.number()
