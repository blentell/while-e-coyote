const prompt = require("prompt-sync")();

const string = prompt("Enter a string: ");
let repeatedString = string;

while (repeatedString.length <= 10) {
	console.log(repeatedString);
    repeatedString =  repeatedString + string;
}
