import {I_New_Issue} from "./issue-interface";
import { getIssueDB, getIssuesDB, createIssueDB, getAccountIssuesDB, getUserIssuesDB } from "./issue-data-access";
import {newIssueSchema, idSchema} from "./issue-schema";
import { vac } from "../../utils/error";
import { logger } from "../../utils";

export const getIssueService = async (id?: number) => {
  if (id) {
    // return single issue
    const vac_id = vac(idSchema, id)
    logger.info("Input Id valid for issue.")
    const issue = await getIssueDB(vac_id)
    logger.info("Found issue with input id")
    return issue
  }
  
  // return all
  logger.info("Getting all issues")
  const issues = await getIssuesDB()
  logger.info("Found all issues")
  return issues
}

export const getAccountIssuesService = async (city: string) => {  
  logger.info("Getting all issues for account")
  const account_issues = await getAccountIssuesDB(city)
  logger.info("Found all issues account")
  return account_issues
}

export const getUserIssuesService = async (user_id: number) => {  
  logger.info("Getting all issues for a user")
  const user_issues = await getUserIssuesDB(user_id)
  logger.info("Found all issues for user")
  return user_issues
}

export const createIssueService = async (input_data: I_New_Issue) => {
  const issue = vac(newIssueSchema, input_data)
  logger.info("Input data valid for new issue.")
  const created_issue = await createIssueDB(issue)
  logger.info("Created new issue from input data.")
  return created_issue
}