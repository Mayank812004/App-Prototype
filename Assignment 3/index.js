function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "Akshun") {
    if (password === "hello") {
      window.location.href = "welcome.html";
    }
  } else {
    alert("login not successful");
  }
}
