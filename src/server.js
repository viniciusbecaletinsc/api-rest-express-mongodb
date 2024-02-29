import express from 'express'
import { connection } from './database/config.js'
import { routes } from './routes/index.js'

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

app.listen(port, () => console.log(`Server is running on port ${port}`))