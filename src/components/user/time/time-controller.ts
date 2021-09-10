import { Request, Response, NextFunction } from "express";
import { 
  getUserTimeTodayService,
  getUserTimeAllService
 } from "./time-service";
import { logger } from "../../../utils";

export const getTodayUserTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get today user time.")
  const id: number = parseInt(req.params.id);

  const today_time = await getUserTimeTodayService(id);

  res.status(200).send({ message: "Success", data: today_time });
};

export const getAllUserTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get all user time.")
  const id: number = parseInt(req.params.id);

  const all_time = await getUserTimeAllService(id);

  res.status(200).send({ message: "Success", data: all_time });
};