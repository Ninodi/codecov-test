const formatName = require("../src/formatName.js");  // Use CommonJS require

describe("formatName function", () => {
  test("should return full name when given valid inputs", () => {
    expect(formatName("John", "Doe")).toBe("John Doe");
  });

  test("should trim spaces from names", () => {
    expect(formatName("  Alice  ", "  Smith  ")).toBe("Alice Smith");
  });

  test("should throw an error if first name is missing", () => {
    expect(() => formatName("", "Doe")).toThrow("Both first and last name are required");
  });

  test("should throw an error if last name is missing", () => {
    expect(() => formatName("John", "")).toThrow("Both first and last name are required");
  });
});
