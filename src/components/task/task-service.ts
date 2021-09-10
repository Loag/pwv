import {
  getTaskDB,
  createTaskDB,
  updateTaskDB,
  createTaskNoteDB,
  getUserTaskDB
} from "./task-data-access";
import {
  I_New_task,
  I_Update_task,
  I_New_task_Note
} from "./task-interface";
import {vac} from "../../utils/error";
import { idSchema, newTaskSchema, updateTaskSchema, newTaskNotechema } from "./task-schema";
import { logger } from "../../utils";

// get a single task with it's id
export const getTaskService = async (id: number) => {
  const vac_id: number = vac(idSchema, id)
  logger.info("Input task id is valid")
  const task = await getTaskDB(vac_id);
  logger.info("Found task with id.")
  return task
}

/*
  
*/

export const getUserTaskService = async (id: number) => {
  const vac_id: number = vac(idSchema, id)
  logger.info("user id is valid")
  const tasks = await getUserTaskDB(vac_id);
  logger.info("Found user tasks with user id.")
  return tasks
}

export const createTaskService = async (task: I_New_task) => {
  const vac_task = vac(newTaskSchema, task)
  logger.info("Input data for new task is valid")
  const created_task = await createTaskDB(vac_task);
  logger.info("created task with input data.")
  return created_task
}

export const createTaskNoteService = async (task_note: I_New_task_Note) => {
  const vac_task_note = vac(newTaskNotechema, task_note)
  logger.info("Input data for new task note is valid")
  const created_task_note = await createTaskNoteDB(vac_task_note);
  logger.info("created task note with input data.")
  return created_task_note
}

/*
  NEED TO UPDATE ISSUE AS WELL THAT IT WAS COMPLETED
*/

export const updateTaskService = async (task_id: number, task: I_Update_task) => {
  const vac_task = vac(updateTaskSchema, task)
  const vac_id: number = vac(idSchema, task_id)
  logger.info("Input data for new task is valid")
  const updated_task = await updateTaskDB(vac_id, vac_task);
  logger.info("created task with input data.")
  return updated_task
}