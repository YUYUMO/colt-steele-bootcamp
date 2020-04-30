var express = require("express");
var app = express();
var request = require("request");
// tell express all of our templates are ejs

app.set("view engine", "ejs");

app.get("/results", function(req, res){
  request('http://www.omdbapi.com/?s=london&apikey=thewdb', function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render("results",{data:data});
    }
  });
});

app.listen(3000,function(){
  console.log("movie app has started!");
});