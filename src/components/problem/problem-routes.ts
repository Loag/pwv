import { Router } from 'express';
import {
  getProblem,
  getProblems,
  createProblem,
  updateProblem
 } from './problem-controller';
import { catcher } from "../../utils/error";

const router: Router = Router();

/*
  - get projects for account get.
  - get user owned projects get.

  - create problem with set of existing issues.

  - update problem status or complete status
*/

router.get("/:id", catcher(getProblem)); // get a problem with id
router.get("/all/:id", catcher(getProblems)); // get a user or accounts problems w/ their respective id
router.post("/", catcher(createProblem)); // create a problem, requires a set of existing issues.
router.put("/:id", catcher(updateProblem)); // update a problem by it's id

export const ProblemRouter: Router = router;