
const twoSum = (nums: number[], target: number): number[] | null => {
    const numMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]!;
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i]!, i);
    }
    return null;
}

const twoSumBruteForce = (nums: number[], target: number): number[] | null => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i]! + nums[j]! === target) {
                return [i, j];
            }
        }
    }
    return null;
}

const twoSumTwoPointer = (nums: number[], target: number): number[] | null => {
    const arr = nums.map((value, index) => ({ value, index }));
    arr.sort((a, b) => a.value - b.value);
    console.log(arr);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        console.log(`Left: ${left}, Right: ${right}`);
        const sum = arr[left]!.value + arr[right]!.value;

        if (sum === target) {
            return [arr[left]!.index, arr[right]!.index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
};



// Example usage:
const mediumQOneMain = () => {
    console.log("Question 1 Solution:");
    // console.log("Finding two sum indices in the array [2, 7, 11, 15, 8, 10] for target 9:");
    // const nums = [2, 7, 11, 15, 8, 10];
    // const target = 9;
    console.log("Finding two sum indices in the array [2, 7, 11, 15, 8, 10] for target 15:");
    const nums = [2, 7, 11, 15, 8, 10];
    const target = 15;
    const result = twoSum(nums, target);
    if (result) {       
        console.log(`Indices found: [${result[0]}, ${result[1]}]`); // Output: Indices found: [0, 1]
    } else {
        console.log("No two sum solution found.");
    }

    console.log("Using brute force method:");
    const bruteForceResult = twoSumBruteForce(nums, target);
    if (bruteForceResult) {       
        console.log(`Indices found: [${bruteForceResult[0]}, ${bruteForceResult[1]}]`); // Output: Indices found: [0, 1]
    } else {
        console.log("No two sum solution found.");
    }
    console.log("Using two pointer method:");
    const twoPointerResult = twoSumTwoPointer(nums, target);
    if (twoPointerResult) {       
        console.log(`Indices found: [${twoPointerResult[0]}, ${twoPointerResult[1]}]`); // Output: Indices found: [0, 1]
    } else {
        console.log("No two sum solution found.");
    }

    console.log("Finding two sum indices in the array [1, 2, 3] for target 7:");
    const nums5 = [1, 2, 3];
    const target5 = 7;
    const result5 = twoSum(nums5, target5);
    if (result5) {       
        console.log(`Indices found: [${result5[0]}, ${result5[1]}]`); 
    } else {
        console.log("No two sum solution found.");
    }
}

export { twoSum, mediumQOneMain };