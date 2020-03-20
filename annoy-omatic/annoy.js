var response = prompt("Are we there yet?");

while (!response.includes("yeah") && !response.includes("yes")){
  var response = prompt("Are we there yet?");
}

alert ("Yay, we made it!");

// version 2
// var response = prompt("Are we there yet?");

// while (response.indexOf("yes") === -1){
//   var response = prompt("Are we there yet?");
// }

// alert ("Yay, we made it!");
