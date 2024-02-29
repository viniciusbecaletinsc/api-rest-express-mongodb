import { Router } from 'express'
import { BookController } from '../controllers/BookController.js'

export const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.get("/livros", bookController.index)
bookRoutes.post("/livros", bookController.store)
bookRoutes.put("/livros/:id", bookController.update)
bookRoutes.delete("/livros/:id", bookController.delete)
