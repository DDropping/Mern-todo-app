const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3001;

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

todoRoutes.route('/').get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

//get specific todo item based on id
todoRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Todo.findById(id, function(err, todo) {
    res.json(todo);
  });
});

//send post request to add item to databse
todoRoutes.route('/add').post(function(req, res) {
  let todo = new Todo(req.body);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: 'todo add: succesful' });
    })
    .catch(err => {
      res.status(400).send('todo add: failed');
    });
});

//change todo status
todoRoutes.route('/update/:id').post(function(req, res) {
  Todo.findById(req.params.id, function(req, res) {
    if (!todo) {
      res.status(404).send('data not found');
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then(todo => {
          res.json('todo updated');
        })
        .catch(err => {
          res.status(400).send('update not possible');
        });
    }
  });
});

//=======================================================//

//Run server on port PORT
app.listen(PORT, function() {
  console.log('Server is now listening on port: ' + PORT);
});
