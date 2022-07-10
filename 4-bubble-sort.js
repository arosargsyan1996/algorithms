const arr = [1,4,3,75,8,6,78,24,69,36,5,6,1,8];
let count = 0;

//! O(n^2)
function bubbleSort(array) {
    let tmp = null;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            count += 1;

            if(array[j + 1] < array[j]) {
                tmp = array[j + 1];
                array[j + 1] = array[j]
                array[j] = tmp
            }
        }
    }

    return array;
}

console.log(bubbleSort(arr), count);