//print pyramid
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number of rows:"));
for(i=0;i<=n;i++){
    let row= "";
    for(let j=1; j<=i; j++){
        row+= '* ';
    }
    console.log(row);
}