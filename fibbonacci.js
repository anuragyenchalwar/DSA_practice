const prompt = require("prompt-sync")();
let n = Number(prompt('Enter no. of series you want :'));
let t1 = 0 , t2 = 1 , nextTerm;
for(i=1;i<n;i++){
    console.log("Your results are :",t1);
    nextTerm = t1 + t2;
    t1 = t2 ;
    t2 = nextTerm;
    
}

