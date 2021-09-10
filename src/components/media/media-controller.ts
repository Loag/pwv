import { Request, Response, NextFunction } from "express";
import { 
  getPresignedURLService
 } from "./media-service";
 import { logger } from "../../utils";

export const getPresignedURL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get presigned url.")
  const id: string = req.params.id;

  const signed_url = await getPresignedURLService(id);

  logger.info("Got presigned url for key")
  res.status(200).send({ message: "Success", data: signed_url });
};
