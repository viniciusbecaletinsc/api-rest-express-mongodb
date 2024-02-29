import { Router } from 'express'
import { bookRoutes } from './bookRoutes.js'

export const routes = Router()

routes.use(bookRoutes)
