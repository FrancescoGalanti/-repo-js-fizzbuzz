/*
**javascript
**/



//  prima variabile //

var arraynumber = [];

// var number = Math.floor(Math.random() * 100) + 1;


for(var i = 0; i <= 19; i++){
    var number = Math.floor(Math.random() * 100) + 1;

    if(number % 3 == 0){
      arraynumber.push("Fizz");

    }if(number % 5 == 0){
          arraynumber.push("Buzz");
        }
     if((number % 5 == 0) && (number % 3)){
          arraynumber.push("FizzBuzz");
     }else{
          arraynumber.push(number);
     }


}

console.log(arraynumber)
