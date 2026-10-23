//check whether the given number is strong number or not
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter Your Number : "));
let original = n;       //to compare with the fact
let sum = 0;            //to add the fact

while(n>0){
    let digit = n%10;   //to extract the last digit
    let fact = 1;       //multiplying so use 1

    for(i=1 ; i<=digit ; i++){
        fact*=i;
    }
    sum += fact;
    n = Math.floor(n/10);   //to remove the last digit from the number
}

if(sum == original){
    console.log("This is a Strong Number");
}else{
    console.log("This is Not a Strong Number");
}
