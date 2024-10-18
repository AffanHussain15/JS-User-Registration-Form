function checkname(name) {
  var n = document.getElementById(name).value;
  var a = /^[a-zA-Z]+$/;
  if (n === "") {
    alert("Name required.");
  } else if (!a.test(n)) {
    alert("Only alphabets and spaces are allowed.");
  }
}

function checkemail(email) {
  var e = document.getElementById(email).value;
  var m = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (e === "") {
    alert("Email required.");
  } else if (!m.test(e)) {
    alert("Only Email Alphabet required.");
  }
}

function checkPhoneNumber(fieldId) {
  var number = document.getElementById(fieldId).value;
  var re = /^[0-9]{10}$/;
  if (number === "") {
    alert("Phone number is required.");
    document.getElementById(fieldId).focus();
    return false;
  } else if (!re.test(number)) {
    alert("Phone number must be exactly 10 digits.");
    document.getElementById(fieldId).focus();
    return false;
    alert("Phone number is valid!");
    return true;
  }
}

function checkDOB(birth) {
  var dob = document.getElementById(birth).value;
  if (dob === "") {
    alert("Date of birth is required.");
    document.getElementById(birth).focus();
    return false;
  }
  alert("Date of birth is valid!");
  return true;
}

function checkAge(age) {
  var age = document.getElementById("age").value;
  if (age === "") {
    alert("Age is required.");
    document.getElementById("age").focus();
    return false;
  }
  if (isNaN(age) || age < 1 || age > 120) {
    alert("Please enter a valid age between 1 and 120.");
    document.getElementById("age").focus();
    return false;
  }
  alert("Age is valid!");
  return true;
}

function checkPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (password === "") {
    alert("Password is required.");
    document.getElementById("password").focus();
    return false;
  }
  if (!re.test(password)) {
    alert(
      "Password must be at least 8 characters long, contain at least one letter and one number."
    );
    document.getElementById("password").focus();
    return false;
  }
  if (confirmPassword === "") {
    alert("Confirm password is required.");
    document.getElementById("confirmPassword").focus();
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords not match.");
    document.getElementById("confirmPassword").focus();
    return false;
  }
  alert("Password is valid and confirmed!");
  return true;
}

function checkAddress() {
  var address = document.getElementById("address").value;
  var re = /^[A-Za-z\s,.'-]{3,}$/;
  if (address === "") {
    alert("Address is required.");
    document.getElementById("address").focus();
    return false;
  }
  if (!re.test(address)) {
    alert(
      "Please enter a valid address (at least 3 characters, letters, numbers, spaces, commas, periods, and dashes allowed)."
    );
    document.getElementById("address").focus();
    return false;
  }
  alert("Address is valid!");
  return true;
}

function checkCity() {
  var city = document.getElementById("city").value;
  var re = /^[A-Za-z\s-]+$/;
  if (city === "") {
    alert("City is required.");
    document.getElementById("city").focus();
    return false;
  }
  if (!re.test(city)) {
    alert("Please enter a valid city (letters, spaces, and hyphens only).");
    document.getElementById("city").focus();
    return false;
  }
  alert("City is valid!");
  return true;
}
