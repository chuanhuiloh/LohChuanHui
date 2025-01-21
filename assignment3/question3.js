const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

openFloat = parseFloat(disneyData['open']);
highFloat = parseFloat(disneyData['high']);
lowFloat = parseFloat(disneyData['low']);
closeFloat = parseFloat(disneyData['close']);

let final = openFloat - highFloat + lowFloat - closeFloat;

console.log(final.toFixed(2));