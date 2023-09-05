// 1. Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

function convertToNumber(inputString) {
    try {
      const number = Number(inputString);
      
      if (isNaN(number)) {
        throw new Error("Invalid number");
      }
      
      return number;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  // Example usage:
  console.log(convertToNumber("42"));        // Output: 42
  console.log(convertToNumber("3.14"));      // Output: 3.14
  console.log(convertToNumber("Hello"));     // Output: "Invalid number"
  