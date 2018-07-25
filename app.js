const express = require('express');
const app = express();
const todoController = require('./Controller/todoController');

// set up template engine

app.set('view engine', 'ejs');

// set up static files

app.use(express.static('./public'));

// Fire controllers

todoController(app);

// Listen to port

app.listen(3000, () => {
    console.log("You are listening to port 3000");
});