var canvas;
var hours;
var materials;


const PAY = 60;

function minimum(ca, ho, ma){
    var hourCost = hours*PAY;
    var minCost = (ca + hourCost + materials);
    return minCost; 
}

function rec(ca, ho, ma){
    var hourCost = hours*PAY;
    var recCost = (ca + hourCost + materials)*1.5;
    return recCost; 
}
