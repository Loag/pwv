import { 
  getTodayTimeDB, 
  getAllTimeDB
} from "./time-data-access";
import { idSchema } from "./time-schema";
import {vac} from "../../../utils/error";
import { logger } from "../../../utils";

export const getUserTimeTodayService = async (id: number) => {
  const vac_id: number = vac(idSchema, id)
  logger.info("Input id valid for user for time today")
  const today_time = await getTodayTimeDB(vac_id);
  logger.info("Got time for user with id for today")
  return today_time
};

export const getUserTimeAllService = async (id: number) => {
  const vac_id: number = vac(idSchema, id)
  logger.info("Input id valid for user for all time")
  const all_time = await getAllTimeDB(vac_id);
  logger.info("Got time for user with id for all time")
  return all_time
};