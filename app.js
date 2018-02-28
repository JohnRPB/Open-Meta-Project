// server/app.js
const express = require('express');
const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api/server/api.js');

// Setup logger

// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// app.use(morganToolkit());
//mongo-middleware
// app.use((req, res, next) =>
const mongoose = require('mongoose');
console.log(process.env);

app.use(express.static(path.join(__dirname, 'build')));
app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require('./api/mongo.js')().then(() => next());
  }
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//json parser
app.use(bodyParser.json());

app.use('/api', api);
// Serve static assets
// app.use(require('./api/server/tokenVerify.js'));
// app.use('/', (req,res,next) => res.send('Works'));
// app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Serve our api

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.status(404).end();
});

module.exports = app;
