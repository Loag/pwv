import { 
  getUserDB, 
  getUserInternalDB,
  updateUserDB, 
  createUserDB 
} from "./user-data-access";

import {I_New_User} from "./user-interface";

import { idSchema, createUserSchema, updateUserSchema } from "./user-schema";

import {vac} from "../../utils/error";
import { logger } from "../../utils";

export const getUserService = async (id: string) => {
  
  const vac_id: string = vac(idSchema, id)
  logger.info("Input id valid for user")
  const user = await getUserDB(vac_id);
  logger.info("Found user with id")
  return user
};

export const getUserInternalService = async (id: string) => {
  
  const vac_id: string = vac(idSchema, id)
  logger.info("Input internal id valid for user")
  const user = await getUserInternalDB(vac_id);
  logger.info("Found user with internal id")
  return user
};

export const createUserService = async (create_user: I_New_User) => {
  const vac_user: I_New_User = vac(createUserSchema ,create_user)
  logger.info("fields valid for new user")
  const created_user = await createUserDB(vac_user);
  logger.info("Created user")
  return created_user
};

export const updateUserService = async (id: string, update_user: I_New_User) => {
  const vac_id: string = vac(idSchema, id)
  const vac_update_user: I_New_User = vac(updateUserSchema ,update_user)
  logger.info("Input id, and updated fields valid for user")
  const updated_user = await updateUserDB(vac_id, vac_update_user);
  logger.info("Updated user")
  return updated_user
};

// export const deleteUserService = async (id: string) => {
//   try {
//     return await deleteUserDB(id);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
