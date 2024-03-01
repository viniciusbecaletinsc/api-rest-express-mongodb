import mongoose from 'mongoose'
import { authorSchema } from '../models/Author.js'

const bookSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: mongoose.Schema.Types.String,
    required: [true, "O campo 'title' é obrigatório"]
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: [true, "O campo 'price' é obrigatório"]
  },
  pages: {
    type: mongoose.Schema.Types.Number,
    required: [true, 'O número de páginas do livro é obrigatório'],
    min: [1, 'O livro deve ter no mínimo 1 página'],
  },
  author: authorSchema
}, {
  versionKey: false
})

export const Book = mongoose.model('books', bookSchema)