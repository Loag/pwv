import { PrismaClient } from "@prisma/client";
import {I_Time} from "./time-interface";
import { nfc } from "../../../utils/error";

const prisma = new PrismaClient();

export const getTodayTimeDB = async (user_id: number) => {
  return await prisma.task_Note.aggregate({
    _sum: {
      time: true,
    },
    where: {
      AND:[
        {
          createdAt: {
            gte: new Date("2020-01-01"),
            lt:  new Date("2020-01-02")
          },
        },
        {
        user_id: user_id
        }
      ]
    },
  })
};

export const getAllTimeDB = async (user_id: number) => {
    return await prisma.task_Note.groupBy({
      by: ['createdAt'],
      where: {
        user_id: user_id
      },
      _sum: {
        time: true,
      },
    })
};