// This file starts the HTTP server.
// This is the runtime entry point, not used in tests.

// Imports the Express app from app.js
// Reuses the same application logic
const app = require("./app");

// Starts the server
// Listens on port 3000
// Now the app can accept HTTP requests
app.listen(3000, () => {
  //  Logs confirmation message
  // Helps developers know the server started correctly
  console.log("Server running on port 3000");
});

// Why this file is separate (interview-critical)
// Because:
// Tests should NOT start real servers
// Production should
// So:
// app.js → logic
// server.js → runtime
// This separation is best practice.
