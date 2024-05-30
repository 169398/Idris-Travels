

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  var username = document.getElementById("username").value;
  var dob = document.getElementById("dob").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  
  var usernameRegex = /^[a-zA-Z]+$/;
  if (!usernameRegex.test(username)) {
    alert("Username can only contain alphabetic characters");
    return;
  }
  
  if (isNaN(Date.parse(dob))) {
    alert("Date of Birth must be a valid date greater than 2004");
    return;
  }
  
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long");
    return;
  }
  
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  
  alert("You have successfully registered as " + username);
});
