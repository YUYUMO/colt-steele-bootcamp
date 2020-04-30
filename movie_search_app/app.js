var express = require("express");
var app = express();
var request = require("request");
// tell express all of our templates are ejs

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("search");
});

app.get("/results", function(req, res){
  // search is the name of the form field
  var query = req.query.search;
  var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render("results",{data:data});
    }
  });
});

app.listen(3000,function(){
  console.log("movie app has started!");
});