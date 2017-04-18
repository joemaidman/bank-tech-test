'use strict';
var Deposit = require('../src/models/deposit.js');
var timekeeper = require('timekeeper');
var defaultDeposit;
var customDeposit;
var mockDepositDate;

describe("Deposit", function(){

  describe("with a default amount", function(){

    beforeEach(function(){
      mockDepositDate = new Date();
      timekeeper.freeze(mockDepositDate);
      defaultDeposit = new Deposit();
    });

   it("is defined", function(){
     expect(defaultDeposit).toBeDefined();
   });

   it("has a default amount of zero", function(){
     expect(defaultDeposit.amount).toEqual(0);
   });

   it("has a date equal to the date of the deposit", function(){
     expect(defaultDeposit.date).toEqual(mockDepositDate);
   });

   afterEach(function(){
     timekeeper.reset();
   });

 });

 describe("with a custom amount", function(){

   beforeEach(function(){
     customDeposit = new Deposit(10);
   });

   it("can accept a custom amount for the deposit", function(){
     expect(customDeposit.amount).toEqual(10);
   });

 })

});
