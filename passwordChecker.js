
// 7. Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.


class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      // Return the password with all characters replaced by asterisks
      return '*'.repeat(this._password.length);
    }
  
    set password(newPassword) {
      // Check if the new password meets the criteria
      const hasNumber = /\d/.test(newPassword);
      const hasUppercase = /[A-Z]/.test(newPassword);
      const isLengthValid = newPassword.length >= 8;
  
      if (hasNumber && hasUppercase && isLengthValid) {
        this._password = newPassword;
      } else {
        console.error('Invalid password. Please choose a password that is at least 8 characters long and contains at least one number and one uppercase letter.');
      }
    }
  }
  
  const user = new User('myUsername', 'MyPassword123');
  console.log(`Password: ${user.password}`); // Output: "Password: ********"
  
  // Setter example (valid password)
  user.password = 'NewPassword456';
  console.log(`New Password: ${user.password}`); // Output: "New Password: ********"
  
  // Setter example (invalid password)
  user.password = 'short';
  
  console.log(`New Password: ${user.password}`); 
  