var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      console.log(result);
      
    });
  },
  insertOne: function(tableInput,burgerCol,devourCol,burgerName,devoured) {
    var queryString = "insert into ?? (??, ??) values ?";

    var burgerParams = [[]];
    burgerParams[0].push(burgerName);
    burgerParams[0].push(false);

    connection.query(queryString, [tableInput,burgerCol,devourCol,burgerParams], function(err, result) {
      if(err) {
        console.log(err);
      }

      console.log(result);
      
    });
  },
  updateOne: function(tableInput,devourCol,devoured,burgerIdCol,burgerId) {
    var queryString = "update ?? set ?? = ? where ?? = ?";

    connection.query(queryString, [tableInput,devourCol,devoured,burgerIdCol,burgerId], function(err, result) {
      if(err){
        console.log(err);
      }
      console.log(result);
    });
  }
};

module.exports = orm;
