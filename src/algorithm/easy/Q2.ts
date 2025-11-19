const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}

const reverseStringWithInBuildFn = (str: string): string => {
    return Array.from(str).reduce((reversed, char) => char + reversed, '');
}

const reverseStringWithoutLoop = (str: string): string => {
    let reversed = '';
    const helper = (index: number) => {
        if (index < 0) return;
        reversed += str[index];
        helper(index - 1);
    }
    helper(str.length - 1);
    return reversed;
}

function reverseStringMain() {
    console.log("Queston 2 Solution:");
    console.log("Reversing string 'hello world':");
    const str = "hello world";
    console.log("Using in-build functions to reverse the string.");
    console.log(`Reversed string is: ${reverseStringWithInBuildFn(str)}`);
    console.log("Using custom recursive function to reverse the string.");
    console.log(`Reversed string is: ${reverseStringWithInBuildFn(str)}`);
}

export { reverseString, reverseStringWithInBuildFn, reverseStringWithoutLoop, reverseStringMain };