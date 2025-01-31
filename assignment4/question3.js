const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let sumPrices = 0;
let countPrices = amdPrices.length;
for (let price of amdPrices) {
    sumPrices += price;
}

let avgPrice = sumPrices / countPrices;

let abvAvgCount = 0
for (price of amdPrices) {
    if (price > avgPrice) {
        abvAvgCount++
    }
}

console.log("Number of days AMD was above the 7-day SMA is: " + abvAvgCount);