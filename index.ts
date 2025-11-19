import { findLargestElement } from "./src/algorithm/easy/Q1"

function main() {
    const numbers = [3, 5, 7, 2, 8];
    const largestNumber = findLargestElement(numbers);
    console.log("Question 1 Solution:");
    console.log(`The largest number is: ${largestNumber}`); // Output: The largest number is: 8
}

main();