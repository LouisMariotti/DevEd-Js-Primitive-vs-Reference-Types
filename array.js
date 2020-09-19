// Array can store multiples values, acces them by index
// Diif between reference and primitive datatypes:
/* Datatypes strings, numbers, object.. And primitive datatypes
are strings, boleans and reference type are objects, arrays..  */

// const name = "Louis";
// name = "Ed" // Impossible
let bank = 250;
let newBank = bank;

newBank = 500;

console.log(bank + newBank);

// Objects and Arrays Reference type

const names = ["Louis", "Ed", "Michou"];

names[2] = "Domingo";
names.push("Drake"); // Will not have issues, bacause not changing the array, only modification

// name = []; // That is still not possible, cannot create an array from scratch

console.log(names);

const tweet = {
  name: "Developedbyed",
  tweets: 200,
  age: 26,
};

const newTweet = tweet;
newTweet.age = 27;

console.log(tweet); // will modify the original tweet
