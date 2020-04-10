var numSquares = 6; 
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
// add mode buttons listeners
  setUpModeBtns();
  // add squares listeners
  setUpSquares();
  reset();
}

function setUpModeBtns(){
  // loop through the mode buttons
  for(var i=0; i<modeButtons.length; i++){
    // add event listener to each mode button
    modeButtons[i].addEventListener("click", function(){
      //change the background colors of the mode buttons
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //if textcontent is easy, numSquares is 3, otherwise it is 6
      this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
      // if(this.textContent === "Easy"){
      // numSquares = 3;
      // } else{
      //   numSquares = 6;
      // }
      //use a separate reset function
      reset();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    // // add initial colors to squares (can skip this step because reset already done this)
    // squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click",function(){
    // grab clicked square color
      var clickedColor = this.style.backgroundColor; 
    // compare clicked square color to picked color
      if(clickedColor === pickedColor){
        changeColor(clickedColor);
        message.textContent = "Correct!";
        h1.style.backgroundColor = clickedColor; 
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
      }
    });
  }
}

function reset(){
  //generate new colors
  colors = generateRandomColors(numSquares);
  // choose a correct color
  pickedColor = pickColor();
  // change the text to the correct color
  colorDisplay.textContent = pickedColor;
  // change the text of reset button
  resetBtn.textContent = "New Colors";
  // change the message to an empty string
  message.textContent = "";
  // change the colors of squares
  for(var i = 0; i < squares.length; i++){
    // if there is a new color to all the corresponding squares (in case of hard mode)
    if(colors[i]){
      // unhiding all the squares
      squares[i].style.display = "block";
      // change the colors of the squares
      squares[i].style.backgroundColor = colors[i];
    } else {
      // if not(in case of easy mode), hide the squares
      squares[i].style.display = "none";
    }
    
  }
  // change the color of h1 to dark grey
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   h1.style.backgroundColor = "steelblue";
//   // generate random 3 colors
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   // pick one color from these three colors as the target color
//   pickedColor = pickColor();
//   // change the text of the picked color
//   colorDisplay.textContent = pickedColor;
//    // change the message to an empty string
//    message.textContent = "";
//   // loop through the squares 
//   for(var i = 0; i<squares.length; i++){
//     //if there is a new color corresponding to the square
//     if(colors[i]){
//     // display the new color in the square
//       squares[i].style.backgroundColor = colors[i];
//     // if there is no new color corresponding to that square
//     }else{
//       // hide the squares 
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   h1.style.backgroundColor = "steelblue";
//   // generate random 6 colors
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   // pick one color from these colors as the target color
//   pickedColor = pickColor();
//   // change the text of the picked color;
//   colorDisplay.textContent = pickedColor;
//    // change the message to an empty string
//    message.textContent = "";
//   // loop through the squares
//   for(var i = 0; i<squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetBtn.addEventListener("click", function(){
  reset();
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
  return "rgb" + "(" + r + ", " + g +", " + b + ")";
}
