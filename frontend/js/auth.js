const BASE_URL = "http://localhost:3000/api/users";

// Register
function register() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    preferences: document.getElementById("preferences").value,
    allergies: document.getElementById("allergies").value,
  };

  fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      window.location.href = "index.html";
    });
}

// Login
function login() {
  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "dashboard.html";
      } else {
        alert("Login failed");
      }
    });
}
