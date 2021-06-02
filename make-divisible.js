const prompt = require("prompt-sync")();

console.log("Enter x: ");
let x = Number(prompt("> "));
console.log("Enter y: ");
let y = Number(prompt("> "));

while (x % y != 0) {
	console.log(x);
	x = x + 1;
}
console.log(x, "is divisible by", y);
