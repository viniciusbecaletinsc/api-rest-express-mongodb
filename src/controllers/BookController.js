import { Book } from "../models/Book.js"

export class BookController {
  async index(_, res) {
    const books = await Book.find({})

    return res.json(books)
  }

  async store(req, res) {
    const { title, author, price, pages } = req.body

    await Book.create({
      title,
      author,
      price,
      pages
    })

    return res.sendStatus(201)
  }

  async update(req, res) {
    const { id } = req.params
    const { title } = req.body

    const book = await Book.findById(id)

    if (!book) {
      return res.sendStatus(404)
    }

    await Book.updateOne({ _id: id }, { title })

    return res.sendStatus(204)
  }

  async delete(req, res) {
    const { id } = req.params

    const book = await Book.findById(id)

    if (!book) {
      return res.sendStatus(404)
    }

    await Book.deleteOne({ _id: id })

    return res.sendStatus(204)
  }
}