// Get age and convert it into number because prompt always returns a string
var age = Number(prompt("How old are you? Please enter your age"))
// If age is negative
if (age < 0){
  console.log("This is an invalid answer. Age cannot be negative.")
}
//If age is 21
if (age===21){
  console.log("happy 21st birthday!!")
}

//If age is odd
if ((age%2)!==0){
  console.log("your age is odd!")
}

if (age%(Math.sqrt(age))===0){
  console.log("your age is a perfect square!")
}
