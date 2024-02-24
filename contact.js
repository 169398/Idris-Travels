

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Get form values
  var username = document.getElementById("username").value;
  var dob = document.getElementById("dob").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  
  // Validate username (only alphabetic characters, no spaces or numbers)
  var usernameRegex = /^[a-zA-Z]+$/;
  if (!usernameRegex.test(username)) {
    alert("Username can only contain alphabetic characters");
    return;
  }
  
  // Validate date of birth (should be a valid date)
  if (isNaN(Date.parse(dob))) {
    alert("Date of Birth must be a valid date");
    return;
  }
  
  // Validate password (at least one uppercase, one lowercase, one number, one special character)
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long");
    return;
  }
  
  // Validate confirm password
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  
  // If all validations pass, show success message
  alert("You have successfully registered as " + username);
});
