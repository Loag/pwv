import app from './app';
import http from 'http';
import {InternalError} from "./utils/error";
import {logger} from "./utils/logging";

process.on('uncaughtException', function(error) {
  logger.error(`An unexpected error occured: ${error}`)
  throw new InternalError()
});

// Get port from environment and store in Express.
const port = process.env.PORT || 3000;

// Create HTTP server.
const server = http.createServer(app);
server.listen(port, () => {
});