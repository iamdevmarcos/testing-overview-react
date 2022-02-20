import { plus, minus, multiply, divide } from "./math";

describe("testing math functions", () => {
  it("should add correctly", () => {
    const result = plus(5, 8);

    expect(result).toBe(13);
  });

  it("should reduce correctly", () => {
    const result = minus(4, 3);
    const result2 = minus(3, 4);
    const result3 = minus(3, 3);

    expect(result).toBe(1);
    expect(result2).toBe(-1);
    expect(result3).toBe(0);
  });

  it("should multiply correctly", () => {
    const result = multiply(5, 10);

    expect(result).toBe(50);
  });

  it("should divide correctly", () => {
    const result = divide(20, 2);

    expect(result).toBe(10);
  });
});

export {};
