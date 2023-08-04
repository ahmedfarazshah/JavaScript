var john = {
    fullName : 'John',
    mass : 70,
    height : 1.8,
    calcBmi : function(){
       this.bmi = this.mass / (this.height * this.height)
    } 
}
john.calcBmi();
console.log(john);




var mark = {
    fullName : 'Mark Anderson',
    mass: 66,
    height : 1.6,
    bmi : function(){
       this.bmi = this.mass / (this.height * this.height)
    }
}
mark.bmi();
console.log(mark)

if(john.bmi>mark.bmi){
    console.log(john.fullName +' BMI is higher than'  + mark.bmi);
}else if(mark.bmi>john.bmi){
    console.log(mark.fullName +' BMI is higher than'  + john.fullName)
}else{
    console.log('both have same BMI')
}

// for switch there must a condtition that satisfy the both
/*
switch () {
    case (mark.bmi>john.bmi):
        console.log(mark.fullName +' BMI is higher than'  + john.fullName);
        break;

    case (john.bmi> mark.bmi):
    console.log(john.fullName +' BMI is higher than'  + mark.bmi);
        break;

    default:
        console.log('both have same BMI value')
        break;
}*/
// this is to check the staging