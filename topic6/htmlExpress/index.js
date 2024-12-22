// Import the express module
const express = require("express");

// Import the body-parser module
const bodyParser = require("body-parser");

// Import the mysql module
const mysql = require("mysql2");

// Create an instance of express
const app = express();

// Define the port number
const port = 8087;

// Import the mysql module
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "slimbook",
    database: "myBookShop",
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
});
global.db = db;

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Import and use the routes defined in the main.js file
require("./routes/main")(app);

// Set the views directory
app.set("views", __dirname + "/views");

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the engine to render HTML files using ejs
app.engine("html", require("ejs").renderFile);

// Start the server and listen on the defined port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
