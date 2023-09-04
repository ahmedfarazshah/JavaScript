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
// Scoping 

    // the whole is global scope
var a = 'whats up ';
first();

function first(){       // the function first scope is to the end of the function with the addition of global scope 
    var b = 'Mike,';
    second();

        function second(){      // the second scope with the first and global with in 
            var c = ' this is John';
                console.log(a+b+c);
                third();
        }
}


// difference between the global scope and the execution context


var a = 'whats up ';
first();

function first(){       // the function first scope is to the end of the function with the addition of global scope 
    var b = 'Mike,';
    second();

        function second(){      // the second scope with the first and global with in 
            var c = ' this is John';
                console.log(a+b+c);
                third();
        }
}
function third(){        // this is the third scope that only has global scope and itself due to the scoping and has its own execution context
    let d = 'Jane';
    // console.log(a+b+c+d);// it will throw error due to the different execution context and third function is not in the lexical(code written inside a something) scoping of second or third is only called from the second function
    console.log(a+d);
}



///////////////////////////////////////////////////////
//          THIS KEYWORD 


console.log(this);  // this is an example of the window object as this is pointing to the window object

var person = {
    name: 'Mike',
    gender: 'single',
    year_ofBirth: 2000,
    calculate : function(){
        console.log(this)
    }
}
person.calculate();





























