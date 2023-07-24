//      Ternary Operations 
var firstName= 'stephen';
var age = 18;
if(age>=18){
    console.log('he is eligible to vote')
}else{
    console.log('he is not eligible to vote')
}

// In javascript ternary is only used for if and else operations but not for 'else if' operations but we have switch statement for that
// 2 options to excute the ternary operation,either in a variable or in line

age = 15;
age>=18?console.log('driving lisence can be issued'):console.log('not eligible for driving lisence')

// 2nd option
var color = 'red'
var fruit = color === 'ed'?'liked by the owner':'prefer not to eat'
console.log(fruit)

age= 22;
var checkAge = age<18 ? 'not welcomed in the club':'will be issued a ticket'
console.log(checkAge)

//      switch statements

sport = 'football'

switch (sport){
    case 'cricket':
    case 'football':
        console.log('will love to play');
        break;
    case 'hockey':
        console.log('go to home');
        break;
    case 'bedminton':
        console.log('latter ');
        break;
    default:
        console.log('will think about it');
        break;
}


luckyNumber = 50;
switch(luckyNumber) {
    case luckyNumber = 50:
        console.log('better luck next time');
        break;
    case luckyNumber = 42:
        console.log('congratulation you won');
        break;
    case luckyNumber >=30 && luckyNumber <=41:
    case luckyNumber = 1:
        console.log('you won the prize box');
        break;
    default:
        console.log('you should have stayed at home');
    }
