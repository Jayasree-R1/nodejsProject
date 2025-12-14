const processData = require("./processData");

try {
  const output = processData({ value: 5 });
  console.log(output);
} catch (err) {
  console.error(err.message);
}

// Why manualTest.js exists (important concept)
// This file is for:
// Quick local testing
// Developer sanity check
// Understanding behavior before writing automated tests
// In real projects, engineers often do:
// Manual test
// Automated test
// Commit code
// Interview insight (very important)
// If an interviewer asks:
// “Why did you create this file?”
// You can say:
// “I used it as a quick manual check to verify the feature logic before locking behavior with automated tests.”
// That is a senior-level answer.
// Mental model for this file
// processData.js → feature
// manualTest.js → human check
// processData.test.js → automation
