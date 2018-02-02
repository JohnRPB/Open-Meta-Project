// server/app.js
const express = require('express');
const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Setup logger

// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(morganToolkit());
//mongo-middleware
// app.use((req, res, next) =>
const mongoose = require('mongoose');

app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require('../mongo')().then(() => next());
  }
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//json parser
app.use(bodyParser.json());

app.use('/api', require('./api'));

// Serve static assets
// app.use(require('./tokenVerify'));
app
  .use(express.static(path.resolve(__dirname, '..', 'build')))
  // Serve our api

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

module.exports = app;
