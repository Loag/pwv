import { Router } from 'express';
import { 
  getPresignedURL
 } from './media-controller';
 import { catcher } from "../../utils/error";

const router: Router = Router();

router.get("/signed/:id", catcher(getPresignedURL)); // get a specific TASK with id. This includes user_task

export const MediaRouter: Router = router;