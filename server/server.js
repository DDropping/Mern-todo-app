const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3001;

//Use Middlewares
app.use(cors());
app.use(bodyParser.json());

//use mongoose to connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

//verify database connection
connection.once('open', function() {
  console.log('Connected to Mongo Database: Successful');
});

//Run server on port PORT
app.listen(PORT, function() {
  console.log('Server is now listening on port: ' + PORT);
});
