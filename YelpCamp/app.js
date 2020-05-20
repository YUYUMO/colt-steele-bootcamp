var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds")

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// console.log(__dirname);
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Once again Rusty wins cutest dog!",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Campground.create(
//   {
//     name: "Salmon Creek",
//     image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
//     description: "This is a huge creek. No bathroom. No water. Beautiful creek!"
//   },
//   function(err, campground){
//     if(err){
//       console.log(err);
//     }else {
//       console.log("NEWLY CREATED CAMPGROUND");
//       console.log(campground);
//     }
//   });

// var campgrounds = [
//   {name: "Sierra National Forest", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//   {name: "Flaming Gorge Reservoir", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//   {name: "Willamette National Forest", image: "https://images.unsplash.com/photo-1567135305474-775f8e317f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
//   {name: "Arches National Park", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"},
//   {name: "Sierra National Forest", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//   {name: "Flaming Gorge Reservoir", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//   {name: "Willamette National Forest", image: "https://images.unsplash.com/photo-1567135305474-775f8e317f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
//   {name: "Arches National Park", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"},
//   {name: "Sierra National Forest", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//   {name: "Flaming Gorge Reservoir", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//   {name: "Willamette National Forest", image: "https://images.unsplash.com/photo-1567135305474-775f8e317f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
//   {name: "Arches National Park", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}
// ]

app.get("/", function(req,res){
  res.render("landing");
})

// INDEX route - show all campgrounds
app.get("/campgrounds", function(req, res){ 
  //get all campgrounds from database
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds:allCampgrounds});
    }
  });
});

// CREATE route - add new dog to Database
app.post("/campgrounds", function(req,res){
  // get data from form and add to campgrounds array (body for parsing)
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
        // redirect to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

//NEW route - display form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("campgrounds/new");
});

//SHOW route - show info about one campground
app.get("/campgrounds/:id", function(req,res){
  //find the campground with provided id
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log(err);
    }else {
      // console.log(foundCampground);
      //render show template with that campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

//comments routes
// comment new route - display a new form to create a new comment
app.get("/campgrounds/:id/comments/new", function(req,res){
  //find campground by ID
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
    } else{
      res.render("comments/new", {campground: campground});
    }
  })
})

// comment CREATE route - add new comment to campground
app.post("/campgrounds/:id/comments", function(req,res){
  //lookup campground using ID
  Campground.findById(req.params.id, function(err,campground){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      // console.log(req.body.comment);
      //create new comment
      Comment.create(req.body.comment, function(err, comment){
        if(err){
          console.log(err);
        } else {
          //connect new comment to campground
          campground.comments.push(comment);
          campground.save();
          // redirect campground show page
          res.redirect("/campgrounds/" + campground._id);
        }
      })
    }
  })
})

//  ===========
// AUTH ROUTES
//  ===========

// show register form
app.get("/register", function(req, res){
  res.render("register"); 
});

// handle sign up logic
app.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register");
      }
      passport.authenticate("local")(req, res, function(){
         res.redirect("/campgrounds"); 
      });
  });
});

// show login form
app.get("/login", function(req, res){
  res.render("login"); 
});

//handling login logic
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

//logout route
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/campgrounds");
});

app.listen(3000, function(){
  console.log("Server has started!!");
});