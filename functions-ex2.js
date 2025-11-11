
function sum(num) {
  if (typeof num !== "number" || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log("Sum:", sum(5)); 
console.log("Sum:", sum("abc")); 

function factorial(num) {
  if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
    return "Please enter a valid non-negative integer";
  }

  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}
console.log("Factorial:", factorial(4)); 

function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return b - a;
  } else if (arguments.length === 3) {
    return a + b + c;
  } else if (arguments.length === 4) {
    let sum1 = a + b;
    let sum2 = c + d;
    return sum1 / sum2;
  } else {
    return "Invalid number of arguments";
  }
}


let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}


oddNumbers.sort(function(a, b) {
  return a - b;
});

let me = {
  firstName: "Sibahle",
  lastName: "Tyantsi",
  age: 22,
  favouriteColour: "Blue",
  dreamCar: "Mercedes-Benz"
};

me.favouriteFood = "Pasta";

delete me.age;
      
console.log("funkyMath:", funkyMath(8, 2)); 
console.log("funkyMath:", funkyMath(1, 2, 3)); 
console.log("funkyMath:", funkyMath(8, 2, 3, 5));
console.log("Odd numbers sorted:", oddNumbers);  
console.log("Me object:", me);
