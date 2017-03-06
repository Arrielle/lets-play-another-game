var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var taskPath = require('./routes/tasks');

//middleware
app.use(express.static('public')); //gets index.html from public folder
app.use(bodyParser.json()); //use this for postman? Json encoded requests

// app.use('/tasks', taskPath);

app.listen(3000, function(){
  console.log('listening on 3000');
});
