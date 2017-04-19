function Transaction(amount = 0, balance = 0){
  this.amount = amount;
  this.date = new Date();
  this.balance = balance;
}

Transaction.prototype = {
  isCredit: function(){
    return this.amount >= 0 ? true : false;
  } ,
  isDebit: function(){
    return this.amount < 0 ? true : false;
  },
};

module.exports = Transaction;
