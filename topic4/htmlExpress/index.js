// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define the port number
const port = 8086;

// Add body parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// Import and use the routes defined in the main file
require("./routes/main")(app);

// Set the directory for the views
app.set("views", __dirname + "/views");

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the engine to render HTML files using ejs
app.engine("html", require("ejs").renderFile);

// Start the server and listen on the defined port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// get request
app.get("/search-result", function (req, res) {
    //searching in the database
    res.send(req.query.keyword);
});