var markMass,johnMass,markheight,johnheight,markBMI,johnBMI;
markMass = 66+ 'kg'
johnMass = 69 + 'kg'
markheight = 1.9 + 'meter'
johnheight = 1.7 + 'meter'
console.log(markMass);
console.log(johnMass);
console.log(markheight);
console.log(johnheight);

// BMI'S       *bmi = mass / height^2

var mmass,jmass,mheight,jheight;
mmass = 66;
jmass = 69;
mheight = 1.9;
jheight = 1.7;

markBMI = mmass / (mheight * mheight);
johnBMI = jmass / (jheight*jheight);

console.log('hence Mark BMI is ' + markBMI + 'kg/m^2');
console.log('hence John BMI is ' + johnBMI + 'kg/m^2');
console.log(markBMI, johnBMI)

comparing = markBMI > johnBMI;
console.log("is Mark BMI is higher than John's? " + comparing)