const  mathOperations = require("./Calculator");

describe("Calculator test", () => {
    test("adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });
});

describe("Calculator test", () => {
  test("adding 1 - 2 should return -1", () => {
    var result = mathOperations.product(1, 2);
    // assert
    expect(result).toBe(-1);
  });
});

describe("Calculator test", () => {
  test("adding 1 - 2 should return 2", () => {
    // arrang and act
    var result = mathOperations.product(1, 2);
    // assert
    expect(result).toBe(2);
  });
});