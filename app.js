const express = require("express")
const bodyParser = require("body-parser")

const booksRoute = require("./routes/books")
const authorRoute = require ("./routes/authors")

const PORT = 5000
const app = express()

app.use(express.static("public"))
app.use(express.json())

app.use("/books", booksRoute)
app.use("/authors", authorRoute)

app.get("/", (req, res) => {
    res.end('Home page')
})

app.get("/about", (req, res) => {
    res.end("About page")
})

app.get("/contact", (req, res) => {
    res.end("Contact page")
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})