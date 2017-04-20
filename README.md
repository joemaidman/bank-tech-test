# Bank Tech Test [![Code Climate](https://codeclimate.com/github/joemaidman/bank-tech-test/badges/gpa.svg)](https://codeclimate.com/github/joemaidman/bank-tech-test)
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

## Specification

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Approach
Domain modelling led to the creation of an `Account` class as well as separate `Withdrawal` and `Deposit` classes. These were later refactored to a single `Transaction` class, to DRY-up the code (see domain model diagram below). I chose to use javascript and Node.js for this project as I wanted to explore a new framework and the implications for how the code is structured.

### Domain model

![Domain Model](https://github.com/joemaidman/bank-tech-test/blob/master/screenshots/bankDomainModel.png)

## Challenges
- Initial domain modelling proved too high-level.
- Refactoring occurred too early.
- Using Node introduced some initial set-up overheads.
- At time of writing the `jasmine-node` testing package ships with jasmine version 1.3.1. Having built previous projects with jasmine 2.0, this meant learning a different syntax for testing.
- Node.js introduced the module/require pattern which I was unfamiliar with.

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

## Principles, patterns and behaviours
- [Module pattern](https://en.wikipedia.org/wiki/Module_pattern)
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))
- [Object Orientated Design](https://en.wikipedia.org/wiki/Object-oriented_programming)
- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)

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
- Refactor the Statement print method to return a string containing a uniform grid.
