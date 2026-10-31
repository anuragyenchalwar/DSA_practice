const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: ")); 

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is NOT a prime number.`);
}
