const findUniq = require("./script");

describe("Уникальное число в массиве", () => {
  const inValid = "Данные не верны!";
  it("целое", () => {
    expect(findUniq([1, 1, 1, 1, 2, 1, 1, 1])).toBe(2);
  });
  it("дробное", () => {
    expect(findUniq([10, 10, 9.857, 10, 10])).toBe(9.857);
  });
  it("отрицательное", () => {
    expect(findUniq([0, 0, 0, 0, -9])).toBe(-9);
  });
  it("короткий массив", () => {
    expect(findUniq([11, 23])).toBe(inValid);
  });
  it("неверные данные", () => {
    expect(findUniq([0, undefined, 0, "String", -9, 0, []])).toBe(-9);
  });
  it("неверные данные и меньше 3 чисел в массиве", () => {
    expect(findUniq([0, null, undefined, "dsf", -9])).toBe(inValid);
  });
});
