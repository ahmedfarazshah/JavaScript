/////////////////////////////////////
// Hoisting

    // FOR FUNCTIONS

    calculateAge(2003);
// it will work because the function points to the function in the variable object of the execution context

    function calculateAge(yearborn){
        console.log(2023-yearborn);
    }    

    // funcExpression(2003);
// it won't work because variables are set to undefine and function will not have the value but will work if placed after the function expression

var funcExpression = function(inserted){
    console.log(65-(2023 - inserted));
}    


    // FOR VARIABLES

console.log(area);
// this will be undefine because javascript knows that there is a variable but value will not be assigned due to the hoisting as value is not stored in the execution context

var area = 44;
console.log(area);

function listing(){
    // console.log(lengthx);
    let lengthx = 55;
    console.log(lengthx);
}
listing();



///////////////////////////////////////////