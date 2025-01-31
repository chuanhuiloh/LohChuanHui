const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sumClose = 0;
let numDays = disneyData.length;

for (let day of disneyData) {
	closePrice = parseFloat(day['close']);
	sumClose += closePrice;
}
let avgClosingPrice = sumClose / numDays;

console.log(avgClosingPrice);

console.log("Average closing price of Disney is " + Math.ceil(avgClosingPrice * 100) / 100);