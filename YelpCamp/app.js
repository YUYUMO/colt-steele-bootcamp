var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("landing");
})

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name:"Oeschinen Lake", image:"https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80"},
    {name: "Sierra National Forest", image:"https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},
    {name:"Flaming Gorge Reservoir", image:"https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"}
  ]
  res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function(){
  console.log("Server has started!!");
});