'use strict';
var Account= require('../../src/models/account.js');
var Transaction = require('../../src/models/transaction.js');
var Statement = require('../../src/models/statement.js');
var timekeeper = require('timekeeper');

describe("A customer session", function(){

  var account = new Account();
  var mockDate = new Date(1893448800000);

  describe("makes a valid deposit", function(){
    timekeeper.travel(mockDate);

    it("should print out the statement showing a deposit of 100 on 31 Dec 2029", function(){
      account.deposit(100);
      var statementOne = `date || credit || debit || balance\n31/12/2029 || 100.00 ||  || 100.00\n`;
      expect(account.printStatment()).toEqual(statementOne);
    });

  });

  describe("makes an invalid deposit", function(){

    it("should throw an error", function(){
      expect(function(){account.deposit(-100)}).toThrow("You cannot deposit a negative amount");
    });

  });

  describe("makes a valid withdrawal", function(){

    it("should print out the statement showing a deposit of 100 and a withdrawal of 50 on 31 Dec 2029", function(){
      account.withdraw(50);
      var statementTwo = `date || credit || debit || balance\n31/12/2029 ||  || 50.00 || 50.00\n31/12/2029 || 100.00 ||  || 100.00\n`;
      expect(account.printStatment()).toEqual(statementTwo);
    });

  });

  describe("makes an invalid withdrawal", function(){

    it("should throw an error", function(){
      expect(function(){account.withdraw(100)}).toThrow("You cannot withdraw more money than you have");
      expect(function(){account.withdraw(-100)}).toThrow("You cannot withdraw a negative amount");
    });

  });

});
