import { Author } from "../models/Author.js"
import { AppError } from '../utils/AppError.js'

export class AuthorController {
  async index(_, res) {
    const authors = await Author.find({})

    return res.json(authors)
  }

  async store(req, res) {
    const { name } = req.body

    await Author.create({
      name
    })

    return res.sendStatus(201)
  }

  async update(req, res) {
    const { id } = req.params
    const { name } = req.body

    const author = await Author.findById(id)

    if (!author) {
      throw new AppError(404, 'Author not found')
    }

    const authorData = {
      name: name || author.name
    }

    await Author.updateOne({ _id: id }, authorData)

    return res.sendStatus(204)
  }

  async delete(req, res) {
    const { id } = req.params

    const author = await Author.findById(id)

    if (!author) {
      throw new AppError(404, 'Author not found')
    }

    await Author.deleteOne({ _id: id })

    return res.sendStatus(204)
  }
}