import express from "express";
import cors from "cors";
import helmet from "helmet";
import {
  AccountRouter, 
  UserRouter,
  TaskRouter,
  IssueRouter,
  MediaRouter,
  ProjectRouter,
  ProblemRouter
 } from "./components";

import errorHandler from "./utils/error/errorHandler";
import {loggerHandler, auth, cache_policy} from "./utils";

// import * as dotenv from "dotenv";
// dotenv.config();

/*
  * App Variables
*/

const app = express();

/*
  *  App Configuration
*/

app.use(helmet());
app.use(cors());

// cache get requests to cool down 
app.use(cache_policy);

// this is the health check
app.use("/health", function(req, res) {res.sendStatus(200)})

// all routes are authenticated first
app.use(auth)

app.use(express.json());

app.use(loggerHandler)

app.use("/account", AccountRouter);
app.use("/user", UserRouter);
app.use("/issue", IssueRouter);
app.use("/task", TaskRouter);
app.use("/media", MediaRouter);
app.use("/project", ProjectRouter);
app.use("/problem", ProblemRouter);

// catch all errors
app.use(errorHandler);

export default app