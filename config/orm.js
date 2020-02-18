var connection = require("./connection");

var orm = {
    all: function(select, table, callback){
        var query = "SELECT ?? FROM ??";

        connection.query(query, [select, table], function(err, result) {
            if(err) throw err;

            callback(result)
        })
    },
    create: function(table, colVal, cb){
        var query = "INSERT INTO " + table + " (name) ";

        query += "VALUE ";
        query += "(?)";

        connection.query(query, [colVal], function(err, result) {
            if(err) throw err;

            cb(result);
        })
    },
    update: function(table, deVal, idVal, cb) {
        var query = "UPDATE " + table;

        query += " SET ";
        query += "devoured ";
        query += "= ?";
        query += " WHERE ";
        query += "id ";
        query += "= ?";

        console.log(query, deVal, idVal);

        connection.query(query, [deVal, idVal], function(err, result) {
            if(err) throw err;

            cb(result);
        });
    },
    delete: function(table, colVal, cb){
        var query = "DELETE FROM " + table;

        query += " WHERE ";
        query += "id ";
        query += "= ?";

        connection.query(query, [colVal], function(err, result) {
            if(err) throw err;

            cb(result);
        });
    }
}

// Export the orm object for the model
module.exports = orm;