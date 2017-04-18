'use strict';
var Transaction = require('../src/models/transaction.js');
var timekeeper = require('timekeeper');
var defaultTransacion;
var customTransacion;
var mockTransacionDate;

describe("Transaction", function(){

  describe("with a default amount", function(){

    beforeEach(function(){
      mockTransacionDate = new Date();
      timekeeper.freeze(mockTransacionDate);
      defaultTransacion = new Transaction();
    });

   it("is defined", function(){
     expect(defaultTransacion).toBeDefined();
   });

   it("has a default amount of zero", function(){
     expect(defaultTransacion.amount).toEqual(0);
   });

   it("has a date equal to the date of the transaction", function(){
     expect(defaultTransacion.date).toEqual(mockTransacionDate);
   });

   afterEach(function(){
     timekeeper.reset();
   });

 });

 describe("with a custom amount", function(){

   beforeEach(function(){
     customTransacion = new Transaction(10);
   });

   it("can accept a custom amount for the transaction", function(){
     expect(customTransacion.amount).toEqual(10);
   });

 })

});
