// Imports the business logic we want to test
// Same idea as before, but now:
// “Bring the feature into the test file”
// This is the foundation of unit testing:
// test logic in isolation
// without APIs
// without servers

const processData = require("./processData");

// test is a function provided by Jest
// First argument: test description (human-readable)
// Second argument: a function containing the test logic
// Read this line as:
// “Test that processData doubles the value”
// Interviewers care that your test names are clear.

test("processData doubles the value", () => {
  // Calls the function with a valid input
  // This is the happy path
  // Stores the output for verification
  // This matches how real users will use the function.
  const result = processData({ value: 3 });
  //   This line has two important parts.
  // expect(result)
  // Tells Jest: “I want to assert something about result”
  // .toEqual({ result: 6 })
  // Checks deep equality (object contents)
  // Confirms:
  // correct structure
  // correct calculation
  // If this fails, Jest marks the test as failed.
  expect(result).toEqual({ result: 6 });
});
// Second test case
// This one tests a failure scenario
// Very important in real systems
// Read it as:
// “Test that processData fails correctly when input is invalid”
// This shows defensive thinking.
test("processData throws error for invalid input", () => {
  //     Because:
  // We expect an error to be thrown
  // If we called it directly, the test would crash
  // So we give Jest a function to execute and observe.
  // .toThrow("Invalid input")
  // Confirms that:
  // an error is thrown
  // the error message matches "Invalid input"
  // This ensures:
  // ✔ errors are intentional
  // ✔ error messages are meaningful
  expect(() => processData({})).toThrow("Invalid input");
});

// What this file demonstrates (very important)
// With this single file, you’ve shown:
// Unit testing
// Happy path testing
// Error scenario testing
// Clear test naming
// Isolation of business logic
// This is textbook automation testing.
// Interview gold statement (remember this)
// If asked:
// “How do you approach automation testing?”
// You can say:
// “I start with unit tests for business logic, cover both happy paths and failure scenarios, and use Jest to assert behavior clearly.”
// That answer matches exactly what you wrote.
// Mental model for automation testing
// Unit test → test logic in isolation
// No API
// No server
// Fast execution
// Deterministic
