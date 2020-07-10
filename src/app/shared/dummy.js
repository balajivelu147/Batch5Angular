let x =10;
function dummy() {

   function dummyChild() {
     return x*2;
   }
}
dummy.dummyChild
class dummyclass {

   constructor() {}

   
}

var dummyclass = new dummyclass();

function Person(x){ x}
var person = Person() 
person(x)
var person = new Person()


for(var i=0; i<5 ; i++){		
   setTimeout(function(){console.log(i);},i*100);		
}

function isPolindrome(input) {
if(input === input.split('').reverse.join('')){
   return true;
}
return false;
}
