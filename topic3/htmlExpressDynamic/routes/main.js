// Exporting the function to be used in the main application file (e.g., app.js or server.js)
module.exports = function (app) {
    // Define a route handler for GET requests to the root URL ("/")
    app.get("/", function (req, res) {
        // The 'res.render()' method is used to render a view (HTML file) and send it as a response
        // "index.html" is the name of the HTML file to render
        // The second argument is an object with dynamic data that will be injected into the template
        res.render("index.html", {
            // Set the 'title' variable with the value "Dynamic title!!"
            title: "Dynamic title!", // This data will be accessible in the "index.html" template
            heading: "Dynamic heading!",
        });
    });
};
