var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
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
      message.textContent = "Success!";
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