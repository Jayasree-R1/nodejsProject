// This is a feature
// This is a business logic

function processData(input) {
  if (!input || typeof input.value !== "number") {
    throw new Error("Invalid input");
  }

  return {
    result: input.value * 2,
  };
}

module.exports = processData;
