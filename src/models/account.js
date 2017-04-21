var Transaction = require('./transaction.js');
var Statement = require('./statement.js');

function Account(){
  this.transactions = [];
}

Account.prototype = {
  deposit: function(amount){
    if (amount < 0) throw "You cannot deposit a negative amount";
    this._addTransaction(amount);
  },
  withdraw: function(amount){
    if (amount < 0) throw "You cannot withdraw a negative amount";
    if (amount > this.balance()) throw "You cannot withdraw more money than you have";
    this._addTransaction(-amount);
  },
  balance: function(){
    return this.transactions.reduce(function (a,b) { return a + b.amount; }, 0)
  },
  printStatment: function(){
    var statement = new Statement().print(this.transactions);
    console.log(statement);
    return statement;
  },
  _addTransaction: function(amount){
    this.transactions.push(new Transaction(amount, this.balance()));
  }
};

module.exports = Account;
