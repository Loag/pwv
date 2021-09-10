import {I_New_Account} from "./account-interface";
import { logger } from "../../utils";
import {
  getAccountDB,
  createAccountDB
} from "./account-data-access";
import { newAccountSchema, idSchema } from "./account-schema";
import { vac } from "../../utils/error";

/*
  this is where all of the business logic for the account takes place. the functions
  here are called in the controller
*/

export const getAccountService = async (id: string) => {
  const vac_id = vac(idSchema, id)
  logger.info(`Input Id valid for id: ${id}`);
  const account = await getAccountDB(vac_id);
  logger.info(`successfully found account with id: ${id}`)
  return account;
};

// called by create user controller
export const createAccountService = async (input_data: I_New_Account) => {
  const account = vac(newAccountSchema, input_data)
  logger.info("Input Account data valid.")
  const created_account = await createAccountDB(account);
  logger.info("successfully created new account.")
  return created_account;
};

// export const updateAccountService = async (id: string, update_data: any) => {
//   return await updateAccountDB(id, update_data);
// };

// export const deleteAccountService = async (id: string) => {
//   const account = await getAccountService(id);
//   // try to delete account here
//   await deleteAccountDB(id);
// };
