const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

function parent() {
   var x = 1;
   return y;
   function child(){
      var y = 1;
return x;
   }
}

// function addVal(number) {
// return function(number1){

// }
// }

var adder = (function(){
   var sum =0;
   function add(n) {
      sum += +n; 
   }
   add.valueOf = function() {
      return sum;
   }
   return add;
})

adder(1)(2);

var parent = new parent();
Object.create();
