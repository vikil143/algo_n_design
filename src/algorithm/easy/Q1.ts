const findLargestElement = (arr: number[]): number | null => {
    if (arr.length === 0) return null;
    let largest = arr[0]!; // Non-null assertion
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]! > largest) { // Non-null assertion
            largest = arr[i]!;
        }
    }
    return largest;
};

// Example usage:
const numbers = [3, 5, 7, 2, 8];
const largestNumber = findLargestElement(numbers);
console.log(`The largest number is: ${largestNumber}`); // Output: The largest number is: 8

export { findLargestElement };