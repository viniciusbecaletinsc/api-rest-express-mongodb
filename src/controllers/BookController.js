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
    const { title, author, price, pages } = req.body

    const book = await Book.findById(id)

    if (!book) {
      return res.sendStatus(404)
    }

    const bookData = {
      title: title || book.title,
      author: author || book.author,
      price: price || book.price,
      pages: pages || book.pages
    }

    await Book.updateOne({ _id: id }, bookData)

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