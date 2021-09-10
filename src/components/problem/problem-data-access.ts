import { PrismaClient } from '@prisma/client';
import { nfc } from "../../utils/error";
import { 
  I_Connect_Issue, 
  I_New_Problem, 
  I_Update_Problem 
} from './problem-interface';

const prisma = new PrismaClient();

// get a problem with id, include issues, and tasks.
export const getProblemDB = async (id: number) => {
  return await nfc(prisma.problem.findUnique({
    where: {
      id: id
    },
    include: {
      issues: true,
      tasks: true
    }
  }))
}

// get all of the projects for an account
export const getAccountProblemsDB = async (owner_id: number) => {
  return await nfc(prisma.problem.findMany({
    where: {
      owner_id: owner_id
    }
  }))
}

// get all of the projects for a user 
export const getUserProblemsDB = async (account_id: number) => {
  return await nfc(prisma.problem.findMany({
    where: {
      account_id: account_id
    }
  }))
}

// create a problem with a set of issues
export const createProblemDB = async (problem: I_New_Problem, issues: I_Connect_Issue[]) => {
  return await prisma.problem.create({
    data: {
      ...problem,
      issues: {
        connect: issues
      }
    },
    include: {
      issues: true,
      tasks: true
    },
  })
}

// update a problem with id, status or is_complete
export const updateProblemDB = async (problem_id: number, problem: I_Update_Problem) => {
  return await prisma.problem.update({
    where: {
      id: problem_id,
    },
    data: {
      ...problem,
    },
  })
}