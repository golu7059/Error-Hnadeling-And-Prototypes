// 8. Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.

 
const Student = {
    name: "",
  
    printDetails: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const student1 = Object.create(Student);
  student1.name = "Mithun";
 
  student1.printDetails(); // Output: "Hello, my name is Mithun"
  