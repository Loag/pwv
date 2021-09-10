import { PrismaClient } from '@prisma/client';
import { nfc } from "../../utils/error";
import { I_New_project, I_Update_Project, I_Project_Connect } from './project-interface';

const prisma = new PrismaClient();

// get all of the projects
export const getProjectDB = async (id: number) => {
  return await nfc(prisma.project.findUnique({
    where: {
      id: id
    },
    include: {
      problems: true,
      tasks: true
    }
  }))
}

// get all of the projects for an account
export const getAccountProjectsDB = async (owner_id: number) => {
  return await nfc(prisma.project.findMany({
    where: {
      owner_id: owner_id
    }
  }))
}

// get all of the projects for a user 
export const getUserProjectsDB = async (account_id: number) => {
  return await nfc(prisma.project.findMany({
    where: {
      account_id: account_id
    }
  }))
}

/*
  create w/ tasks, problems, or none
*/
export const createProjectDB = async (project: I_New_project) => {
  return await prisma.project.create({
    data: {
      ...project
    },
  })
}

export const updateProjectDB = async (project_id: number, project: I_Update_Project) => {
  return await prisma.project.update({
    where: {
      id: project_id,
    },
    data: {
      ...project,
    },
  })
}

export const addTasksProjectDB = async (project_id: number, connect_tasks: I_Project_Connect[]) => {
  return await prisma.project.update({
    where: {
      id: project_id,
    },
    data: {
      tasks: {
        connect: connect_tasks
      }
    },
  })
}