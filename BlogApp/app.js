var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

//set up mongoose
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true }); 

//set all the templates as ejs
app.set("view engine", "ejs");

//use public folder for stylesheet
app.use(express.static("public"));

// set up body parser
app.use(bodyParser.urlencoded({extended: true}));

// tell our app to use method override
app.use(methodOverride("_method"));

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
//     image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     body: "HELLO, THIS IS A BLOG POST!"
//   }
// )

//RESTFUL routes

app.get("/", function(req,res){
  res.redirect("/blogs");
});

// index route

app.get("/blogs", function(req,res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("ERROR!");
    } else{
      res.render("index", {blogs: blogs});
    }
  });
});

// new route
app.get("/blogs/new", function(req, res){
  res.render("new");
});

//create route
app.post("/blogs", function(req,res){
  //create blog
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    }else{
      // redirect to the index
      res.redirect("/blogs");
    }
  });
});

// show route
app.get("/blogs/:id",function(req,res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    }else{
      res.render("show", {blog: foundBlog});
    }
  });
});
 
//EDIT route
app.get("/blogs/:id/edit",function(req,res){
  //find the right blog by ID
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    }else{
      res.render("edit",{blog:foundBlog});
    }
  });
})

//UPDATE route
app.put("/blogs/:id",function(req,res){
  // (id of the blog, new data to be parsed, callback)
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

// set up listener
app.listen(3000, function(){
  console.log("Server has started!!");
});
