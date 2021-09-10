// catch validation errors and return error
import { BadRequestError } from "./error";
import { logger } from "../logging";
export default (schema: any, inputData: any) => {
  const { error, value } = schema.validate(inputData);
  logger.info("validating input data")

  if (!(error && value)) return value;

  logger.error(`Input data invalid with ${error}`)
  throw new BadRequestError("Malformed Request");
};
