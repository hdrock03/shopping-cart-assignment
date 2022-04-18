const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

const form = document.getElementById("register-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  // form validation
  if (password.value !== confirmPassword.value) {
    alert("Password did not match");
    return;
  }

  const userData = {
    isLoggedIn: true,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    userCart: [],
  };
  localStorage.setItem("email",`${email.value}`)
  localStorage.setItem("userdata", JSON.stringify(userData));

  window.location.replace("http://127.0.0.1:5502/client/index.html");
});
