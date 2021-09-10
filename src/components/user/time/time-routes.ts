import { Router } from 'express';
import {getTodayUserTime, getAllUserTime} from "./time-controller";
import { catcher } from "../../../utils/error";

const router: Router = Router();

router.get("/:id/today", catcher(getTodayUserTime));
 router.get("/:id/all", catcher(getAllUserTime));

export const TimeRouter: Router = router;