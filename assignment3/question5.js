const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

const bacLow = bacData[0];
const bacHigh = bacData[1];
const bacOpen = bacData[2];
const bacClose = bacData[3];
const bacVolume = bacData[4];

if (bacClose > bacOpen) {
    if (bacVolume > 100000) {
        console.log("Strong Bullish")
    } else {
        console.log("Bullish")
    }
}   else if (bacClose < bacOpen) {
    if (bacVolume > 10000) {
        console.log("Strong Bearish")
    } else {
        console.log("Bearish")
    }
}   else if (bacClose === bacOpen) {
    console.log("neutral")
}