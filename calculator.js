const mealCost = 8;
const tipPercentage = 10;

let tipAmount = mealCost * (tipPercentage/100);
let totalCost = mealCost + tipAmount;
console.log("The total cost of your bill is: " + totalCost + " euros");

console.log("tipAmount: ", tipAmount);
