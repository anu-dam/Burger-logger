var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
 connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "anu12358",
    database: "burgers_db"
<<<<<<< HEAD
    
=======
    database: "burgers_db"
>>>>>>> 99e12416fe81bdaa8def0fb926021be674fc2d9e
  });
};

connection.connect(function(err) {
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;
