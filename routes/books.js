const express = require("express")
const bookRouter = express.Router()

const books = [
    {
        title: "War and Peace",
        id: 1,
        year: 1960,
    },
    {
        title: "Act Like A Lady",
        id: 2,
        year: 2000,
    },
    {
        title: "Nwaenwenne",
        id: 3,
        year: 2008
    }
]

bookRouter.get("/", (req, res) => {
    res.json(books)
})

bookRouter.get("/:id", (req, res) => {
    const id = req.params.id
    const book = books.find(book => book.id == id)

    if(!book) {
        res.status(404).send("Book not found")
        return
    }

    res.json(book)
})

bookRouter.delete("/:id", (req, res) => {
    const id = req.params.id
    const index = book.find(book => book.id == id)

    if(index == -1) {
        res.status(404).send("Book not found")
        return
    }

    books.splice(index, 1)
    res.json(books)
})

module.exports = bookRouter