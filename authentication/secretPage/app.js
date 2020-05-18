var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/secretPage', { useNewUrlParser: true });

app.set('view engine','ejs');

//secret route
app.get("/secret", function(req,res){
  res.render("secret");
});

// root route
app.get("/", function(req,res){
  res.render("home");
})

app.listen(3000, function(){
  console.log("Server has started!!");
});