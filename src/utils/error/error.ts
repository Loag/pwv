/*
 * this is the error handler for the backend
 */

class AppError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    Error.captureStackTrace(this);
  }
}

// this is if the input data is malformed, need to use JOI
class BadRequestError extends AppError {
  constructor(message: string) {
    super(400, message || "Request was malformed.");
  }
}

// this is if the user or input data is not found
class NotFoundError extends AppError {
  constructor(message?: string) {
    super(404, message || "Not Found.");
  }
}

// class UnAuthError extends AppError {
//   constructor(message?: string) {
//     super(401, message || "Not Authenticated");
//   }
// }

// class ForbiddenError extends AppError {
//   constructor(message?: string) {
//     super(403, message || "Resource Forbidden.");
//   }
// }

class InternalError extends AppError {
  constructor(message?: string) {
    super(500, message || "An unexpected problem has occured.");
    process.exit(1)
  }
}

export {
  BadRequestError,
  NotFoundError,
  // UnAuthError,
  // ForbiddenError,
  InternalError,
};
