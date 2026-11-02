import cors from 'cors'
import express from 'express'
import { corsOptions } from './config/cors.js'
import { errorHandler } from './middleware/error-handler.js'
import { notFoundHandler } from './middleware/not-found.js'
import { healthRouter } from './routes/health.routes.js'

export function createApp() {
  const app = express()

  app.use(cors(corsOptions))
  app.use(healthRouter)
  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
