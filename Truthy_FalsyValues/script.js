// falsy values = 0, undefine, NaN, '', null
// TRUTHY VALUES = all those which are not falsy values

// in a if else statement

var length; // it is also same for 0,''

if(length){
    console.log('it is a truthy value')
}else{
    console.log('it is a falsy value')
}

// but if we use logical operators the case is changed

length;
if(length || length===0){
    console.log('it is a truthy value / varable is defined')
}else{
    console.log('it is a falsy value')
}

// the == is equal to , and === strickly applies the value and also converts a number in a string to a number
length = 23;

if(length=='23'){
    console.log('the operator == does the type coersion')
}else{
    console.log('false')
}