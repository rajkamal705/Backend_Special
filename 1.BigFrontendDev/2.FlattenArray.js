/**
 * In Js Array is just an another kind of object.
 * Here index is key and elem is value and hence create key value pair.
 
 -> let arr = [5, 10, 2, 4, 12];
 -> console.log(1 in arr); -> ans = 10, key = 1
 
 => Sparse array: Array in which few of the elements are missing.
 -> let sparseArr = [5, 2, , , 3]; -> here, elements are missing at index 2 and 3.
 -> console.log(2 in arr); -> it will give false.
 -> console.log(arr[2]); -> it will give undefined.
 -> console.log(Object.keys(arr)); -> it will print all the index as keys
 */

// let sparseArr = [5, 2, , , 3];
// console.log(2 in sparseArr);
// console.log(sparseArr[2]);
// console.log(Object.keys(sparseArr));

/**
 * Flatten Array using Array.Prototype.flat()
 */

function flatten(arr, depth = Infinity) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(!(i in arr)) {
            continue;
        }

        const item = arr[i];
        if(Array.isArray(item) && depth > 0) {
            result.push(...flatten(item, depth === Infinity ? Infinity : depth-1));
        } else {
            result.push(item);
        }
    }

    return result;

};

console.log(flatten([1, [2], [3,[4, 5]]], Infinity));
