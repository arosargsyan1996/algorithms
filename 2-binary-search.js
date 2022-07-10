const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let count = 0;
let recursiveCount = 0;

//! O(log2n)
function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle = null;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;
}

function recursiveBinarySearch(array, item, start = 0, end = null) {
    recursiveCount++;
    const middle = Math.floor((start + (end || array.length)) / 2 );

    if (array[middle] === item) return middle;

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
}

console.log(arr[binarySearch(arr, 9)], count);
console.log(arr[recursiveBinarySearch(arr, 9)], recursiveCount);