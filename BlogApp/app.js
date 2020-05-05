var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//set up mongoose
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true }); 

//set all the templates as ejs
app.set("view engine", "ejs");

//use public folder for stylesheet
app.use(express.static("public"));

// set up body parser
app.use(bodyParser.urlencoded({extended: true}));

//set up Mongoose schema
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
})

// compile schema into a model
var Blog = mongoose.model("Blog",blogSchema);

// create a blog post to test
// Blog.create(
//   {
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=800&q=60",
//     body: "HELLO, THIS IS A BLOG POST!"
//   }
// )

//RESTFUL routes
app.get("/", function(req,res){
  res.redirect("/blogs");
});


app.get("/blogs", function(req,res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("ERROR!");
    } else{
      res.render("index", {blogs: blogs});
    }
  });
});


// set up listener
app.listen(3000, function(){
  console.log("Server has started!!");
});
