// Variables

console.log('hello world')

var firstVar = 'this is just to check the variable';
var secVar = 'the var is checked and is verifed';
var numberCheck = 77;
console.log(firstVar)


/*
type coercion(joining multiple variables into a string is called as type coercion)
 you can write multiple of variables in multiple lines
*/

console.log(firstVar +' '+ secVar)
var sum_ofString = firstVar +' '+ secVar;
var stringNum = sum_ofString + ' ' + numberCheck;
console.log(stringNum);


var job, isMarried;
job = 'developer';
isMarried= true;
console.log('john works as a '+ job + 'is not married = ' + isMarried)

// Variable mutation(change the value of the variable) 

firstVar = 'john'
numberCheck = 44;
alert(firstVar + 'is ' + numberCheck + ' years old')

// lastname = prompt('what is your last name');
// console.log(firstVar +' '+ lastname);

/* Operators(basically they are functions written in a unique method)
*/

// Math operators

var yearBorn = 2023 - 22;
console.log(yearBorn)

var now, johnYear, markYear;
now = 2023;
johnYear = 22;
markYear = 30;

console.log(johnYear)
birthJohn= now - johnYear;
birhtMark = now - markYear;
console.log(birthJohn)
console.log(birhtMark)

console.log(now - 2);
console.log(now * 6);
console.log(now / 10);

// logical operators

check = markYear > johnYear;
console.log(check)

// type of operators

console.log(typeof markYear)
console.log(typeof check)
console.log(typeof 'it will be a string')


// Multiple more and operators precedence

var x,y,z;
x= y= 3+6-9
console.log(x,y)
z= 8
checking = x - z <= 5;
console.log(checking)

x = x *2;
console.log(x)
x = z = 5 + 2;
console.log(z)
z++;
console.log(z)
z*=6
console.log(z)