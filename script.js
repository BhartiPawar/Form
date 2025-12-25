
 function reset() {
            document.getElementById("fname").textContent = "";
            document.getElementById("email").textContent = "";
            document.getElementById("pass").textContent = "";
            document.getElementById("conPass").textContent = "";
        }

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const conPassword = document.getElementById("conPass").value;

  let isValid = true;

  const nameErr = (document.getElementById("name-error").textContent = "");
  const emailErr = (document.getElementById("email-error").textContent = "");
  const passErr = (document.getElementById("password-error").textContent = "");
  const conPasswordErr = (document.getElementById("conPass-error").textContent =
    "");

  const nameRegex = /^[a-zA-Z]{1,30}$/;
  if (!nameRegex.test(fname)) {
    document.getElementById("name-error").textContent =
      "First name must be 1-30 letters.";
    isValid = false;
  }

  const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent =
      "Invalid email address.";
    isValid = false;
  }

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  if (!passRegex.test(password)) {
    document.getElementById("password-error").textContent =
      "Password must have 8+ chars, 1 uppercase, 1 number, 1 special char.";
    isValid = false;
  }

  if (conPassword === "") {
    document.getElementById("conPass-error").textContent =
      "Please confirm your password.";
    isValid = false;
  } else if (password !== conPassword) {
    document.getElementById("conPass-error").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
