/*
  this is where all of the routes for the account
*/

import { Router } from "express";

/*
 ***************
 * controllers *
 ***************
 */
import {
  getAccount,
  createAccount,
  // updateAccount,
  // deleteAccount,
} from "./account-controller";
import { catcher } from "../../utils/error";

const router: Router = Router();

/*
 **************
 * Routes *
 **************
 */

router.get("/:id", catcher(getAccount));
router.post("/", catcher(createAccount));
// router.put("/:id", catcher(updateAccount));
// router.delete("/:id", catcher(deleteAccount));

export const AccountRouter: Router = router;
