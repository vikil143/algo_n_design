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

const qOneMain = () => {
    console.log("Question 1 Solution:");
    console.log("Finding largest element in the array [3, 5, 7, 2, 8]:");
    const numbers = [3, 5, 7, 2, 8];
    const largestNumber = findLargestElement(numbers);
}

export { findLargestElement, qOneMain };