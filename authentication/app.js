var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/secretPage', { useNewUrlParser: true });

app.use(require("express-session")({
  secret: "Rusty is the best and cutest bear in the world",
  resave: false,
  saveUninitialized: false 
}));

app.set('view engine','ejs');
app.use(passport,initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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