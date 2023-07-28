/*      FUNCTIONS    */

// the parameter or argument in a function is something on which the work will be applied
function calulateAge(birthYear){
    return 2023 - birthYear;
}

var ahmedAge  = calulateAge(2001)
var steveAge  = calulateAge(1956)
var janeAge  = calulateAge(1999)

console.log(ahmedAge,steveAge,janeAge)

// A FUNCTION that has a return value is in its intermediate process means its needs a value to complete the function

// A Function with a return value needs to be in a variable to store

// we are creating a function will tells us years untill retirement

// functions can also call other functions and the parameter can be changed in the next function
function yearUntillRetire(firstName , years){
    var age = calulateAge(years);
    var retirementAge = 55 - age;
    if(retirementAge>0){
    console.log(firstName +' will retire in ' + retirementAge + ' years')
    }else{
        console.log(firstName + ' is already retired')
    }
}
yearUntillRetire('Mike', 1990)
yearUntillRetire('Steve', 1956)
yearUntillRetire('Angela', 1999)
yearUntillRetire('Jane', 2001)

// Function declaration\Statement and Function Expression

// Function Declaration

// function name(parameter){}

// A declaration is a type of function where the reasult is undefined (example; if else, while loops)

// function Expression is a type of function where the reasult is defined and has a a outcome
// example boolean, numbers and any string or defined in the console

        //          FUNCTION EXPRESSION

var profession = function(job, namePerson){
    switch(job){
        case 'teacher':
            return namePerson + " is a teacher";
        case 'soilder':
            return namePerson + ' is a soilder';
        case 'Developer':
            return namePerson + ' is a Blockchain Developer'
        default:
            return 'does something else'; 
    }
}

// it will save the output in the console

console.log(profession('teacher', 'Steve'));
console.log(profession('Developer', 'Faraz'));
console.log(profession('soilder', 'Jane'));



