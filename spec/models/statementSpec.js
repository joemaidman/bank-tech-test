'use strict';
var Statement = require('../../src/models/statement.js');
var Helpers = require('../helpers/helpers.js');
var helpers = new Helpers();
var statement;
var account;
var depositDouble;
var withdrawalDouble;

var accountDouble = function(){
  this.transactions = [];
};

var transactionDouble = function(amount = 0, balance = 0){
  this.amount = amount;
  this.balance = balance;
  this.date = new Date();
};

describe("Statement", function(){

  beforeEach(function(){
    statement = new Statement();
    account = new accountDouble();
  });

  it("is defined", function(){
    expect(statement).toBeDefined();
  });

  it("can pretty print/return a list of account transactions with date, credit, debit and balance", function(){
    depositDouble = new transactionDouble(100, 100);
    withdrawalDouble = new transactionDouble(-50, 50);
    account.transactions.push(depositDouble);
    account.transactions.push(withdrawalDouble);
    var statementString = `date || credit || debit || balance\n${helpers.prettyDate(withdrawalDouble.date)} ||  || 50.00 || 50.00\n${helpers.prettyDate(depositDouble.date)} || 100.00 ||  || 100.00\n`
    expect(statement.print(account.transactions)).toEqual(statementString);
  });

});
