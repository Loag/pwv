import { Request, Response, NextFunction } from "express";
import {
  getIssueService, 
  createIssueService, 
  getAccountIssuesService, 
  getUserIssuesService
} from "./issue-service";
import {I_New_Issue} from "./issue-interface";
import { logger } from "../../utils";

export const getIssues = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get all issues.")
  const issues = await getIssueService();
  logger.info("Returning all issues")
  res.status(200).send({ message: "Success", data: issues });
};

export const getAccountIssues = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get account issues.")
  const city: string = req.params.city;
  const account_issues = await getAccountIssuesService(city);
  logger.info("Returning issues for city")
  res.status(200).send({ message: "Success", data: account_issues });
};

export const getUserIssues = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get a users issues.")
  const id: number = parseInt(req.params.id);
  const user_issues = await getUserIssuesService(id);
  logger.info("Returning issues for user")
  res.status(200).send({ message: "Success", data: user_issues });
};

export const getIssue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running get a issue.")
  const id: number = parseInt(req.params.id);
  const issue = await getIssueService(id);
  logger.info("Returning issue")
  res.status(200).send({ message: "Success", data: issue });
};

export const createIssue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running create a issue.")
  const issue: I_New_Issue = req.body;

  const created_Issue = await createIssueService(issue);
  logger.info("Returning created issue")
  res.status(201).send({ message: "issue Created", data: created_Issue });
};
