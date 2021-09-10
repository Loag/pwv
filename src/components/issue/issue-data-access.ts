import { PrismaClient } from "@prisma/client";
import {I_New_Issue} from "./issue-interface";
import { nfc } from "../../utils/error";
const prisma = new PrismaClient();

// get all open issues... kind of useless..
export const getIssuesDB = async () => {
  // get the data from the database here with the id
  return await nfc(
    prisma.issue.findMany({
      where: {
        task: null
      },
      include: {
        user: true
      }
    })
  );
};

// get the open issues for an account (town)
export const getAccountIssuesDB = async (city: string) => {
  return await nfc(
    prisma.issue.findMany({
      where: {
        AND: [
          {
            task: null
          },
          {
            city: city
          }
        ],
      },
      include: {
        user: true
      }
    })
  );
};

// get issues that a user has created
export const getUserIssuesDB = async (userId: number) => {
  return await nfc(
    prisma.issue.findMany({
      where: {
        user_id: userId
      },
      include: {
        task: true
      }
    })
  );
}

export const getIssueDB = async (id: number) => {
  // get the data from the database here with the id
  return await nfc(
    prisma.issue.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true
      },
    })
  );
};

export const createIssueDB = async (issue: I_New_Issue) => {
  // create a new accout in the database
  return await prisma.issue.create({
    data: {
      ...issue
    },
  });
};