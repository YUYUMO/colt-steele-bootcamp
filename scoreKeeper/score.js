var buttonP1 = document.querySelector("#p1");
var buttonP2 = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.getElementById("winningScoreDisplay");
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false; 

buttonP1.addEventListener("click", function(){
  if (!gameOver){
    p1Score ++;
    if(p1Score === winningScore){
      p1Display.classList.add("winning");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

buttonP2.addEventListener("click", function(){
  if(!gameOver){
    p2Score ++;
    if(p2Score === winningScore){
      p2Display.classList.add("winning");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }   
});

function reset(){
  p1Score = 0;
  p2Score = 0; 
  p1Display.classList.remove("winning");
  p1Display.textContent = p1Score;
  p2Display.classList.remove("winning");
  p2Display.textContent = p2Score;
  gameOver = false;
}

resetButton.addEventListener("click",function(){
  reset();
});

numInput.addEventListener("change",function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});
