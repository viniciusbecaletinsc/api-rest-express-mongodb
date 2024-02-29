import { Router } from 'express'
import { AuthorController } from '../controllers/AuthorController.js'

export const authorRoutes = Router()
const authorController = new AuthorController()

authorRoutes.get("/", authorController.index)
authorRoutes.post("/", authorController.store)
authorRoutes.put("/:id", authorController.update)
authorRoutes.delete("/:id", authorController.delete)
