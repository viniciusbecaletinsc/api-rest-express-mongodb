import { Router } from 'express'
import { bookRoutes } from './bookRoutes.js'
import { authorRoutes } from './authorRoutes.js'

export const routes = Router()

routes.use('/books', bookRoutes)
routes.use('/authors', authorRoutes)
