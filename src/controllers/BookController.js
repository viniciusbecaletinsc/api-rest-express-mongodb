import { Author } from "../models/Author.js"
import { Book } from "../models/Book.js"

export class BookController {
  async index(_, res) {
    const books = await Book.find({})

    return res.json(books)
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
      return res.status(404).json({ message: 'Book not found' })
    }

    let author

    if (authorId) {
      author = await Author.findById(authorId)

      if (!author) {
        return res.status(404).json({ message: 'Author not found' })
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
      return res.sendStatus(404)
    }

    await Book.deleteOne({ _id: id })

    return res.sendStatus(204)
  }
}