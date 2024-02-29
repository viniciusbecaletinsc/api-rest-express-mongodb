import { Router } from 'express'
import { BookController } from '../controllers/BookController.js'

export const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.get("/", bookController.index)
bookRoutes.post("/", bookController.store)
bookRoutes.put("/:id", bookController.update)
bookRoutes.delete("/:id", bookController.delete)
