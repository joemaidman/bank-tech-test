function Helpers(){
}

Helpers.prototype = {
  prettyDate: function(date){
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }
};

module.exports = Helpers;
