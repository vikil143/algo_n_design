
const findLongestSubStringLength = (s: string): number => {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const charSet: Set<string> = new Set();

    while (right < s.length) {
        if (!charSet.has(s[right]!)) {
            charSet.add(s[right]!);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            charSet.delete(s[left]!);
            left++;
        }
    }

    return maxLength;
};

const longestSubString = (s: string): string => {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let start = 0;
    const charSet: Set<string> = new Set();

    while (right < s.length) {
        if (!charSet.has(s[right]!)) {
            charSet.add(s[right]!);
            right++;
            if (right - left > maxLength) {
                maxLength = right - left;
                start = left;
            }
        } else {
            charSet.delete(s[left]!);
            left++;
        }
    }

    return s.substring(start, start + maxLength);
};

// ###DIP verfied flow for longest substring using ASCII function
const longestSubstringLengthASCII = (s: string): number => {
    let left = 0;
    let maxLength = 0;
    const lastIndex: number[] = new Array(256).fill(-1);

    for (let right = 0; right < s.length; right++) {
        const charCode = s.charCodeAt(right);
        if (lastIndex[charCode]! >= left) {
            left = lastIndex[charCode]! + 1;
        }
        lastIndex[charCode] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


// Example usage:
const mediumQTwoMain = () => {
    console.log("Question 2 Solution:");
    const inputString = "abcabcbb";
    console.log(`Finding length of longest substring without repeating characters in "${inputString}":`);
    const result = findLongestSubStringLength(inputString);
    console.log(`Length of longest substring: ${result}`);
    console.log(`Finding longest substring without repeating characters in "${inputString}":`);
    const substring = longestSubString(inputString);
    console.log(`Longest substring: "${substring}"`);
}

export { mediumQTwoMain, findLongestSubStringLength, longestSubString, longestSubstringLengthASCII };