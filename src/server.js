import express from 'express'

const app = express()
const port = 3000

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

app.listen(port, () => console.log(`Server is running on port ${port}`))