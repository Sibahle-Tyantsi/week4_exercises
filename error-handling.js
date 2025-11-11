function validateInput(name){
    if (name !== "string"){
        return "Input is not a string"
    }
}
console.log(validateInput(123)); 

function errorHandling(){

  try {
   
    let num = null;
    num.toUpperCase(); 

  } catch (error) {
    console.log("Caught a TypeError:", error.message);
  }

  try {
    
    console.log(undeclaredVariable);

  } catch (error) {
    console.log("Caught a ReferenceError:", error.message);
  }

  try {
 
    throw new Error("This is a custom error!");
  } catch (error) {
    console.log("Caught a custom Error:", error.message);
  }
}

errorHandling();

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

console.log(toTitleCase("hello world"));
console.log(reverseString("hello"));
console.log(countCharacters("JavaScript"));


function addElement(arr, element) {
  arr.push(element);
  return arr;
}


function removeElement(arr, element) {
  return arr.filter(item => item !== element);
}


function findLargest(arr) {
  return Math.max(...arr);
}


let numbers = [2, 5, 8, 1];
console.log(addElement(numbers, 10));
console.log(removeElement(numbers, 5));
console.log(findLargest(numbers));




