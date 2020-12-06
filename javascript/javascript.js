/*
**javascript
**/



let array = generaterandomNumber()













  array =  array.map(element =>{

     if((element  % 5 === 0) && (element % 3 === 0)){
         return element = "fizzbuz"
     } else if(element % 5 === 0){
          return element = "fizz"
     } else if(element % 3 === 0){
          return element = "buzz"
     } else{
          return element
      }

});







console.log(array)


function generaterandomNumber(){
    var element = [];

    for(var i = 0; i < 100; i++){
      var numero= Math.floor(Math.random() * 100) + 1;

      while(element.includes(numero)){

       var numero =  Math.floor(Math.random() * 100) + 1;
      }

       element.push(numero)

 }

 return element

}
