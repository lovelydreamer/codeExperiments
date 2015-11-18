// 1. use .split(' ') on scrambled_poem and save the result as an array scrambled_array
var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";
var scrambled_array = scrambled_poem.split(' ');

// 2. Create a new array unscrambled_array
var unscrambled_array = [];

// 3. While the length of scrambled_array is greater than 0,
// remove the FIRST and LAST value and store add them to unscrambled_array.

while (scrambled_array.length > 0) {
    unscrambled_array.push(scrambled_array.shift(), scrambled_array.pop());
    console.log(unscrambled_array);
}

// 4. Turn the values in unscrambled_poem into a string 
// by using the array's native .join(' ') method.
unscrambled_poem = unscrambled_array.join(" ");
console.log(unscrambled_poem);


// 5. Write a function reverser which will take an array of values 
//as an input and return a new array of the same values in reverse order.

var reverser = function(array) {
    var reversed_array = [];
    for (var i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]);
    }

    return reversed_array;
};
// 6. Inside reverser instantiate a new array reversed_array, 
//use a for loop to populate it, then return it from the function.
