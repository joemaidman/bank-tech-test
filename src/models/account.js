var Transaction = require('./transaction.js');

function Account(){
  this.transactions = [];
}

Account.prototype = {
  deposit: function(amount){
    if (amount < 0) throw "You cannot deposit a negative amount";
    transaction = new Transaction(amount, this.balance());
    this._addTransaction(transaction);
  },
  withdraw: function(amount){
    if (amount < 0) throw "You cannot withdraw a negative amount";
    if (amount > this.balance()) throw "You cannot withdraw more money than you have";
    transaction = new Transaction(-amount, this.balance());
    this._addTransaction(transaction);
  },
  balance: function(){
    return this.transactions.reduce(function (a,b) { return a + b.amount; }, 0)
  },
  printStatment: function(){
    statement = new Statement();
    console.log(statement.print(this.transactions));
  },
  _addTransaction: function(transaction){
    this.transactions.push(transaction);
  }
};

module.exports = Account;
