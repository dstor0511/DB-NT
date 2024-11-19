// Exporting a function that takes 'app' as a parameter (to define routes)
module.exports = function (app) {
    // Define a route for the root URL ("/")
    app.get("/", function (req, res) {
        // When someone visits the root URL, render the "index.html" view
        res.render("index.html");
    });

    // Define a route for "/search" URL
    app.get("/search", function (req, res) {
        // When someone visits "/search", render the "search.html" view
        res.render("search.html");
    });

    // Define a route for "/about" URL
    app.get("/about", function (req, res) {
        // When someone visits "/search", render the "search.html" view
        res.render("about.html");
    });
};
