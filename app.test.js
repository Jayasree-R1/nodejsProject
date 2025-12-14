// This file contains API automation tests.
// It tests:
// HTTP behavior
// Status codes
// JSON responses

// Imports Supertest
// Supertest simulates HTTP requests without starting a server
const request = require("supertest");

// Imports Express app
// Tests it directly in memory
const app = require("./app");

// Defines a Jest test
// Tests happy path
test("POST /process returns result", async () => {
  // Sends a POST request to /process
  // Body = { value: 5 }
  // No real HTTP server involved
  const response = await request(app).post("/process").send({ value: 5 });
  // Asserts HTTP success
  expect(response.status).toBe(200);
  // Asserts correct JSON response
  expect(response.body).toEqual({ result: 10 });
});
// Tests failure scenario
test("POST /process returns error for invalid input", async () => {
  // Sends invalid request
  const response = await request(app).post("/process").send({});
  // Asserts proper error status
  expect(response.status).toBe(400);
  // Confirms error response structure
  expect(response.body).toHaveProperty("error");
});
