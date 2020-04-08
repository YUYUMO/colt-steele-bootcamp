var numSquares = 6; 
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  // generate random 3 colors
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  // pick one color from these three colors as the target color
  pickedColor = pickColor();
  // change the text of the picked color
  colorDisplay.textContent = pickedColor;
  // loop through the squares 
  for(var i = 0; i<squares.length; i++){
    //if there is a new color corresponding to the square
    if(colors[i]){
    // display the new color in the square
      squares[i].style.backgroundColor = colors[i];
    // if there is no new color corresponding to that square
    }else{
      // hide the squares 
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  // generate random 6 colors
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  // pick one color from these colors as the target color
  pickedColor = pickColor();
  // change the text of the picked color;
  colorDisplay.textContent = pickedColor;
  // loop through the squares
  for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

reset.addEventListener("click", function(){
  //generate new colors
  numSqaures = 6;
  colors = generateRandomColors(numSquares);
  // choose a correct color
  pickedColor = pickColor();
  // change the text to the correct color
  colorDisplay.textContent = pickedColor;
  // change the colors of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  // change the color of h1 to dark grey
  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click",function(){
  // grab clicked square color
    var clickedColor = this.style.backgroundColor; 
  // compare clicked square color to picked color
    if(clickedColor === pickedColor){
      changeColor(clickedColor);
      message.textContent = "Correct!";
      h1.style.backgroundColor = clickedColor; 
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  });
}

function changeColor(color){
  //loop through the squares
  for(var i = 0; i<squares.length; i++){
  // change colors of the squares to the specified color
    squares[i].style.backgroundColor = color; 
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //create an array
  arr = [];
  //loop through the array
  for(var i = 0; i < num; i++){
    // generate random colors and push them to array
    arr.push(randomColors());
  }
  // return the array
  return arr;
}

function randomColors(){
  // choose a random red value
  var r = Math.floor(Math.random()*256);
  // choose a random green value
  var g = Math.floor(Math.random()*256);
  // choose a random blue value
  var b = Math.floor(Math.random()*256);
  // combine these values and return a string
  return "rgb" + "(" + r + ", " + g +", " + b + ")";
}
