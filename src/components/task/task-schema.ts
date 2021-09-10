import joi from "joi";

export const newTaskSchema = joi.object({
  user_id: joi
  .number()
  .required(),
  issue_id: joi
  .number()
  .required()
});

export const newTaskNotechema = joi.object({
  user_id: joi
  .number()
  .required(),
  task_id: joi
  .number()
  .required(),
  text: joi
  .string()
  .required(),
  time: joi
  .number()
  .required()
})

export const updateTaskSchema = joi.object({
  id: joi
  .number(),
  time: joi
  .number(),
  is_completed: joi
  .bool()
});

export const idSchema = joi.number()

export const userTaskIdSchema = joi
.string()
.guid({version: 'uuidv4'})
