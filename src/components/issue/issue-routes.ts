import { Router } from "express";
import { catcher } from "../../utils/error";

/*
 ***************
 * controllers *
 ***************
 */
import {
  getIssue, 
  getIssues, 
  createIssue,
  getAccountIssues,
  getUserIssues
} from "./issue-controller";

const router: Router = Router();

/*
 **************
 * Routes *
 **************
 */

router.get("/", catcher(getIssues)); // get all issues
router.get("/city/:city", catcher(getAccountIssues)) // get the open issues w/o a task for a city
router.get("/user/:id", catcher(getUserIssues))
router.get("/:id", catcher(getIssue)); // get a specific issue
router.post("/", catcher(createIssue)); // create a issue

export const IssueRouter: Router = router;
