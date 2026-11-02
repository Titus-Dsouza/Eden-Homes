import type { ErrorRequestHandler } from 'express'
import { HttpError } from './http-error.js'

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  _request,
  response,
  next,
) => {
  if (response.headersSent) {
    next(error)
    return
  }

  const statusCode = error instanceof HttpError ? error.statusCode : 500

  if (statusCode >= 500) {
    console.error(error)
  }

  response.status(statusCode).json({
    error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
    message:
      error instanceof HttpError && statusCode < 500
        ? error.message
        : 'An unexpected error occurred',
  })
}
