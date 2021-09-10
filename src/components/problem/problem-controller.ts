import { Request, Response, NextFunction } from "express";
import { 
  getProblemService, 
  getProblemsService,
  createProblemService,
  updateProblemService
} from "./problem-service";
import {I_New_Input_Problem, I_Update_Problem} from "./problem-interface"
import { logger } from "../../utils";

/*
  - create project from problem post

  - update status or complete a problem

  - get a problem with id
  - get user owned, or account problems
*/

// problems are only created with a set of issues
export const createProblem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running create problem.")

  const problem: I_New_Input_Problem = req.body;

  const created_problem = await createProblemService(problem);

  res.status(200).send({ message: "Success", data: created_problem });
};


/*
  this is used to update status and complete a problem
*/
export const updateProblem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running update problem.")

  const id: number = parseInt(req.params.id);

  const update_problem: I_Update_Problem = req.body;

  const updated_problem = await updateProblemService(id, update_problem);

  res.status(201).send({ message: "Problem updated.", data: updated_problem });
};

// get a single problem
export const getProblem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get problem.")
  const id: number = parseInt(req.params.id);

  const problem = await getProblemService(id);

  res.status(200).send({ message: "Success", data: problem });
};

// get either all of a user or accounts problems
export const getProblems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get problems.")
  const id: number = parseInt(req.params.id);
  const input_type: ("USER" | "ACCOUNT") = (req.query.type as ("USER" | "ACCOUNT"));

  const problems = await getProblemsService(id, input_type);

  res.status(200).send({ message: "Success", data: problems });
};
