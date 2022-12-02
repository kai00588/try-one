const express = require('express');
// import { engine } from 'express-handlebars';
const hbs = require('express-handlebars');

const app = express();

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);