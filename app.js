// This file defines the Express application (routes + logic), but does NOT start the server.

// Imports the Express framework
// Express helps you create HTTP APIs easily
// Without this, you cannot define routes like /process
const express = require("express");

// Imports your business logic
// Keeps logic separate from HTTP concerns
// This is clean architecture
// Interview signal:
// “I separate business logic from API layers.”

const processData = require("./processData");

// Creates an Express application instance
// Think of app as your web server before it starts listening
const app = express();

// Middleware that:
// Parses incoming JSON request bodies
// Makes data available as req.body
// Without this:
// req.body === undefined
// This line is mandatory for JSON APIs.
app.use(express.json());

// Defines an HTTP POST endpoint at /process
// When a request hits /process, this function runs
// req = request
// res = response
app.post("/process", (req, res) => {
  //  Starts error-handling block
  // Protects against runtime errors from processData
  try {
    // Passes request body to business logic
    // No logic duplication
    // Single source of truth
    const result = processData(req.body);
    // Sends HTTP 200 OK
    // Responds with JSON:
    res.status(200).json(result);
    // Catches validation errors
    // Sends 400 Bad Request
    // Returns a clean error response
    // This shows defensive API design.
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Exports the Express app
// Allows:
// server.js to start it
// app.test.js to test it
// ⚠️ This is the key to API testing without starting a server.

module.exports = app;
