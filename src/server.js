import express from 'express'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const MOCK_LIVROS = [
  {
    id: 1,
    title: "O Senhor dos Anéis"
  },
  {
    id: 2,
    title: "Harry Potter"
  }
]

app.get("/", (req, res) => {
  return res.send("Hello World")
})

app.get("/livros", (req, res) => {
  return res.json(MOCK_LIVROS)
})

app.post("/livros", (req, res) => {
  const { id, title } = req.body

  MOCK_LIVROS.push({ id, title })

  return res.sendStatus(201)
})

app.listen(port, () => console.log(`Server is running on port ${port}`))