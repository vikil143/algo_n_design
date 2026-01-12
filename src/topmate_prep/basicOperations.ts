export function largestElement(arr: number[]): number | null {
    if (arr.length === 0) {
        return null;
    }
    let largest = arr[0] as number;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]! > largest) {
            largest = arr[i]!;
        }
    }
    return largest;
}

export function secondLargestElement(arr: number[]): number | null {
    if (arr.length < 2) {
        return null;
    }
    let first = -Infinity;
    let second = -Infinity;

    for(let value of arr) {
            if(value > first) {
                let temp = first;
                first = value;
                second = temp;
            } else if(value < first && value > second) {
                second = value;  
            }
    }

    return second === -Infinity ? null : second;
}

export const checkArraySorted = (arr: number[]): boolean => {
    let lastRecorded = -arr[0]!;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]! < lastRecorded) {
            return false;
        }
        lastRecorded = arr[i]!;
    }
    return true;
}

// Find the missing number in an array 
export const missingNumberInArray = (arr: number[]): number => {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    console.log({expectedSum, actualSum});
    return expectedSum - actualSum;
}

// Find the missing number in an array [0, 1, 2, 4, 5] => 3
// Solution Two

export const solutionMissingNumberInArray = (arr: number[]): number => {
    const n = arr.length;
    let xorFull = 0;
    let xorArr = 0;

    for (let i = 0; i <= n; i++) {
        xorFull ^= i;
    }

    for (let num of arr) {
        xorArr ^= num;
    }

    return xorFull ^ xorArr;
}