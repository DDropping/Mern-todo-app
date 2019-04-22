const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

//use database models
let Todo = require('./models/todo-model');

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

//use express router
const todoRoutes = express.Router();
app.use('/todos', todoRoutes);

//=========================== ENDPOINTS ============================//
//TODO: get DB data
todoRoutes.route('/').get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

//TODO: send post request to add item to databse
todoRoutes.route('/add').post(function(req, res) {
  let todo = new Todo(req.body);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: 'todo added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new todo failed');
    });
});

//=======================================================//

//Run server on port PORT
app.listen(PORT, function() {
  console.log('Server is now listening on port: ' + PORT);
});
