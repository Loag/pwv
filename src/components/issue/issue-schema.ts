import joi from "joi";

export const newIssueSchema = joi.object({
  user_id: joi
    .number()
    .required(),
  description: joi
    .string() // the issue description
    .min(25)
    .required(),
  thumb_nail: joi  // max points user can receive for completing
  .string()
  .required(),
  video_link: joi  // max points user can receive for completing
  .string()
  .required(),
  lat: joi  // max points user can receive for completing
  .string()
  .required(),
  long: joi  // max points user can receive for completing
  .string()
  .required(),
  city: joi
  .string()
  .required(),
  address: joi
  .string()
  .required()
});  

export const idSchema = joi.number()