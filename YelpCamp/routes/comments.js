var express = require("express");
var router = express.Router({mergeParams:true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//comments routes
// comment new route - display a new form to create a new comment
router.get("/new",isLoggedIn, function(req,res){
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
router.post("/",isLoggedIn,function(req,res){
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

// isLoggedIn middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
}

module.exports = router;