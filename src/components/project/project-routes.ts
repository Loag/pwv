/*
  this is where all of the routes for the task
*/

import { Router } from 'express';
import {
  getProject,
  getProjects
 } from './project-controller';
import { catcher } from "../../utils/error";

const router: Router = Router();

/*
  - create project from problem post
  - create project post
  - add task to project put
  - add tasks to project put
  - get projects for account get
  - get user owned projects get 
  - complete project put
*/

router.get("/:id", catcher(getProject)); // get a project with id
router.get("/all/:id", catcher(getProjects)); // get a user or accounts projects w/ their respective id
// router.post("/", catcher(createTask)); // THIS creates a task and a user_task, this happens when the user clicks the begin session button
// router.put("/:id", catcher(updateTask)); // this creates a new update
// router.post("/note", catcher(createTaskNote)) // create a note on the task

export const ProjectRouter: Router = router;