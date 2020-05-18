var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./models/user");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose")

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/secretPage', { useNewUrlParser: true }); 

var app = express();
app.set('view engine', 'ejs');
app.use(require("express-session")({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret",function(req, res){
   res.render("secret"); 
});


app.listen(3000, function(){
  console.log("server started.......");
})