const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
const disneyLow = parseFloat(disneyData['open']);
const disneyHigh = parseFloat(disneyData['high']);
const disneyOpen = parseFloat(disneyData['low']);
const disneyClose = parseFloat(disneyData['close']);
const disneyVolume = parseFloat(disneyData['volume']);

if (disneyClose > disneyOpen) {
    if (disneyVolume > 100000) {
        console.log("Strong Bullish")
    } else {
        console.log("Bullish")
    }
}   else if (disneyClose < disneyOpen) {
    if (disneyVolume > 10000) {
        console.log("Strong Bearish")
    } else {
        console.log("Bearish")
    }
}   else if (disneyClose === disneyOpen) {
    console.log("neutral")
}
