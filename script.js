// Tabs
let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".tab-content");

tabs.forEach(function(tab) {
  tab.onclick = function() {
    tabs.forEach(function(t) { t.classList.remove("active"); });
    contents.forEach(function(c) { c.classList.remove("active"); });

    tab.classList.add("active");
    let tabName = tab.getAttribute("data-tab");
    document.getElementById(tabName).classList.add("active");
  };
});


// Theme Toggle 
let toggleBtn = document.getElementById("theme-toggle");

function changeTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerText = "light ☀";
  } else {
    document.body.classList.remove("dark");
    toggleBtn.innerText = "dark ☾";
  }
}

let savedTheme = localStorage.getItem("theme") || "light";
changeTheme(savedTheme);

toggleBtn.onclick = function() {
  let newMode = document.body.classList.contains("dark") ? "light" : "dark";
  changeTheme(newMode);
  localStorage.setItem("theme", newMode);
};


// Role text rotation
const roleText = document.getElementById("role-text");
const roles = [
  "Full Stack Developer",
  "C & Java Programmer",
  "MERN Stack Engineer"
];
let index = 0;

function typeText(text) {
  roleText.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    roleText.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(typing);
  }, 80);
}

setInterval(() => {
  index = (index + 1) % roles.length;
  roleText.style.opacity = "0";
  setTimeout(() => {
    typeText(roles[index]);
    roleText.style.opacity = "1";
  }, 600);
}, 5000);