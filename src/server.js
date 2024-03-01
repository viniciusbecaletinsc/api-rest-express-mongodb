import 'express-async-errors'
import express from 'express'
import mongoose from 'mongoose'
import { connection } from './database/config.js'
import { routes } from './routes/index.js'
import { AppError } from './utils/AppError.js'

const database = await connection()

database.on('error', (error) => {
  console.error('Connection to database failed', error)
})

database.once('open', () => {
  console.log('Connection to database established')
})

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use((error, _, res, next) => {
  if (error instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(error.errors).map((error) => error.message).join(', ')
  
    return res.status(400).json({ message: `Houve um erro de validação de dados: ${errors}` })
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message })
  }
  
  return res.status(500).json({ message: 'Internal server error' })
})
app.use((_, res) => {
  return res.status(404).json({ message: 'Route not found' })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))