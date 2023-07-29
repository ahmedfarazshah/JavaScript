/*  Objects 
        it is similar to arrays but the elements are initialilzed in key=pair system where each element is defined by a name.
        In objects {} is used instead of []
        it can also store arrays in an object
*/

// two ways to initialize an object
// Object literal
var jane = {
    firstName : 'Jane',
    secondName : 'Leo',
    friends : ['Mary', 'Andrew', 'Ahmed'],
    job : 'teacher',
    isMarried : false
};
// new Object syntax
var smith = new Object;
smith.first_name = 'smith';
smith.job = 'designer'
smith.is_married = false;

// 2 ways to call an object
console.log(jane.firstName); //1
console.log(jane['isMarried']); //2
// console.log(smith.is_married);

// objects can also be mutate/mutation occurs in objects
// Mutation
console.log(jane);
jane.firstName = 'Javera'
console.log(jane)

smith['job'] = 'developer'
console.log(smith)

var y = 'isMarried';
var x = 'secondName';
console.log(jane[y], jane[x]);

smith.is_married = true;
smith['job'] = 'miner';
console.log(smith)

// just a comment to check
