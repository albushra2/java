// 1- Find the largest element in an array
function findLargest(arr) {
    return Math.max(...arr);
}

// 2- Find the smallest element in an array
function findSmallest(arr) {
    return Math.min(...arr);
}

// 3- Find the sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 4- Find the average of all elements in an array
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

// 5- Find the median of all elements in an array
function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
}

// 6- Remove all duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 7- Sort an array in ascending order
function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

// 8- Sort an array in descending order
function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 9- Shuffle the elements of an array randomly
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
