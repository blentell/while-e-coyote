const prompt = require("prompt-sync")();

let counter = 0;
let i = 0;
let j = 1;
var nextNum;

console.log('Enter a value for "n":');
let n = prompt("> ");
console.log(i);
console.log(j);
while (counter < n - 2) {
	var nextNum = i + j;
	i = j;
	j = nextNum;
	console.log(nextNum);
	counter++;
}
