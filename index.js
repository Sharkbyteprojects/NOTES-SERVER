const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const movieRouter = require('./filemaster');

const app = express();

app.use(helmet.xssFilter());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => response.redirect('/filemaster'));

app.use(morgan('common', { immediate: true }));

app.use('/filemaster', movieRouter);

app.listen(80, () => {
  console.log('Server is listening to http://localhost');
});
