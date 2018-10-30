
var connection = require("../config/connection.js");

var orm = {
    //Selects all data within the burgers table in the database
    selectAll: function(callback) {
      connection.query("SELECT * FROM burgers", function(err, result) {
        if (err) throw err;

        callback(result)
      });
    },

    //inserts the user-entered burger into the burgers table in the database.
    insertOne: function(burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUE ('"+burger+"')";
        console.log("QueryString is:  "+ queryString);
        connection.query(queryString, burger, function(err, result){
            if(err)throw err;
           
           callback(result);          
        })
    },

    //Updates the burger's "Devoured" status from false to true, by ID.
    updateOne: function(id, callback) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE ID = ?";
        console.log("QueryString is:  "+ queryString);
        connection.query(queryString, [id], function(err, result){
            if (err) throw err;

            callback(result);
        })
    }
}

module.exports = orm;
