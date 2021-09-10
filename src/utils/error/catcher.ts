import { Request, Response, NextFunction } from "express";
import { logger } from "../../utils/logging";

export default (fn: any) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Promise.resolve(fn(req, res, next)).catch(err => {
    logger.error(`Process failed with error: ${err}`)
    next(err)
  });
};
