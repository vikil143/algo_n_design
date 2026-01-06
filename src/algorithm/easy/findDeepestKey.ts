/*
    ❓ Find the Deepest Key in a Nested Object
    const obj = {
        name: "Vikil",
        address: {
            city: "Mumbai",
            details: {
            pin: 400001,
            geo: {
                lat: 19.076,
                long: 72.8777
            }
            }
        },
        job: null
    };
    deepest key = "lat"
    depth = 4
*/

type NestedObject = {
    [key: string]: any;
};

interface DeepestKeyResult {
    key: string | null;
    depth: number;
}

const findDeepestKey = (obj: NestedObject): DeepestKeyResult => {
    let deepestKey: string | null = null;
    let maxDepth = 0;

    const traverse = (currentObj: NestedObject, currentDepth: number) => {
        for (const key in currentObj) {
            if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                traverse(currentObj[key], currentDepth + 1);
            } else {
                if (currentDepth > maxDepth) {
                    maxDepth = currentDepth;
                    deepestKey = key;
                }
            }
        }
    };

    traverse(obj, 1);
    return { key: deepestKey, depth: maxDepth };
}

function findDeepestKeyMain() {
    const obj = {
        name: "Vikil",
        address: {
            city: "Mumbai",
            details: {
                pin: 400001,
                geo: {
                    lat: 19.076,
                    long: 72.8777
                }
            }
        },
        job: null
    };

    const result = findDeepestKey(obj);
    console.log(`Deepest Key: ${result.key}, Depth: ${result.depth}`);
}

export { findDeepestKey, findDeepestKeyMain };