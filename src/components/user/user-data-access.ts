import { PrismaClient } from "@prisma/client";
import {I_New_User} from "./user-interface";
import { nfc } from "../../utils/error";

const prisma = new PrismaClient();

export const getUserDB = async (id: string) => {
  return await nfc(prisma.user.findUnique({
    where: {
      user_id: id,
    },
    include: {
      account: true,
    },
  }))
};

export const getUserInternalDB = async (id: string) => {
  return await nfc(prisma.user.findUnique({
    where: {
      internal_id: id,
    },
    include: {
      account: true,
    },
  }))
};

export const createUserDB = async (create_user: I_New_User) => {
  return await prisma.user.create({
    data: {
      ...create_user,
    },
  })
};

export const updateUserDB = async (id: string, update_user: I_New_User) => {
  return await nfc(prisma.user.update({
    where: {
      user_id: id,
    },
    data: {
      ...update_user,
    },
  }))
};

// export const deleteUserDB = async (id: string) => {
//   return await prisma.user.delete({
//     where: {
//       id: id,
//     },
//   });
// };
