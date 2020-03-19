//set up a secret number
var secretNumber = 6;
//ask user to guess a number and turn the string into a number
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check if the number equals to secret number
if(guess === secretNumber){
  alert("Your guess is right!!");
}
//check if the guess is higher than secret number
else if(guess > secretNumber){
  alert("Your number is too high. Guess again!");
}
//check if the number is lower than secret number
else{
  alert("Your number is too low. Guess again!");
}