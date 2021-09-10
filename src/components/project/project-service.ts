import {
  getProjectDB,
  getAccountProjectsDB,
  getUserProjectsDB,
  createProjectDB,
  updateProjectDB,
  addTasksProjectDB
} from "./project-data-access";
import { 
  idSchema, 
  newProjectSchema, 
  updateProjectSchema,
  projectTaskSchema
} from "./project-schema";
import { vac } from "../../utils/error";
import { logger } from "../../utils";
import { 
  I_New_project, 
  I_Update_Project, 
  I_Update_Project_Input 
} from "./project-interface";

// get a single project with it's id
export const getProjectService = async (id: number) => {
  const vac_id: number = vac(idSchema, id)
  logger.info("Input project id is valid")
  const project = await getProjectDB(vac_id);
  logger.info("Found project with id.")
  return project
}

export const getProjectsService = async (id: number, input_type: ('USER' | 'ACCOUNT')) => {

  const vac_id = vac(idSchema, id)
  logger.info("Input id for getting account or user projects is valid")

  if (input_type == 'ACCOUNT') {
    logger.info("Getting projects for acount.")
    const projects = await getAccountProjectsDB(vac_id);
    logger.info("Got projects for account.")
    return projects

  } else {
    logger.info("Getting projects for user.")
    const projects = await getUserProjectsDB(vac_id);
    logger.info("Got projects for user.")
    return projects
  }
}

export const updateProjectService = async (id: number, project: I_Update_Project_Input) => {

  const vac_id = vac(idSchema, id)
  
  const update_project = project.project
  const vac_project = vac(updateProjectSchema, update_project)
  logger.info("Input data for updated project is valid.")

  const tasks = project.tasks
  // if there are any tasks, connect them to the db
  if (tasks) {
    const vac_tasks = vac(projectTaskSchema, tasks)
    logger.info("adding tasks to projects with input data.")
    await addTasksProjectDB(vac_id, vac_tasks)
    logger.info("added tasks to projects with input data.")
  }
    // try to update the project with any update data
    const updated_project = await updateProjectDB(vac_id, vac_project);
    logger.info("updated project with input data.")
    return updated_project
}

export const createProjectService = async (project: I_New_project) => {
  const vac_project = vac(newProjectSchema, project)
  logger.info("Input data for new project is valid")
  const updated_task = await createProjectDB(vac_project);
  logger.info("created project with input data.")
  return updated_task
}