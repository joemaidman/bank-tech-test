# Bank Tech Test
This project emulates the infrastructure behind a basic deposit banking system. Users are able to `Withdraw` and `Deposit` amounts from their `Account` as well as view a list of transactions. The application interface is served via the node REPL using the command line interface.

## Approach

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
```

## Technologies
- javascript
- [jasmine-node](https://github.com/mhevery/jasmine-node)
- [node.js](https://nodejs.org/en/)

## Principles and patterns
- [Module pattern](https://en.wikipedia.org/wiki/Module_pattern)
- DRY
- SOLID
- Object Orientated Design

## Challenges
-

## Installaton
- Clone the repo.
- `cd` to the project folder.
- Run `nom install` to install project dependencies.

## Testing
- Run `npm test` which is defined as `jasmine-node spec` via the `package.json` file.

## Usage
- Run `node`
- An example user session is as follows:

## Future improvements
-
