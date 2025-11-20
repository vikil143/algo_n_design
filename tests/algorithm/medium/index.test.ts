import { describe, expect, it } from "@jest/globals";
import { twoSum } from "../../../src/algorithm/medium/Q1";
import { findLongestSubStringLength, longestSubstringLengthASCII } from "../../../src/algorithm/medium/Q2";

describe("Medium Algorithm Questions Tests", () => {
    it("should return the indices of two numbers that add up to 15", () => {
        const nums = [2, 7, 11, 15, 8, 10];
        const target = 15;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 4]); // <-- correct matcher

        const nums2 = [1, 2, 3, 4, 5];
        const target2 = 9;
        const result2 = twoSum(nums2, target2);
        expect(result2).toEqual([3, 4]); // <-- correct matcher

        const nums3 = [5, 75, 25];
        const target3 = 100;
        const result3 = twoSum(nums3, target3);
        expect(result3).toEqual([1, 2]); // <-- correct matcher
        const nums4 = [3, 2, 4];
        const target4 = 7;
        const result4 = twoSum(nums4, target4);
        expect(result4).toEqual([0, 2]); // <-- correct matcher

        // inccorect checkker
        const nums5 = [1, 2, 3];
        const target5 = 6;
        const result5 = twoSum(nums5, target5);
        expect(result5).toBeNull(); // <-- correct matcher

    });
});

describe("Medium Algorithm Questions Tests", () => {
    it("should return null when no two numbers add up to the target", () => {
        const string = "abcabcbb";
        const result = findLongestSubStringLength(string);
        expect(result).toBe(3); // <-- correct matcher

        const string2 = "bbbbb";
        const result2 = findLongestSubStringLength(string2);
        expect(result2).toBe(1); // <-- correct matcher

        const string3 = "pwwkew";
        const result3 = findLongestSubStringLength(string3);
        expect(result3).toBe(3); // <-- correct matcher

        const string4 = "";
        const result4 = findLongestSubStringLength(string4);
        expect(result4).toBe(0); // <-- correct matcher
    });
});


describe("Medium Algorithm Questions Tests", () => {
    it("Longest String from the given string using ASCII function", () => {
        const string = "abcabcbb";
        const result = longestSubstringLengthASCII(string);
        expect(result).toBe(3); // <-- correct matcher

        const string2 = "bbbbb";
        const result2 = longestSubstringLengthASCII(string2);
        expect(result2).toBe(1); // <-- correct matcher

        const string3 = "pwwkew";
        const result3 = longestSubstringLengthASCII(string3);
        expect(result3).toBe(3); // <-- correct matcher

        const string4 = "";
        const result4 = longestSubstringLengthASCII(string4);
        expect(result4).toBe(0); // <-- correct matcher
    });
});