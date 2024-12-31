import express from 'express';

import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditTemplate from './views/edit.js';

import BOOKS_DATA from './data/data.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const id = (BOOKS_DATA.length + 1).toString();

  BOOKS_DATA.push({id, title, author});

  res.redirect('/books/' + id)
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);
  
  res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
    const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
    BOOKS_DATA.splice(idx, 1);
    
    res.send();
});

app.put('/books/:id', (req, res) => {
    const {id} = req.params;
    const {title, author} = req.body;
    
    const newBook = {id, title, author};

    const index = BOOKS_DATA.findIndex(b => b.id === id);
    BOOKS_DATA[index] = newBook;

    res.send(createBookTemplate(newBook));
});

app.get('/books/edit/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);

  res.send(createEditTemplate(book));
});

app.post('/books/search', (req, res) => {
    const text = req.body.search.toLowerCase();

    const books = BOOKS_DATA.filter((b) => b.title.toLowerCase().includes(text));

    res.send(createListTemplate(books));
  });
  
app.post('/author/search', (req, res) => {
    const text = req.body.search.toLowerCase();

    const books = BOOKS_DATA.filter((b) => b.author.toLowerCase().includes(text));

    res.send(createListTemplate(books));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});