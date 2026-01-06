import { checkArraySorted, largestElement, secondLargestElement } from "./basicOperations";

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
}
