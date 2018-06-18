var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var express = require("express");
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var Person = mongoose.model("Person", personSchema);
app.get('/person', function(req, res){
   res.render('person');
});

app.listen(3000);
