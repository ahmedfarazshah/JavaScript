                // tip calculator

function tipcalcu(twenty, fifteen, ten){
    var firstRes = twenty*0.2;
    console.log(firstRes);
    var secRes = fifteen * (15/100);
    console.log(secRes);
    var thirdRes = ten * 0.1;
    console.log(thirdRes);
}
console.log(tipcalcu(48, 124, 268));

var tipsOfAll = [9.6, 18.5, 26.8]

var finalPaid = new Array(48+tipsOfAll[0], 124+tipsOfAll[1], 268+26.8)
// or you can also do as the last one
console.log(tipsOfAll, finalPaid)


// the way ustad did

console.log('the way Ustad did')

function calulatetip(bill){
    var percentage
    // if we were needed separte return statement we would have used switch statement but we needed only one return so we will use switch 
    if (bill<50){
        percentage = .2;
    }else if(bill >=50 && bill <200) {
        percentage = .15;
    }else{
        percentage = .1;
    }
    return percentage * bill
}

var bills = [48, 124, 268];
var tipsbills =[calulatetip(bills[0]),
                calulatetip(bills[1]),
                calulatetip(bills[2])]

var totalbill = [
    bills[0]+tipsbills[0],
    bills[1]+tipsbills[1],
    bills[2]+tipsbills[2],
]

console.log(tipsbills, totalbill)






