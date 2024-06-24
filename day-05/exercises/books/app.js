const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books=[
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get('/books',(req,res)=>{
    res.status(200).json(books);
})
app.get('/books/:id',(req,res)=>{
    const book = books.find(b=>b.id===parseInt(req.params.id));
    res.status(200).json(book);
})
app.post('/books',(req,res)=>{
    const { title, author } = req.body;
    const book = {
        id: books.length + 1,
        title,
        author
    }
    books.push(book);
    res.status(201).send(book);
})
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) res.status(404).send('The book was not found')

    const { title, author } = req.body
    book.title = title
    book.author = author
    res.status(200).send(book)
})
app.delete('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1) res.status(404).send('The book was not found')

    books.splice(index, 1)
    res.status(204).send()
})
app.listen(3000,()=>{
    console.log("listening")
})
