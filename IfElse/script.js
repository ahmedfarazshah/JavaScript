var apple,mango,watermelon,cherry;
apple = 1; // 1 kg
mango = 2; // 2 kg
watermelon = 5; // 5 kg
cherry = 0.5; // 0.5 kg 

if(apple<mango){
    console.log('I love mangoes')
}else{
    console.log('apple helped Newton')
}

var grapesYellow = true;
var grapesBlack = false;
if(grapesYellow){
    fine = prompt('good though');
    console.log(fine + ' thank you for writing')
}else{
    console.log('never mind')
}

var caracter = 'john';
var civilstatus = 'single';

if(civilstatus === 'married'){
    ask = prompt('intersted');
    console.log('will you marry?' + ask)
}else{
    alert('occupied')
}

// boolean logic and elseif

var age,name_person;
name_person = 'john'
age = 55

if(age>20 && age<30){
    console.log('he might be a man')
}else if(age<=20 && age>13) {
    console.log('he is in his teenage')
}else if (age<=13 && age>0){
    console.log('he is a boy')
}else{
    console.log('he is a grown old man')
}
