// ===============================
// Smartstar Digital JS Fundamentals
// ===============================

// 🎯 Part 1: Basics
function askUser() {
  let name = prompt("What is your name?");
  if (name) {
    document.getElementById("welcome-msg").textContent =
      "Welcome to Smartstar Digital, " + name + "! 🚀";
  } else {
    document.getElementById("welcome-msg").textContent =
      "Welcome, guest! Please join Smartstar Digital! 🌟";
  }
}

// ❤️ Part 2: Functions
function showTotal(a, b) {
  let total = a + b;
  alert("The total is: " + total);
}

function toggleMessage() {
  let text = document.getElementById("toggle-text");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

// 🔁 Part 3: Loops
function listServices() {
  const services = [
    "Web Design",
    "Digital Marketing",
    "Brand Strategy",
    "SEO Optimization"
  ];
  let list = document.getElementById("services-list");
  list.innerHTML = ""; // Clear before adding
  services.forEach(service => {
    let li = document.createElement("li");
    li.textContent = "✨ " + service;
    list.appendChild(li);
  });
}

// 🌐 Part 4: DOM Manipulation
function changeBrandColor() {
  let box = document.getElementById("brand-box");
  box.style.background =
    box.style.background === "lightyellow" ? "#e8eaf6" : "lightyellow";
}

function addNewService() {
  let newService = prompt("Enter a new Smartstar Digital service:");
  if (newService) {
    let list = document.getElementById("services-list");
    let li = document.createElement("li");
    li.textContent = "✨ " + newService;
    list.appendChild(li);
  }
}
