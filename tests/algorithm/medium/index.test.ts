import { describe, it } from "@jest/globals";
import expect from "expect";
import { twoSum } from "../../../src/algorithm/medium/Q1";

describe("Medium Algorithm Questions Tests", () => {
    it("should return the indices of two numbers that add up to 15", () => {
        const nums = [2, 7, 11, 15, 8, 10];
        const target = 15;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 4]); // <-- correct matcher
    });
});
