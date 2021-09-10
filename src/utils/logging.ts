/*
  this is the logging utility this will bne used to log all events in the system.
*/
import pino from "pino";
import {v4} from "uuid";
import {Request, Response, NextFunction} from "express";
import {context} from "./context"

const pino_logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

// Proxify logger instance to use child logger from context if it exists
export const logger = new Proxy(pino_logger, {
  get(target, property, receiver) {
    target = context.getStore()?.get('logger') || target;
    return Reflect.get(target, property, receiver)
  },
});

// Generate a unique ID for each incoming request and store a child logger in context
// to always log the request ID
export const loggerHandler = (req: Request, res: Response, next: NextFunction) => {
  const child = pino_logger.child({ requestId: v4() });
  const store = new Map();
  store.set("logger", child)
  return context.run(store, next);
};