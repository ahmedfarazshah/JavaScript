// Objects and Methods

// when we add functions to an object then they are called as methods
// methods are for objects not for arrays

var jane = {
    firstName : 'Jane',
    lastName : 'Max',
    birthYear : 1992,
    famliy : ['Max', 'Carl', 'Andrew', 'Javera'],
    job : 'teacher',
    isMarried : true,
    calcAge : function(birthYear){
        return 2023 - birthYear; 
    }
}
console.log(jane, jane.calcAge(2000));

// using this 
// this keyword adds a element to object and also links the value in a method to elemnt in an object


var jane = {
    firstName : 'Jane',
    lastName : 'Max',
    birthYear : 1992,
    famliy : ['Max', 'Carl', 'Andrew', 'Javera'],
    job : 'teacher',
    isMarried : true,
    calcAge : function(){
        this.age= 2023 - this.birthYear; //as we can add a elemnt using john.___ element to be added 
    }
}
jane.calcAge(); // to excute a method you have to call the function
console.log(jane)