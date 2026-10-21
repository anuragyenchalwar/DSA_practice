//sum of digits
const prompt = require("prompt-sync")();

let n = Number(prompt("enter a number :"));
let sum = 0;
if(isNaN(n)){
    console.log("enter a Valid Number")
}
else{
    while(n>0){
        sum = sum + n%10;
        n = Math.floor(n/10);
        
    }
    console.log("The sum of digit is : ",sum);
}