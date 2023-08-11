var john ={
            fullname: 'John Smith',
            bills : [134,33,335,33,97],
            calcutip: function(){
                    this.tips = [];
                    this.final_bill = [];
                    
                    for(var i = 0; i <this.bills.length; i++){
                        var percentage;
                        bill = this.bills[i];
                        if(bill<50){
                            percentage= .2;
                        }else if (bill >=50 && bill<200){
                            percentage = .15;
                        }else {
                            percentage = 1;
                        }

                        this.tips[i] =  bill * percentage;
                        this.final_bill[i] = bill + bill * percentage;         

                    }
            }
}

// for the Marks Family


var mark = {
    name : "Mark Mixer",
    bills : [77,3375,110,45],
    calctip: function(){
        
        this.tips = [];
        this.totalbill = [];
        
        for(var i = 0; i < this.bills.length;i++){

            var percentage;
            if(this.bills[i]<100){
                percentage = .2;
            }else if(this.bills[i]>= 100 && this.bills[i]<300){
                percentage = .1;
            }else{
                percentage = .3;
            }

            this.tips[i] = this.bills[i] * percentage;
            this.totalbill[i] = this.tips[i]+this.bills[i];
        }   
    }
}



// a function that calculates average value of tips


function tipsAverage (tips){
    sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}






john.calcutip();
mark.calctip()
// adding a variable in the objects
john.average = tipsAverage(john.tips);
mark.average = tipsAverage(mark.tips);



console.log(john, mark) 


if(john.average>mark.average){
    console.log(john.fullname + "'s family paid higher tip average of $" + john.average)
}else {
    console.log(mark.name + "'s family paid higher tip average of $" + mark.average)
    
}











