function Statement(){
  statement = this;
}

Statement.prototype = {
  print: function(transactions){
    printedStatmentString = this._printHeader();
    transactions.reverse().forEach(function(transaction){
      printedStatmentString += statement._printRow(transaction);
    });
    return printedStatmentString;
  },

  _printHeader: function(){
    return `date || credit || debit || balance\n`;
  },

  _printRow: function(transaction){
    return `${this._printDate(transaction.date)} || ${this._printCredit(transaction.amount)} || ${this._printDebit(transaction.amount)} || ${this._printBalance(transaction.balance)}\n`;
  },

  _printDate: function(date){
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
  },

  _printCredit: function(amount){
    return amount >= 0 ? amount.toFixed(2) : "";
  },

  _printDebit: function(amount){
    return  amount < 0 ? (-amount).toFixed(2) : "";
  },

  _printBalance: function(amount){
    return amount.toFixed(2);
  }
};

module.exports = Statement;
