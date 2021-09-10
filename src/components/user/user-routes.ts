/*
  this is where all of the routes for the account
*/

import { Router } from 'express';
import { TimeRouter } from './time';
import {getUser, getUserInternal, updateUser, createUser} from "./user-controller";
import { catcher } from "../../utils/error";

const router: Router = Router();

router.get("/:id", catcher(getUser));
router.get('/internal/:id', catcher(getUserInternal))
router.put("/:id", catcher(updateUser));
router.post("/", catcher(createUser));

// time routes are under user path
router.use("/time", TimeRouter)

export const UserRouter: Router = router;