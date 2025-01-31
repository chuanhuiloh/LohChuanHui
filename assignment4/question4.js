const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let numDays = msftData.length;
let sumClose = 0;
for (let day of msftData) {
	sumClose += day[3];
}


let avgClosingPrice = sumClose / numDays;

console.log("Average closing price of MSFT is " + avgClosingPrice.toFixed(2));