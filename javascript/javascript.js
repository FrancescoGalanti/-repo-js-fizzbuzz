/*
**javascript
**/



//  prima variabile //

var arraynumber = [];

// var numt = 5 / 3;
// console.log(numt);

var number = Math.floor(Math.random() * 100) + 1;
console.log(number);

var fritz = number / 3;

var buzz = number / 5;



console.log(fritz);


Number.isInteger(fritz);

console.log(fritz)

if( Number.isInteger(fritz) == true ){
  arraynumber.push("fritz");

 if(Number.isInteger(buzz) == true){
   arraynumber.push("buzz");
 }
 if((Number.isInteger(fritz) == true) && (Number.isInteger(buzz) == true) ){
   arraynumber.push("fritzbuzz")
 }

}




console.log(arraynumber)


// for(var i = 0; i <= 19; i++){
//     var number = Math.floor(Math.random() * 100) + 1;
//
//     if((number % 3) == (Number.isInteger(number)){
//       arraynumber.push("Fizz");
//
//     }
//     if((number % 5) == (isInteger(number)){
//           arraynumber.push("Buzz");
//         }
//      if((number  % 5 == number.isInteger()) && (number % 3 == number.isInteger())){
//           arraynumber.push("FizzBuzz");
//      }else{
//           arraynumber.push(number);
//      }
//
//
// }
//
// console.log(arraynumber)
