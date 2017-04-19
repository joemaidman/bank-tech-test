# Bank Tech Test
This project emulates the infrastructure behind a basic deposit banking system. Users are able to `Withdraw` and `Deposit` amounts from their `Account` as well as view a list of transactions. The application interface is served via the node REPL using the command line interface.

```
         _._._                       _._._
        _|   |_                     _|   |_
        | ... |_._._._._._._._._._._| ... |
        | ||| |  o JOE'S    BANK o  | ||| |
        | """ |  """    """    """  | """ |
   ())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
  (())) |     |---------------------|     | (()))
 (())())| """ |  """    """    """  | """ |(())())
 (()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
 ()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
    ||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
~ ~^^ @@@@@@@@@@@@@@/=======\@@@@@@@@@@@@@@ ^^~ ~
    ^~^~                                ~^~^
```

## Approach
I chose to use javascript and Node.js for this project. I initially started with separate `Withdrawal` and `Deposit` classes which were later refactored to a single `Transaction` class.

## Challenges
-

## User Stories
**MVP**
```
As a customer
So that I can keep my money safe
I want to deposit money in my account

As a customer
So that I can pay for things
I want to withdraw money from my account

As a customer
So that I can see activity on my account
I want to view a statement of all the transactions on my account

As a customer
So that I can analyse the activity on my account
I want the statement to show the date of transactions

As a customer
So that I can analyse the activity on my account
I want the statement to show whether the transaction was a credit or debit

As a customer
So that I can analyse the activity on my account
I want the statement to show a cumulative account balance
```

**Edge cases**
```
As a banker
So that I don't give customers money they don't have and go bust
I want to refuse withdrawals that exceed the customer's account balance

As a banker
So that the system doesn't break
I want to refuse withdrawals or deposits that are for a negative amount
```

## Technologies
- javascript
- [node.js](https://nodejs.org/en/)
- [jasmine-node](https://github.com/mhevery/jasmine-node)
- [timekeeper](https://github.com/vesln/timekeeper)

## Principles and patterns
- [Module pattern](https://en.wikipedia.org/wiki/Module_pattern)
- DRY
- SOLID
- Object Orientated Design

## Installaton
- Clone the repo.
- `cd` to the project folder.
- Run `npm install` to install project dependencies.

## Testing
- Run `npm test` which is defined as `jasmine-node spec` via the `package.json` file.

## Usage
- Run `node`
- Run `.load ./app.js`, a file which
- An example user session is as follows:

```
> myAccount = new Account();
{ transactions: [] }
> myAccount.deposit(100);
undefined
> myAccount.balance();
100
> myAccount.withdraw(10);
undefined
> myAccount.balance();
90
> myAccount.printStatment();
date || credit || debit || balance
19/4/2017 ||  || 10.00 || 90.00
19/4/2017 || 100.00 ||  || 100.00
```

## Future improvements
- Consider injecting the `Transaction` and `Statement` models into the `Account` model to reduce cross dependencies and refactor the test suite accordingly.
- Refactor the statement print method to return a string containing a uniform grid.
