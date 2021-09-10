import { Request, Response, NextFunction } from "express";
import { 
  getProjectService, 
  getProjectsService,
  createProjectService,
  updateProjectService
 } from "./project-service";
 
import { I_New_project, I_Update_Project_Input } from "./project-interface";
import { logger } from "../../utils";

/*
  - post create project from problem 
  - post create project w/o any tasks or problems 
  - post create project with tasks 

  // - add task to project put 
  - add tasks to project put *
  - complete project put * 

  - get projects for account *
  - get user owned projects * 
*/

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running create project.")

  const project: I_New_project = req.body;

  const created_project = await createProjectService(project);

  res.status(200).send({ message: "Success", data: created_project });
};


/*
  this is used to update status and complete task
*/
export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Running update project.")

  const id: number = parseInt(req.params.id);

  const project: I_Update_Project_Input = req.body;

  const updated_project = await updateProjectService(id, project);

  res.status(201).send({ message: "Success", data: updated_project });
};

// get a single project
export const getProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get project.")
  const id: number = parseInt(req.params.id);

  const project = await getProjectService(id);

  res.status(200).send({ message: "Success", data: project });
};

// get either all of a user or accounts projects
export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.info("Running get projects.")
  const id: number = parseInt(req.params.id);
  const input_type: ("USER" | "ACCOUNT") = (req.query.type as ("USER" | "ACCOUNT"));

  const projects = await getProjectsService(id, input_type);

  res.status(200).send({ message: "Success", data: projects });
};