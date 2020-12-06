/*
**javascript
**/



//  prima variabile //

var arraynumber = [];

// var numt = 5 / 3;
// console.log(numt);

// var number = Math.floor(Math.random() * 100) + 1;
// console.log(number);
//
// var fritz = number / 3;
//
// var buzz = number / 5;
//
//
//
// console.log(fritz);
//
//
// Number.isInteger(fritz);
//
// console.log(fritz)
//
//
//  if((Number.isInteger(fritz) ) && (Number.isInteger(buzz) ) ){
//    arraynumber.push("fritzbuzz");
//  } else if(Number.isInteger(fritz) ) {
//    arraynumber.push("fritz");
//  } else if(Number.isInteger(buzz) ) {
//    arraynumber.push("buzz")
//  }


// if((number % 3 === 0)){
//   arraynumber.push("Fizz");




console.log(arraynumber);


for(var i = 1; i <= 100; i++){
    var number = Math.floor(Math.random() * 100) + 1;

    while( arraynumber.includes(number)){

       var number =  Math.floor(Math.random() * 100) + 1;
    }

    if((number  % 5 === 0) && (number % 3 === 0)){
          arraynumber.push("FizzBuzz");
      } else if(number % 5 === 0){
          arraynumber.push("Fizz");
      } else if(number % 3 === 0){
          arraynumber.push("buzz");
      } else{
          arraynumber.push(number);
      }





}

console.log(arraynumber)
