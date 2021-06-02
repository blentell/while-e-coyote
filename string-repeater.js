const prompt = require("prompt-sync")();

let string = prompt("Enter a string: ");

console.log(string);

while (string.length <= 10) {
	string = string + string;
	console.log(string);
}
