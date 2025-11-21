const tripleSum = (nums: number[]): Array<Array<number>> | null => {
    const target = 0;
    const resultMap: Map<string, Array<number>> = new Map();
    // const result: Array<Array<number>> = [];
    for (let i = 0; i < nums.length; i++) {
        const complementSet: Set<number> = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - (nums[i]! + nums[j]!);
            if (complementSet.has(complement)) {
                // return [nums[i]!, nums[j]!, complement];
                // remove duplicates
                // result.push([nums[i]!, nums[j]!, complement]);
                // const triplet = [nums[i]!, nums[j]!, complement].sort((a, b) => a - b);
                // resultSet.add(triplet);
                const triplet = [nums[i]!, nums[j]!, complement].sort((a, b) => a - b);
                const key = triplet.join(',');
                if (!resultMap.has(key)) {
                    resultMap.set(key, triplet);
                }
            }
            complementSet.add(nums[j]!);
        }
    }
    return resultMap.size > 0 ? [...resultMap.values()] : null;
}

// Example usage:
const tripleSumBestApproach = (nums: number[]): Array<Array<number>> | null => {
    nums.sort((a, b) => a - b);
    const result: Array<Array<number>> = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i]! + nums[left]! + nums[right]!;
            if (sum === 0) {
                result.push([nums[i]!, nums[left]!, nums[right]!]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result.length > 0 ? result : null;
};

const mediumQThreeMain = () => {
    console.log("Question 3 Solution:");
    console.log("Finding three numbers that sum to zero in the array [-1, 0, 1, 2, -1, -4]:");
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = tripleSum(nums);
    if (result) {
        console.log(`Three numbers found: ${result.length}`);
    } else {
        console.log("No three numbers found that sum to zero.");
    }
}

export { tripleSum, mediumQThreeMain };