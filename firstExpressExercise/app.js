var express = require("express");
// run express and save it in a variable
var app = express();

var animalsData = {
  "dog" : "Woof Woof!",
  "pig" : "Oink",
  "cow" : "Moo"
}

// "/" => "Hi there, welcome to my assignment!"
app.get("/",function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res){
  var name = req.params.animal.toLowerCase();
  if(name in animalsData){
    res.send("The " + name + " says '" + animalsData[name] +"'");
  }else {
    res.send("I don't know what " + name + " says.");
  }
});

app.get("/repeat/:word/:times", function(req,res){
  var word = req.params.word;
  var number = Number(req.params.times);
  var sumOfWords = '';
  for(var i = 0; i < number; i++){
    sumOfWords += word + " ";
  }
  res.send(sumOfWords);
});

app.get("*", function(req,res){
  res.send("Sorry, page not found... what are you doing with your life?");
});

// Tell Express to listen for requests (start server)

app.listen(3000, function(){
  console.log("Server has started!");
});

