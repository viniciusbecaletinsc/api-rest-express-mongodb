import { Author } from "../models/Author.js"
import { Book } from "../models/Book.js"

export class BookController {
  async index(req, res) {
    const { query = "" } = req.query

    const books = await Book.find({
      title: new RegExp(query, 'i')
    })

    return res.json(books)
  }

  async show(req, res) {
    const { id } = req.params

    const book = await Book.findById(id)

    if (!book) {
      throw new AppError(404, 'Book not found')
    }

    return res.json(book)
  }

  async store(req, res) {
    const { title, price, pages, authorId } = req.body

    const author = await Author.findById(authorId)

    if (!author) {
      return res.status(404).json({ message: 'Author not found' })
    }

    await Book.create({
      title,
      price,
      pages,
      author
    })

    return res.sendStatus(201)
  }

  async update(req, res) {
    const { id } = req.params
    const { title, price, pages, authorId } = req.body

    const book = await Book.findById(id)

    if (!book) {
      throw new AppError(404, 'Book not found')
    }

    let author

    if (authorId) {
      author = await Author.findById(authorId)

      if (!author) {
        throw new AppError(404, 'Author not found')
      }
    }

    const bookData = {
      title: title || book.title,
      price: price || book.price,
      pages: pages || book.pages,
      author: author || book.author
    }

    await Book.updateOne({ _id: id }, bookData)

    return res.sendStatus(204)
  }

  async delete(req, res) {
    const { id } = req.params

    const book = await Book.findById(id)

    if (!book) {
      throw new AppError(404, 'Book not found')
    }

    await Book.deleteOne({ _id: id })

    return res.sendStatus(204)
  }
}