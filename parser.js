var bodyParser = require('body-parser');
var app = bodyParser();
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())
