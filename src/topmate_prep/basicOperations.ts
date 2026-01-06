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
