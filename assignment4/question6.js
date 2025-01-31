// Modify the code below:

let amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Array to store the 3 lowest average prices
const lowestPrices = [];

// Loop through thrice to get the 3 lowest Price after removing the lowest Price in the previous loop
for (let i = 0; i < 3; i++) {
    let minPrice =  amdPrices[0];
    for (let price of amdPrices) {
        if (price < minPrice) {
            minPrice = price;
        }
    }
    // Remove the lowest price from amdPrices array after finding the lowest price
    amdPrices = amdPrices.filter(item =>  item != minPrice);
    // Add the lowest price to the lowestPrices array
    lowestPrices.push(minPrice); 
}
console.log(`The three lowest prices are ${lowestPrices[0]}, ${lowestPrices[1]} and ${lowestPrices[2]}`);