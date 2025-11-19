import { describe, expect, it } from "@jest/globals";
import { findLargestElement } from "../../../src/algorithm/easy/Q1";
import { reverseString } from "../../../src/algorithm/easy/Q2";


describe("Question 1 Tests: Largest Number from array", () => {
    // Add your test cases here
    it("should find the largest number in a non-empty array [3, 5, 7, 2, 8]", () => {
        const result = findLargestElement([3, 5, 7, 2, 8]);
        expect(result).toBe(8);
    });
});

describe("Algorithm reverse string", () => {
    it("should reverse the string 'hello' to 'olleh'", () => {
        const reverseStr = reverseString("hello");
        expect(reverseStr).toBe("olleh");
    });

    it("should reverse the string 'TypeScript' to 'tpircSepyT'", () => {
        const reverseStr = reverseString("TypeScript");
        expect(reverseStr).toBe("tpircSepyT");
    });
});