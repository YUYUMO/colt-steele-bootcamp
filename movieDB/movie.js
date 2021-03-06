var movies = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
]

for(var i = 0; i < movies.length; i++){
  if(movies[i].hasWatched === true){
    console.log ("You have watched " + "\"" + movies[i].title + " \" - " + movies[i].rating + " stars");
  } else {
    console.log ("You have not seen " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars");
  }
}

//alternative solution
// movies.forEach(function(movie){
//   console.log(buildString(movie));
// });

// function buildString(movie){
//   var result = "You have";
//   if(movie.hasWatched === true){
//     result+=" watched ";
//   }
//   else{
//     result+=" not seen ";
//   }
//   result+= "\"" + movie.title + "\" " + "- " + movie.rating + " stars";
//   return result;
// }