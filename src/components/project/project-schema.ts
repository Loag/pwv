import joi from "joi";

export const newProjectSchema = joi.object({
  user_id: joi
  .number()
  .required(),
  issue_id: joi
  .number()
  .required()
});

export const updateProjectSchema = joi.object({
  id: joi
  .number()
  .required(),
  task_id: joi // a new task to add
  .number(),
  is_completed: joi
  .bool()
});


export const projectTaskSchema = joi.array().items(
  joi.object({
    id: joi
    .string()
    .required()
}))


export const idSchema = joi.number()
