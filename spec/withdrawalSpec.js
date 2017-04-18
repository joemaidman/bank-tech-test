'use strict';
var Withdrawal = require('../src/models/withdrawal.js');
var timekeeper = require('timekeeper');
var defaultWithdrawal;
var customWithdrawal;
var mockWithdrawalDate;

describe("Withdrawal", function(){

  describe("with a default amount", function(){

    beforeEach(function(){
      mockWithdrawalDate = new Date();
      timekeeper.freeze(mockWithdrawalDate);
      defaultWithdrawal = new Withdrawal();
    });

   it("is defined", function(){
     expect(defaultWithdrawal).toBeDefined();
   });

   it("has a default amount of zero", function(){
     expect(defaultWithdrawal.amount).toEqual(0);
   });

   it("has a date equal to the date of the withdrawal", function(){
     expect(defaultWithdrawal.date).toEqual(mockWithdrawalDate);
   });

   afterEach(function(){
     timekeeper.reset();
   });

 });

 describe("with a custom amount", function(){

   beforeEach(function(){
     customWithdrawal = new Withdrawal(10);
   });

   it("can accept a custom amount for the withdrawal", function(){
     expect(customWithdrawal.amount).toEqual(10);
   });

 })

});
