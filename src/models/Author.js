import mongoose from 'mongoose'

export const authorSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  }
})

export const Author = mongoose.model('authors', authorSchema)