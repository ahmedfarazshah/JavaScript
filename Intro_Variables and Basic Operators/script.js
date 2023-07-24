/* ***********************************
*    Variables and Data Types
*    Variable mutation and type coercion
*/

console.log("hellow world")
let ab = 44
console.log(ab*ab)
console.log("I am just testing the script that i am going to write and i will be a successfull developer")

console.log('hey i am developer')

let number = 55
console.log(number);

let namess= 'ahmed is a string'
console.log(namess);

var boolean = 'true'
console.log(boolean)

let hisAge
console.log(hisAge)


// this is a comment

/*
this can used to write a multi line comment
*/

// or you can do cntrl + /

/* *******************************************
*   Variables mutation and Type Coercion
*/
console.log('Faraz is a')

var job, hisWork, firstName, age, isMarried
isMarried = false
age = 22
hisWork = 'internet designer'
firstName = 'ahmed'

console.log(hisWork)

// var question = prompt('what does ahmed do')
// console.log(firstName + ' ' + question)
console.log('his a smart boy ' + 'and ' + hisWork)
console.log('Is Ahmed Married?'+' ' + isMarried)

// alert('This page contains a data')


/* *****************
*   Basic Operators
*/

var who,ahmedAge, age, shahAage, now, yearAhmed
now = 2022
who = 'ahmed' 
shahAage = 22
ahmedAge = 30

yearAhmed = now - ahmedAge

console.log(yearAhmed)
console.log(now - shahAage)

console.log(now - 55)
console.log(now * 4)
console.log(now / 3)

// Logic Operators

console.log(now<shahAage)
console.log(now > ahmedAge)

// Type of Operators

console.log(typeof now)
alert(typeof who)
console.log(typeof isMarried)


console.log('hi and i am new to this world, am willing to serve my time for the develeplment of the programme and the Service.' +' '+ who+ 'was it really easy for me to get over you, I just need time, snapping one two where are you; you are still in my heart.')
console.log(ahmedAge-shahAage + ' '+ 'hey')
var how = 'by chance'
// alert(how)
console.log(how)


/* **************************
* Operator Precedence
*/

var now, money, bank, total
now = 500
money = 200
bank = 5000
rentCar = 10000 
total = 5700 + rentCar

assets = now + money + bank 
console.log(assets)

checking = money> now
console.log(checking)
liabilites = rentCar
console.log(liabilites)

// remember the asociation (the code reading patterns for the operators)
x= 45
x = y= 2 * x
// you can write as 
// x*=2
console.log(x)
x--
// you have wrote this as and is same for addition but the addition have precedence over subtraction.
// x = x-1 and is known as increment
console.log(x)


/* ******************
* Var, let, const Variables
*/

var a = 22
var b = 'harry'
var c = 'jeedan'
var d = 'sangari'

console.log(
    a
)
a = 55
console.log(a)

// hence var can be updated and re declared

let ez = 'javaid'
let f = 'show me some love'
let g = 77
// let f = 66
console.log(
    f
)
{
    let f = 'heart'
    console.log(f)
}
console.log(f)
//block scoped and can be updated within a block and can be redeclared

const car = 'limbo'
// car = 77
// {
//     car = 55
// }

console.log(car)

// hence proved that the const neither be updated nor re-declared

// for inilialized 

var vehicle;
console.log(vehicle)

let limbo;
console.log(limbo)

// const mustang;
// hence proved that const needs to be inilialized during decleration.