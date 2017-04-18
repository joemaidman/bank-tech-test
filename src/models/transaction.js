function Transaction(amount = 0){
  this.amount = amount;
  this.date = new Date();
  }

module.exports = Transaction;
