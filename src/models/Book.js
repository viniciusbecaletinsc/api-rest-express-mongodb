import mongoose from 'mongoose'
import { authorSchema } from '../models/Author.js'

const bookSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  pages: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  author: authorSchema
}, {
  versionKey: false
})

export const Book = mongoose.model('books', bookSchema)