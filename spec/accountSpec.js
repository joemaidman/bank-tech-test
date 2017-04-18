 'use strict';
var Account = require('../src/models/account.js');
var account;

describe("Account", function(){

  beforeEach(function(){
    account = new Account();
  });

  it("is defined", function(){
    expect(account).toBeDefined();
  });

  it("has a default #balance of zero", function(){
    expect(account.balance()).toEqual(0);
  });

  it("has a array of #transactions that is empty", function(){
    expect(account.transactions).toEqual([]);
  });

  describe(".deposit", function(){

    it("adds a transaction to the account", function(){
      account.deposit(100);
      expect(account.transactions.length).toEqual(1);
    });

    it("updates the account balance", function(){
      account.deposit(100);
      expect(account.balance()).toEqual(100);
    });

    it("throws an error if the amount is negative", function(){
      expect(function(){account.deposit(-100)}).toThrow("You cannot deposit a negative amount");
    });

  });

  describe(".withdraw", function(){

    beforeEach(function(){
      account.deposit(100);
    });

    it("adds a transaction to the account", function(){
      account.withdraw(100);
      expect(account.transactions.length).toEqual(2);
    });

    it("updates the account balance", function(){
      account.withdraw(100);
      expect(account.balance()).toEqual(0);
    });

    it("throws an error if the amount is negative", function(){
      expect(function(){account.withdraw(-100)}).toThrow("You cannot withdraw a negative amount");
    });

    it("throws an error if the amount is more than the account balance", function(){
      expect(function(){account.withdraw(200)}).toThrow("You cannot withdraw more money than you have");
    });

  });

});
