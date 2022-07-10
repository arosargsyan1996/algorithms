const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

//! O(n*log(n))
function quickSort(array) {
    if (array.length <= 1) return array;

    let pivotItem = array[Math.floor(array.length / 2 )];
    const lessItems = [];
    const greaterItems = [];

    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === pivotItem) continue;
        if (array[i] < pivotItem) lessItems.push(array[i])
        if (array[i] > pivotItem) greaterItems.push(array[i])
    }

    return [...quickSort(lessItems), pivotItem, ...quickSort(greaterItems)]
}

console.log(quickSort(arr))
console.log('count', count)