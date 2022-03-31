const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.getElementById("login-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  // pull data from localstorage
  let localStorageData = JSON.parse(localStorage.getItem(`${email.value}`));

  // form validation
  if (password.value !== localStorageData.password) {
    alert("Wrong Credentials!");
    return;
  } else {
    localStorageData.isLoggedIn = true;
    localStorage.setItem(`${email.value}`, JSON.stringify(localStorageData));

    window.location.replace("http://127.0.0.1:5502/client/index.html");
  }

  //   localStorage.setItem("user", JSON.stringify(userData));
});
