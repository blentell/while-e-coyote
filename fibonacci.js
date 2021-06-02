const prompt = require("prompt-sync")();

let i = 0;
let j = 1;
var nextNum;

console.log('Enter a value for "n":');
let n = prompt("> ");
console.log(i);
console.log(j);
while (i < n) {
	var nextNum = i + j;
	i = j;
	j = nextNum;
	console.log(nextNum);
}
