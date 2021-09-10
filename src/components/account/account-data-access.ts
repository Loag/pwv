import { I_New_Account } from "./account-interface";
import { PrismaClient } from "@prisma/client";
import { nfc } from "../../utils/error";
const prisma = new PrismaClient();

export const getAccountDB = async (id: string) => {
  // get the data from the database here with the id
  return await nfc(
    prisma.account.findUnique({
      where: {
        account_id: id,
      },
      include: {
        users: true,
      },
    })
  );
};

export const createAccountDB = async (account: I_New_Account) => {
  // create a new accout in the database
  return await prisma.account.create({
    data: {
       ...account
    }
  });
};

// export const updateAccountDB = async (id: string, account: any) => {
//   // create a new accout in the database

//   return await prisma.account.update({
//     where: {
//       id: id,
//     },
//     data: {
//       ...account,
//     },
//   });
// };

// this is done manually
// export const deleteAccountDB = async (id: string) => {
//   return await prisma.account.delete({
//     where: {
//       id: id,
//     },
//   });
// };
