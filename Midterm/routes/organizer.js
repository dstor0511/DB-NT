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

module.exports = router;
