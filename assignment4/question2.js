const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let sumPrices = 0;
let countPrices = amdPrices.length;
for (let price of amdPrices) {
    sumPrices += price;
}

let avgPrice = sumPrices / countPrices;

console.log("The 7-day SMA of AMD is " + avgPrice.toFixed(2));