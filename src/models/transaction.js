function Transaction(amount = 0){
  this.amount = amount;
  this.date = new Date();
  }

  Transaction.prototype = {
    isCredit: function(){
      return this.amount >= 0 ? true : false;
    } ,
    isDebit: function(){
      return this.amount < 0 ? true : false;
    }
  };

module.exports = Transaction;
