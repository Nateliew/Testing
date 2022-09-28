const { expect } = require("chai");
const { add } = require("../utils.js");
const { multiply } = require("../utils.js");

describe("Utils", () => {
  describe("Add", () => {
    it("Adds 2 of the same number", () => {
      const result = add(1, 1);
      expect(result).to.equal(2);
    });

    it("Adds 2 different numbers", () => {
      const result = add(1, 2);
      expect(result).to.equal(3);
    });

    it("Adds a positive and a negative number", () => {
      const result = add(1, -1);
      expect(result).to.equal(0);
    });

    it("Adds 2 negative numbers", () => {
      const result = add(-1, -1);
      expect(result).to.equal(-2);
    });
  });
  describe("Multiply", () => {
    it("multiply 2 of the same number", () => {
      const result = multiply(1, 1);
      expect(result).to.equal(1);
    });

    it("multiply 2 different numbers", () => {
      const result = multiply(1, 2);
      expect(result).to.equal(2);
    });

    it("multiply a positive and a negative number", () => {
      const result = multiply(1, -1);
      expect(result).to.equal(-1);
    });

    it("multiply 2 negative numbers", () => {
      const result = multiply(-1, -1);
      expect(result).to.equal(1);
    });
  });
});
