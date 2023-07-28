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