// filepath: /home/slimbook/Documents/DB-NT/Midterm/routes/organizer.js
const express = require("express");
const router = express.Router();

// Define a route for the organizer home page
router.get("/home", (req, res) => {
    res.render("org-home"); // Render the org-home-page.ejs view
});

// Add more organizer-related routes here
router.get("/settings", (req, res) => {
    res.render("org-settings"); // Render the org-settings.ejs view
});

// Add router for the new event page
router.get("/new-event", (req, res) => {
    res.render("org-new-event"); // Render the org-new-event.ejs view
});

router.post("/new-event", (req, res, next) => {
    // Define the query
    let sqlquery =
        "INSERT INTO events (event_name, event_description) VALUES(?, ?);";
    let newrecord = [req.body["event-name"], req.body["event-description"]];

    // Execute the query and send a confirmation message
    db.run(sqlquery, newrecord, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        // redirect to the list page
        else
            res.send(
                "Book event successfully. Name: " +
                    req.body["event-name"] +
                    " Description: " +
                    req.body["event-description"]
            );
    });
});

module.exports = router;
