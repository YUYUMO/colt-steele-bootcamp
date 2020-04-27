var express = require("express");
// run express and save it in a variable
var app = express();

// "/" => "Hi there!"
app.get("/",function(req, res){
  res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
  res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req,res){
  console.log("Someone made a request to /dog");
  res.send("MEOW!");
});

app.get("/r/:subredditName", function(req,res){
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
  res.send("WELCOME TO COMMENTS PAGE!");
});

app.get("*", function(req,res){
  res.send("You are a STAR!!");
});

// Tell Express to listen for requests (start server)

app.listen(3000, function(){
  console.log("Server has started!");
});