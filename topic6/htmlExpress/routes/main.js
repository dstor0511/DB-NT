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

    app.get("/search-result-db", function (req, res) {
        //searching in the database
        let word = [req.query.keyword];
        let sqlquery = "SELECT * FROM `books` WHERE name like ?";
        // execute sql query
        db.query(sqlquery, word, (err, result) => {
            if (err) {
                return console.error(
                    "No book found with the keyword you have entered" +
                        req.query.keyword +
                        "error: " +
                        err.message
                );
                //res.redirect("./search"); this can also be used in case of an error instead of the above line
            } else {
                //step 1:(this will only shows the collected form-data) for debugging purpose only
                // res.send(req.query);
                //step 2: (this shows keyword in collected form-data) for debugging purpose only
                // res.send(
                //     "This is the keyword you entered: " +
                //         req.query.keyword +
                //         ".<br><br>This is the result of the search:<br>"
                // );
                //step3: (this will show the result of the search) for debugging purpose only
                // res.send(result);
                //step4: (this will show the result of the search using an ejs template file, list.ejs can be used here)
                res.render("list.html", { availableBooks: result });
            }
        });
    });

    // Define a route for "/about" URL
    app.get("/about", function (req, res) {
        // When someone visits "/search", render the "search.html" view
        res.render("about.html");
    });

    // Define a route for "/addBook" URL
    app.get("/addBook", function (req, res) {
        // When someone visits "/addBook", render the "addBook.html" view
        res.render("addBook.html");
    });
    // add book to database
    app.post("/addedBook", function (req, res) {
        // saving data in database
        let sqlquery = "INSERT INTO books (name, price) VALUES (?, ?)";
        let newrecord = [req.body.name, req.body.price];
        db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            // redirect to the list page
            else
                res.send(
                    "Book added successfully. Name: " +
                        req.body.name +
                        " Price: " +
                        req.body.price
                );
        });
    });

    // Save the data from the form to the database

    app.get("/register", function (req, res) {
        res.render("register.html");
    });

    app.post("/registered", function (req, res) {
        // saving data in database
        res.send(req.body);
    });

    app.get("/list", function (req, res) {
        // query database to get all the books
        let sqlquery = "SELECT * FROM books";
        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/");
            }
            res.render("list.html", { availableBooks: result });
        });
    });
};
