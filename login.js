var express = require("express");
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/login_view', function(req, res){
   res.render('login_view', {
      user: {name: "Ayush", age: "20"}
   });
});

app.listen(3000);
