console.log("1. Print all numbers between -10 and 19");
for (num = -10; num < 20 ; num++){
  console.log(num);
}

console.log("2. Print all even numbers between 10 and 40");
for (num = 10; num<=40 ; num++){
  if(num % 2 === 0){
    console.log(num);
  }
}

console.log("3. Print all odd numbers between 300 and 333")
for(num = 300; num<=333; num++){
  if(num % 2 !== 0){
    console.log(num);
  }
}

console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50")
for(num = 5; num <=50; num ++){
  if(num % 5 === 0 && num % 3 === 0){
    console.log(num);
  }
}