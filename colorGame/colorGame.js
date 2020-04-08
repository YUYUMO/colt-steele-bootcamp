var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
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
  return ("rgb" + "(" + r + ", " + g +", " + b + ")");
}