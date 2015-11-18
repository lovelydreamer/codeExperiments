// Create a function array_duplicator, that takes an array as an input, and returns a copy as the output.
var array_duplicator = function(array) {
    return array.slice();
};

// Write a function array_combiner that takes two arrays as inputs 
// and returns the two of them smooshed together as an output.

var friends = ['ada', 'will', 'bianca', 'abe'];
var enemies = ['john', 'alice'];

var array_combiner = function(array1, array2) {
    return array1.concat(array2);
};

array_combiner(friends, enemies);


// Write a function array_plucker that takes an array 
// and an index as inputs and destructively removes the single value at that index. 
// Return that value.
// .splice()

var tomHanksFilms = ["Forrest Gump", "Sleepless in Seattle", "Road to Perdition", "Toy Story 3", "Apollo 13", "Saving Private Ryan", "Philadelphia"];
var array_plucker = function(array, index) {
    var removed_value = array.splice(index,1);
    return removed_value;
};

var noAcademyAward = array_plucker(tomHanksFilms, 1);
console.log("Those so many awards. Which one was great but no Academy Award? Answer: "+noAcademyAward);
