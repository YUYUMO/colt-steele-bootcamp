console.log("Is Even Function");
// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }
//   return false;
//   }

function isEven(num){
  return num % 2 === 0;
}

console.log("Factorial function");

function factorial(num){
  //define a result variable
  var result = 1;
  //calculate the factorial and store in result variable
  for(var i = 2; i<=num; i++){
    result = result * i;
  }
  // return the result variable
  return result;
}
// example : factorial(4) = 1*2*3*4
// first loop: 1 * 2
// second loop: 2 * 3
// third loop: 6 * 4
// fourth loop does not happen because i=5 and it is bigger than num= 4

// Alternative solutions
// example 1: 
// function factorial(num){
//   if(num===0){
//     return 1;
//   }
//   var result = num;
//   for(var i = num-1; i>=1; i--){
//     result= result * i;
//   }
//   return result;
// }
//example 2:
// function factorial(num){
//   if(num ===1 || num === 0){
//     return 1;
//   }
//   for (i = num -1; i >= 1; i--){
//     num = num * i;
//   }
//   return num;
// }
// example 3: 
// function factorial(num){
//   var result = num;
//   if(num ===1 || num === 0){
//     return 1;
//   }
//   while(num > 1){
//     num--;
//     result = num * result;
//   }
//   return result;
// }

console.log("Kebab to Snake Function");
function kebabToSnake(str){
  var newString = str.replace(/-/g,"_");
  return newString;
}
