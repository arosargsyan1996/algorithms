const arr = [1,4,3,75,8,6,78,24,69,36,5,6,1,8];

//! O(n)
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(arr, 24));