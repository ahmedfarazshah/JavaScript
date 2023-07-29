/*  Arrays
            it is needed when you want to not repeat mutiple variables or data types
            have multiple of items in it& 
*/

// there are 2 ways to write arrays
// initialize array
var person = ['Jane', 'Andrew', 'Tate'];
var years = new Array (2001, 1999, 1986);

// it's a zero system where the indexing is from zero

console.log(person, years);
console.log(person[1]);

// mutation in array/ Mutate

person[0] = 'anglena';
person[person.length] = 'Stephen';
// this adds a item in the array
console.log(person);
// to check the length
console.log(years.length);

// length tells us the number of elements in an array
// the . in calling array in is called as method and is a fuction that will help you do any kind of stuff with the array
// methods .



var shaqs = ['Shaq', 2003, 'BasketBall', false]
console.log(shaqs);

shaqs.pop('');
shaqs.shift();
console.log(shaqs)

shaqs.unshift('Mr.');
console.log(shaqs);

shaqs.push(true);
console.log(shaqs);

// the .indexOf(--name of item in the array) returns the index number of the item in an array

console.log(shaqs.indexOf(true));
console.log(shaqs.indexOf(77));
// will return -1 if the value is not present

// making a ternary operation
shaqs.push('football');
// the ===4 will not occur if place before the .push('football')
var check = shaqs.indexOf('football')===4 ?'Shaq is also plays football' : 'he only plays basketball';
console.log(shaqs);
console.log(check);















