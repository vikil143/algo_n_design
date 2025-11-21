const findKthLargestBuiltIn = (nums: number[], k: number): number => {
    const sortedNums = nums.sort((a, b) => b - a);
    return sortedNums[k - 1]!;
};

const findKthSmallestBuiltIn = (nums: number[], k: number): number => {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[k - 1]!;
};

const findKthFrequentBuiltIn = (nums: number[], k: number): number[] => {
    const frequencyMap: { [key: number]: number } = {};
    nums.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    const sortedByFrequency = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
    return sortedByFrequency.slice(0, k).map(entry => Number(entry[0]));
};

const findKthFrequentPointer = (nums: number[], k: number) => {
    const frequencyMap: { [key: number]: number } = {};
    let left = 0;
    let right = 0;
}

const mainAmazonQ1 = () => {
    const nums = [3, 2, 1, 5, 6, 4];
    const kLargest = 2;
    const kSmallest = 3;

    console.log(`The ${kLargest}th largest element is: ${findKthLargestBuiltIn(nums, kLargest)}`);
    console.log(`The ${kSmallest}th smallest element is: ${findKthSmallestBuiltIn(nums, kSmallest)}`);
};

export { findKthLargestBuiltIn, findKthSmallestBuiltIn, mainAmazonQ1 };