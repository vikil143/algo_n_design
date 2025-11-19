import { describe, it, expect } from "@jest/globals";

describe("My first Jest test", () => {
  it("should add numbers", () => {
    expect(2 + 3).toBe(5);
  });
});
