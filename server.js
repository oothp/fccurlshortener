require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/shortener')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use('/', routes)

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port);
});
