/*
  this is where all of the routes for the task
*/

import { Router } from 'express';
import { 
  getTask, 
  getUserTask,
  createTask,
  updateTask,
  createTaskNote
 } from './task-controller';
 import { catcher } from "../../utils/error";

const router: Router = Router();

router.get("/:id", catcher(getTask)); // get a specific TASK with id. This includes user_task
router.get("/user/:id", catcher(getUserTask)); // get a specific TASK with id. This includes user_task
router.post("/", catcher(createTask)); // THIS creates a task and a user_task, this happens when the user clicks the begin session button
router.put("/:id", catcher(updateTask)); // this creates a new update
router.post("/note", catcher(createTaskNote)) // create a note on the task

export const TaskRouter: Router = router;