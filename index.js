var rect= require('./rectangle');


function solveRect(l,b){
    console.log("solving for rectangle with l="+l+" and b="+b);

    if(l<=0 || b<=0){
        console.log("dimension should be greater than 0");
    }
    else{
        console.log("area of rectangleis"+ rect.area(l,b));
        console.log("area of rectangleis"+ rect.perimeter(l,b));
 
    }
 }

 solveRect(2,4);
 solveRect(3,5);
 solveRect(0,5);