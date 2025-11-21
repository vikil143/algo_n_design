
interface User {
    name: string;
    address: {
        street: string;
        city: string;
        country: {
            name: string;
            code: string;
        };
    };
    job: string | null;
}

// ===========================================

// Flatten Object Recursively
const flattenObjectRecusive = <T extends User>(obj: T) => {
    const result: any = {};

    function append<T extends object>(object: T, prefix = '') {
        for (const key in object) {
            if (typeof object[key] === 'object' && object[key] !== null) {
                const newKey = prefix ? `${prefix}_${key}` : key;
                append(object[key], newKey);
            } else {
                let newKey = prefix ? `${prefix}_${key}` : key;
                result[newKey] = object[key];
            }
        }
    }

    append(obj);
    return result;
}

// Using Stack to avoid recursion
// Putting the thing in the stack and process it iteratively
// This approach helps to avoid call stack overflow for deeply nested objects
function flattenObjectStack<T extends User>(obj: T) {
    const result: any = {};
    const stack: Array<{ object: any; prefix: string }> = [{ object: obj, prefix: '' }];

    while (stack.length) {
        const { object, prefix } = stack.pop()!;

        for (const key in object) {
            if (typeof object[key] === 'object' && object[key] !== null) {
                const newKey = prefix ? `${prefix}_${key}` : key;
                stack.push({ object: object[key], prefix: newKey });
            } else {
                let newKey = prefix ? `${prefix}_${key}` : key;
                result[newKey] = object[key];
            }
        }
    }

    return result;
}

// ===========================================
// Flatten Array

function flattenArray<T>(arr: any[]): T[] {
    return arr.flat(5)
}

function flattenArrayRecursive<T>(arr: any[]): T[] {
    const result: T[] = [];

    function flattenHelper(subArr: any[]) {
        for (const item of subArr) {
            if (Array.isArray(item)) {
                flattenHelper(item);
            } else {
                result.push(item);
            }
        }
    }

    flattenHelper(arr);
    return result;
}

function flattenArrayStack<T>(arr: any[]): T[] {
    const result: T[] = [];
    const stack: any[] = [...arr];

    while(stack.length) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            result.push(item);
        }
    }

    return result.reverse();
}


// ===========================================


function mainInverviewQ1() {
    console.log("------------- Flatten Object --------------");
    const user: User = {
        name: 'Vikil',
        address: {
            street: '123 Main St',
            city: 'Metropolis',
            country: {
                name: 'Freedonia',
                code: 'FD',
            },
        },
        job: null,
    };
    const flattenedUser = flattenObjectRecusive(user);
    console.log(flattenedUser);
    const flattenedUserStack = flattenObjectStack(user);
    console.log(flattenedUserStack);
    console.log("------------- Flatten Array --------------");
    const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
    const flattenedArray = flattenArray<number>(nestedArray);
    console.log("Array before flattening:", nestedArray);
    console.log("Array after flattening:", flattenedArray);
    const flattenedArrayRec = flattenArrayRecursive<number>(nestedArray);
    console.log("Array after flattening Recursively:", flattenedArrayRec);
    const flattenedArrayStk = flattenArrayStack<number>(nestedArray);
    console.log("Array after flattening using Stack:", flattenedArrayStk);
    console.log("------------------------------------------");
}

export { mainInverviewQ1, flattenObjectRecusive }