import { PrismaClient } from '@prisma/client';
import {
  I_New_task,
  I_New_task_Note,
  I_Update_task
} from "./task-interface";
import { nfc } from "../../utils/error";

const prisma = new PrismaClient();

export const getTaskDB = async (id: number) => {
  return await nfc(prisma.task.findUnique({
    where: {
      id: id
    },  
    include: {
      issue: {
        include: {
          user: true
        }
      },
      task_notes: true
    },
  }))
}

export const getUserTaskDB = async (id: number) => {
  return await nfc(prisma.task.findMany({
    where: {
      user_id: id
    },  
    include: {
      issue: {
        include: {
          user: true
        }
      },
      task_notes: {
        orderBy: {
          createdAt: 'desc',
        },
      }
    },
  }))
}

export const createTaskDB = async (task: I_New_task) => {
  return await prisma.task.create({
    data: {
      ...task
    },
    include: {
      issue: {
        include: {
          user: true
        }
      }
    },
  })
}

export const createTaskNoteDB = async (task_note: I_New_task_Note) => {
  return await prisma.task_Note.create({
    data: {
      ...task_note
    }
  })
}

export const updateTaskDB = async (task_id: number, task: I_Update_task) => {
  return await prisma.task.update({
    where: {
      id: task_id,
    },
    data: {
      ...task,
    },
  })
}