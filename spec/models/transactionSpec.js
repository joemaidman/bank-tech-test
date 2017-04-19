'use strict';
var Transaction = require('../../src/models/transaction.js');
var timekeeper = require('timekeeper');
var defaultTransaction;
var customTransaction;
var mockTransactionDate;

describe("Transaction", function(){

  describe("with a default amount", function(){

    beforeEach(function(){
      mockTransactionDate = new Date();
      timekeeper.freeze(mockTransactionDate);
      defaultTransaction = new Transaction();
    });

    it("is defined", function(){
      expect(defaultTransaction).toBeDefined();
    });

    it("has a default amount of zero", function(){
      expect(defaultTransaction.amount).toEqual(0);
    });

    it("has a default balance of zero", function(){
      expect(defaultTransaction.balance).toEqual(0);
    });

    it("has a date equal to the date of the transaction", function(){
      expect(defaultTransaction.date).toEqual(mockTransactionDate);
    });

    afterEach(function(){
      timekeeper.reset();
    });

  });

  describe("with a custom amount", function(){

    it("can accept a custom amount and balance for a credit transaction", function(){
      customTransaction = new Transaction(10, 10);
      expect(customTransaction.amount).toEqual(10);
      expect(customTransaction.balance).toEqual(20);
      expect(customTransaction.isCredit()).toBe(true);
      expect(customTransaction.isDebit()).toBe(false);
    });

    it("can accept a custom amount for a debit transaction", function(){
      customTransaction = new Transaction(-10, 0);
      expect(customTransaction.amount).toEqual(-10);
      expect(customTransaction.balance).toEqual(-10);
      expect(customTransaction.isCredit()).toBe(false);
      expect(customTransaction.isDebit()).toBe(true);
    });

  })

});
