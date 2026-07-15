// Dummy Array
const numbers = [4, 8, 2, 11, 6, 7, 10];

// Arrow Function - Maximum Number
const findMaximum = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

// Anonymous Function - Sum of Elements
const findSum = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

// Normal Function - Count Odd Numbers
function countOdd(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
}

// Output
console.log("Ex Array:", numbers);
console.log("Maximum Number:", findMaximum(numbers));
console.log("Sum of All Elements:", findSum(numbers));
console.log("Count of All Odd Numbers:", countOdd(numbers));