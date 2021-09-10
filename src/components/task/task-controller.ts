import { Request, Response, NextFunction } from "express";
import { 
  getTaskService, 
  createTaskService,
  updateTaskService, 
  createTaskNoteService,
  getUserTaskService
 } from "./task-service";
 
 import { I_New_task, I_Update_task, I_New_task_Note } from "./task-interface";
import { logger } from "../../utils";

// get a singular task with the task id
export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get task.")
  const id: number = parseInt(req.params.id);

  const task = await getTaskService(id);

  res.status(200).send({ message: "Success", data: task });
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running create task.")

  const task: I_New_task = req.body;

  const created_task = await createTaskService(task);

  res.status(201).send({ message: "Task created.", data: created_task });
};

/*
  this is used to update status and complete task
*/
export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running update task.")

  const id: number = parseInt(req.params.id);

  const task: I_Update_task = req.body;

  const created_task = await updateTaskService(id, task);

  res.status(201).send({ message: "Task updated.", data: created_task });
};

// get all of the users tasks
export const getUserTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get users task.")
  const id: number = parseInt(req.params.id);

  const tasks = await getUserTaskService(id);

  res.status(200).send({ message: "Success", data: tasks });
};

export const createTaskNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running create task note")

  const task_note: I_New_task_Note = req.body;

  const created_task_note = await createTaskNoteService(task_note);

  res.status(201).send({ message: "Task_Note created.", data: created_task_note });
};