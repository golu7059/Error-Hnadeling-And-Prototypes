function getPerson(personObject) {
    try {
      if (typeof personObject === "object" && personObject !== null && "name" in personObject && "age" in personObject) {
        const name = personObject.name;
        const age = personObject.age;
        return `Name: ${name}, Age: ${age}`;
      } else {
        throw new Error("Invalid parameter type");
      }
    } catch (error) {
      return error.message;
    }
  }
  
  // Example usage:
  const validPerson = { name: "John", age: 30 };
  const invalidPerson = { name: "Alice" };
  const invalidInput = "Not an object";
  
  console.log(getPerson(validPerson));    // Output: "Name: John, Age: 30"
  console.log(getPerson(invalidPerson));  // Output: "Invalid parameter type"
  console.log(getPerson(invalidInput));   // Output: "Invalid parameter type"
  