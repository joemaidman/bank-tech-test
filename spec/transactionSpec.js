'use strict';
var Transaction = require('../src/models/transaction.js');
var timekeeper = require('timekeeper');
var defaultTransaction;
var customTransaction;
var mockTransactionDate;

describe("Transaction", function(){

  describe("that has a default amount", function(){

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

   it("has a date equal to the date of the transaction", function(){
     expect(defaultTransaction.date).toEqual(mockTransactionDate);
   });

   afterEach(function(){
     timekeeper.reset();
   });

 });

 describe("that has a custom amount", function(){

   beforeEach(function(){
     customTransaction = new Transaction(10);
   });

   it("can accept a custom amount for the transaction", function(){
     expect(customTransaction.amount).toEqual(10);
   });

 })

});
