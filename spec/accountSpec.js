 'use strict';
var Account = require('../src/models/account.js');
var account = new Account();

describe("Account", function(){
  it("is defined", function(){
    expect(account).toBeDefined();
  });

  it("has a default account balance of zero", function(){
    expect(account.balance).toEqual(0);
  });

  it("has a array of transactions that is empty", function(){
    expect(account.transactions).toEqual([]);
  });
});
