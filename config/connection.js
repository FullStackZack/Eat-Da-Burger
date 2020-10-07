const mysql = require("mysql");

//const connection = mysql.createConnection({
    //host: "localhost",
    //port: 3306,
    //user: "root",
    //password: "Rebel91!",
    //database: "burgers_db"
//});

//heroku mysql add-on connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Rebel91!",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;