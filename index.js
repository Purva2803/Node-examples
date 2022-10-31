var rect= require('./rectangle');


function solveRect(l,b){
    console.log(`solving for rectangle with l=${l}and b=${b}`);

    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR:",err.message);

        }else{
            console.log(`the are of rectangle of dimension l=${l}and b=${b} is ${rectangle.area()}`);
            console.log(`the are of rectangle of dimension l=${l}and b=${b} is ${rectangle.perimeter()}`);     
        }  
    })
    console.log("This statement  after the call to react()");
 }

 solveRect(2,4);
 solveRect(3,5);
 solveRect(0,5);