// GIVEN
console.log(example);
var example = "I'm the example!";

//? AFTER HOISTING BY THE INTERPRETER
var example = "I'm the example!";
console.log(example);

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//? ===========Note===========
let example = "I'm the example!";
console.log(example);

//? ===========1===========
console.log(hello);
var hello = 'world';
// var hello = 'world';
// console.log(hello);
// hello = 'world'

//? ===========2===========
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// function test(){
//   var needle = 'magnet';
//  console.log(needle);
// }
// test()

//? ===========3===========
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Predict : super cool

//? ===========4===========
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// chiken
// half chicken
// gone

//? ===========5===========
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean = function() {
//     var food = "fish";
//     food = "chicken";
//     console.log(food);
//     console.log(food);
// }
// mean();
// console.log(food);
// console.log(food);

//* Predict
// chicken
// chicken
// chicken
// chicken

//? ===========6===========
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// * Predict
// undefined
// rock
// r&b
// disco

// * Hoisted
// var genre = "disco";
// console.log(genre);
// rewind();
// function rewind() {
//     var genre = "r&b";
//     genre = "rock";
//     console.log(genre);
//     console.log(genre);
// }
// console.log(genre);

// * Predict
// disco
// rock
// rock
// disco

//? ===========7===========
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// * Predict
// san jose
// seattle
// burbank
// san jose

//? ===========8===========

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    var dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// * Predict
//

