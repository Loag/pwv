import { Request, Response, NextFunction } from "express";
import { I_New_Account } from "./account-interface";
import {
  getAccountService,
  createAccountService
} from "./account-service";

import { logger } from "../../utils/logging";

export const getAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running Get Account.")

  const id: string = req.params.id;
  const account = await getAccountService(id);
  res.status(200).send({ message: "Success", data: account });
};

export const createAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running Create Account.")

  const account: I_New_Account = req.body;

  const created_account = await createAccountService(account);

  res.status(201).send({ message: "Account Created", data: created_account});
};
