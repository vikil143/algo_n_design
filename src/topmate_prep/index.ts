import { checkArraySorted, largestElement, missingNumberInArray, secondLargestElement, solutionMissingNumberInArray } from "./basicOperations";

export function topMateMain() {
    const array = [3, 5, 7, 8, 2];
    const arraySorted = [1, 2, 3, 4, 5, 6];
    console.log("Finding the largest element in an array:", array);
    const largest = largestElement(array);
    console.log(`The largest element in the array is: ${largest}`);
    console.log("-----------------------");
    console.log("Finding the second largest element in an array:", array);
    const secondLargest = secondLargestElement(array);
    console.log(`The second largest element in the array is: ${secondLargest}`);
    console.log("-----------------------");
    console.log("Checking if the array is sorted:", array);
    const isSorted = checkArraySorted(array);
    console.log(`Is the array sorted? : ${isSorted}`);
    console.log("checking if the array is sorted:", arraySorted);
    const isSorted2 = checkArraySorted(arraySorted);
    console.log(`Is the array sorted? : ${isSorted2}`);
    console.log("-----------------------");
    const arrayWithMissingNumber = [0, 1, 2, 4, 5];
    console.log("Finding the missing number in the array:", arrayWithMissingNumber);
    const missingNumber = missingNumberInArray(arrayWithMissingNumber);
    console.log(`The missing number in the array is: ${missingNumber}`);
    console.log("-----------------------");
    const arrayWithMissingNumber2 = [1, 2, 3, 5, 0];
    console.log("Finding the missing number in the array:", arrayWithMissingNumber2);
    const missingNumber2 = missingNumberInArray(arrayWithMissingNumber2);
    console.log(`The missing number in the array is: ${missingNumber2}`);
    console.log("-----------------------");
    const arrayWithMissingNumber3 = [0, 1, 3];
    console.log("Finding the missing number in the array:", arrayWithMissingNumber3);
    const missingNumber3 = solutionMissingNumberInArray(arrayWithMissingNumber3);
    console.log(`The missing number in the array is: ${missingNumber3}`);
}
