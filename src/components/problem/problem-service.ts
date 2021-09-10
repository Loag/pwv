import {
  getProblemDB,
  getAccountProblemsDB,
  getUserProblemsDB,
  createProblemDB,
  updateProblemDB
} from "./problem-data-access";
import {I_New_Problem, I_Connect_Issue, I_Update_Problem} from "./problem-interface";

import {vac} from "../../utils/error";
import { idSchema, problemSchema, UpdateProblemSchema } from "./problem-schema";
import { logger } from "../../utils";


export const createProblemService = async (problem: {problem: I_New_Problem, issues: I_Connect_Issue[]}) => {
    const new_problem = problem.problem;
    const issues = problem.issues;
    const vac_new_problem = vac(problemSchema, new_problem);
    logger.info("Input data valid for new problem");
    const created_problem = await createProblemDB(vac_new_problem, issues);
    logger.info("Created problem with issues");
    return created_problem;
}

export const updateProblemService = async (id: number, update_problem: any) => {
  const vac_id: number = vac(idSchema, id);
  const vac_updated_problem: I_Update_Problem = vac(UpdateProblemSchema, update_problem);
  logger.info("Input data valid for update problem");
  const updated_problem = await updateProblemDB(vac_id, vac_updated_problem);
  logger.info("Updated problem with id");
  return updated_problem;
}

// get a single problem with it's id
export const getProblemService = async (id: number) => {
  const vac_id: number = vac(idSchema, id);
  logger.info("Input problem id is valid");
  const problem = await getProblemDB(vac_id);
  logger.info("Found problem with id.");
  return problem;
}

export const getProblemsService = async (id: number, input_type: ('USER' | 'ACCOUNT')) => {

  const vac_id = vac(idSchema, id);
  logger.info("Input id for getting account or user problems is valid");

  if (input_type == 'ACCOUNT') {
    logger.info("Getting problems for acount.");
    const problems = await getAccountProblemsDB(vac_id);
    logger.info("Got problems for account.");
    return problems;

  } else {
    logger.info("Getting problems for user.");
    const problems = await getUserProblemsDB(vac_id);
    logger.info("Got problems for user.");
    return problems;
  }
}
