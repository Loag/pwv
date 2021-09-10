// hof to catch whether or not anything returned from db
import { NotFoundError } from "./error";
import { logger } from "../logging";

export default async (fn: any) => {
  const res = await fn;

  logger.info("checking if data exists")
  if (res) return res;

  logger.warn("requested data was not dound")
  throw new NotFoundError();
};
