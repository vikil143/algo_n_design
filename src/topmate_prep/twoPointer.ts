export const reverseArray = (arr: number[]) : number[] => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right indices
        const temp = arr[left]!;
        arr[left] = arr[right]!;
        arr[right] = temp;

        // Move towards the middle
        left++;
        right--;
    }

    return arr;
}