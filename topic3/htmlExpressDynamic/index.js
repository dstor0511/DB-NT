// Importing the Express framework
const express = require("express");

// Initialize an Express application
const app = express();

// Define the port on which the server will listen
const port = 8083;

// Import the routes defined in the 'routes/main.js' file and pass the app to it
// This connects the routes to the app
require("./routes/main.js")(app);

// Set the 'views' directory where the EJS view files are stored
app.set("views", __dirname + "/views");

// Set the view engine to EJS (Embedded JavaScript)
app.set("view engine", "ejs");

// Define the file extension for rendering with EJS. In this case, the file extension for HTML views will be handled by EJS.
app.engine("html", require("ejs").renderFile);

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server starts listening
    console.log(`Example app listening on port ${port}!`);
});
