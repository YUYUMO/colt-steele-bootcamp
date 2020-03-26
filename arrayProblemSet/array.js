//*** printReverse()***

function printReverse(array){
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}
printReverse(array);

// *** isUniform() ***
// example array = ["a","a","b"]
// firstly check array[0] with array[1] 
// secondly check array[1] with array[2]
// loop should stop here 

function isUniform(array){
  for(var i = 0; i < array.length - 1; i++){
    if (array[i]!== array[i+1]){
      return false;
    }
  } 
  return true;
}

// alternative solution
// function isUniform(array){
//   var first = array[0];
//   for (var i = 1; i< array.length; i++){
//     if(array[i] !== first){
//      return false;
//     }
//   }
//   return true;
// }

//*** sumArray() ***/
function sumArray(array){
  var total = 0;
  array.forEach(function(element){
    total += element; 
  });
  return total;
}

//alternative solution
// function sumArray(array){
//   return array.reduce(function( a, b ){
//     return a + b 
//   }, 0);
// }

//*** max() ***/
function max(array){
  return Math.max(...array);
}

//alternative solution
// function max(array){
//   var max = array[0];
//   for(var i = 1; i < array.length; i++){
//     if(max < array[i]){
//       max = array[i];
//     }
//   }
//   return max; 
// }