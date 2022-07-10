const arr = [1,4,3,75,8,6,78,24,69,36,5,6,1,8];
let count = 0;

//! O(1/2n^2)
function selectionSort(array) {
    let minIndex = null;
    let tmp = null;
    for (let i = 0; i < array.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            count += 1;

            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }

    return array;
}

console.log(selectionSort(arr), count);