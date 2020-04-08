var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
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

reset.addEventListener("click", function(){
  //generate new colors
  colors = generateRandomColors(6);
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
  return ("rgb" + "(" + r + ", " + g +", " + b + ")");
}
