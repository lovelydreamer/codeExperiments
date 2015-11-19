// Write a function that takes an array of values and returns a boolean representing 
// if the word "hello" exists in the array.

var helloLyrics = "I've been alone with you, Inside my mind," +
    "And in my dreams I've kissed your lips, A thousand times, I sometimes see you," +
    " Pass outside my door," +
    "Hello, Is it me you're looking for";

var lyricArray = helloLyrics.split(",");
console.log(lyricArray);

var helloFunction = function(str1) {
    var indexLoc = str1.indexOf("Hello");
    if (indexLoc >= 0) {
        return true;
    } else {
        return false;
    }
};

console.log(helloFunction(lyricArray));

// Write a function that takes an array of values and a target value. 
// It returns how many times that target value exists in the array.

var targetValues = ["orange juice", "fruit salad", "banana", "grapefruit", "fruit salad", "blueberry parfait", "orange julius", "banana and peanut butter sandwich",
    "pancake", "cereal", "crepe", "fruit salad",
];

var howManyTimes = function(arr, target) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            counter++;
    }
    return counter;
};
console.log(howManyTimes(targetValues, "fruit salad"));


// Write a function that takes an array and returns a new array 
// containing only the values at odd indexes in that array.

var arrMixed = ["red", "cat", "orange", "dog", "yellow", "mouse", "green", "rat", "blue", "elephant", "purple"];

var oddSplit = function(arr) {
    var oddArray = [];
    arr.forEach(function(val, index) {
        if (index % 2 !== 0) {
            oddArray.push(val);
        }
    });
    return oddArray;
};

console.log(oddSplit(arrMixed));

// Write a function called sum_array that takes an 
// array of numbers and returns the sum of all of those numbers added together.

var numArr = [92, 25, 23, 17, 33, 84, 89];

var sum_array = function(arr) {
    var sum = 0;
    arr.forEach(function(val) {
        sum += val;
    });
    return sum;
};
console.log(sum_array(numArr));


// Write a zipper function that combines two arrays in alternating order, 
// zipper([1,2,3],['a','b','c']) should return [1, 'a', 2, 'b', 3, 'c']. 
// Make sure to handle cases where one array is longer than the other.

var arrNum = [1, 2, 3];
var arrAlpha = ['a', 'b', 'c', 'd'];

var zipper = function(arr1, arr2) {
    var alphaNumeric = [];

    if (arr1.length > arr2.length) {
        length = arr1.length;
    } else {
        length = arr2.length;
    }
    for (var i = 0; i < length; i++) {
        alphaNumeric.push(arr1[i], arr2[i]);
    }
    return alphaNumeric;
};
console.log(zipper(arrNum, arrAlpha));

// note: this will include "undefined" placeholders when one array is longer

// Write a function that merges two sorted lists into a new list. 
// merge_sorted([1, 2, 5, 9], [3, 7, 19]) should return [1, 2, 3, 5, 7, 9, 19]

var arr1 = [1, 2, 5, 9];
var arr2 = [3, 7, 19];

var combineSort = function(arr1, arr2) {
    var sorted = [];
    sorted = arr1.concat(arr2);
    sorted.sort(function(a, b) {
        return a - b;
    });
    return sorted;
};
console.log(combineSort(arr1, arr2));

// Write a function that creates an array of the first 100 Fibonacci numbers.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

var fibonacci = function() {
    var fibArr = [0, 1];
    var counter = 3;
    var previousNumber = 0;
    var currentNumber = 1;
    var temp;
    while (count <= 100) {
        temp = currentNumber;
        currentNumber = currentNumber + previousNumber;
        previousNumber = temp;
        fibArr.push(currentNumber);
        counter++;
    }
    return arr;
};
