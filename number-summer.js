const prompt = require("prompt-sync")();

let num = 0;
sum = 0;

while (num !== "done") {
	console.log("Enter some numbers (type 'done' when complete): ");
	num = prompt("> ");
	let numSum = Number(num);
	if (isNaN(numSum)) numSum = 0;
	sum = Number((sum += numSum));
	console.log(sum);
}
console.log("Those numbers sum to", sum);
