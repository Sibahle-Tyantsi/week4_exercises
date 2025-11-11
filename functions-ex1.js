function multiply(num1,num2,num3){
       return num1*num2*num3
    
}

let sum = multiply(2,2,2)

console.log(sum)

const convertToSeconds = function(minutes) {
  return minutes * 60;
};
console.log(convertToSeconds(5));


function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Hello"));    

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Javascript")); 


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(2));  
console.log(isPrime(4));   
console.log(isPrime(6));  
console.log(isPrime(8));  
