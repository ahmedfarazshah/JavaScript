var johnTaverage,mikeTaverage,maryTaverage;
johnTaverage  = (109+101+120)/3;
mikeTaverage = (94+113+123)/3; 
maryTaverage = (107+125+134)/3;

console.log(johnTaverage, mikeTaverage, maryTaverage)


if(johnTaverage>mikeTaverage){
    console.log ("john's team with an average of 111 wins the game");
}else if (mikeTaverage>johnTaverage){
    console.log("mike's team with an average of 111 wins the game");
}else{
    console.log('there is a draw');
}

// if mary is included (she can't be added in the else if because she is a part of the first condition)


if(johnTaverage>mikeTaverage && johnTaverage>maryTaverage){
    console.log ("john's team with an average of 111 wins the game")
}else if (mikeTaverage>johnTaverage && mikeTaverage>maryTaverage){
    console.log("mike's team with an average of 111 wins the game")
}   else if (maryTaverage>johnTaverage && maryTaverage>mikeTaverage){
    console.log('mary won the contest')
}
else{
    console.log('there is a draw');
}

