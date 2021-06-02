const prompt = require("prompt-sync")();

console.log("Enter a number: ");
let num = Number(prompt("> "));

while (num <= 100) {
	console.log(num);
	num = num * 2;
}
