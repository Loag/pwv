import { Request, Response, NextFunction } from "express";
import { getUserService, createUserService, updateUserService, getUserInternalService } from "./user-service";
import {I_New_User} from "./user-interface";
import { logger } from "../../utils";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get user.")
  const id: string = req.params.id;

  const user = await getUserService(id);

  res.status(200).send({ message: "Success", data: user });
};

export const getUserInternal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get user internal.")
  const id: string = req.params.id;

  const user = await getUserInternalService(id);

  res.status(200).send({ message: "Success", data: user });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running create user.")
  const create_data: I_New_User = req.body;

  const created_user = await createUserService(create_data);

  res.status(200).send({ message: "Created user.", data: created_user });
};


export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running update user.")
  const id: string = req.params.id;
  const update_data: I_New_User = req.body.user;

  const updated_user = await updateUserService(id, update_data);

  res.status(200).send({ message: "Updated user.", data: updated_user });
};
