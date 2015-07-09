/*global prompt*/
//noprotect
function Bank(b) {
  this.balance = b;  
}
Bank.prototype = {
  credit : function () {
   var x1 = prompt('how much you want to put in?');
   var a1 = parseInt(x1);
   this.balance += a1;  //sub prompt from 100 || balance.
 
},
debit : function () {
    var x = prompt('how much you want to take out?');
    var a = parseInt(x);
    this.balance -= a;  //sub prompt from 100 || balance.
  },
};
var bankArr = new Bank(100);  //setting the balance to 100

for(i=0; i < 3; i++){
  bankArr.debit();
}

for(i=0; i < 3; i++){
  bankArr.credit();
}
for(i=0; i<2; i++){
  var y = prompt('Enter a number');
  var c = parseInt(y);
  bankArr.debit(c);
}
console.log(c);
// console.log('im here');
console.log(bankArr);

