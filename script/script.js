const toggle = document.querySelector(".themeToggle");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

//toggle icon styles ends//

//typing text about me//

const texts = [
  "Frontend Developer",
  "UI/UX Designer",
  "Backend Developer",
  "Computer Technician",
];

const typingEl = document.getElementById("typing-text");
let index = 0,
  charIndex = 0;

function typeEffect() {
  if (charIndex < texts[index].length) {
    typingEl.innerHTML += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}
//function to erase texts//

function eraseEffect() {
  if (charIndex > 0) {
    typingEl.innerHTML = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}
typeEffect();
//bars sections//

const navbar = document.getElementById("navbar");
const bar = document.getElementById("bar");
const barHide = document.querySelector("#barTimesBtn");
bar.addEventListener("click", () => {
  navbar.classList.toggle("showNavbar");
  if (navbar.classList.contains("showNavbar")) {
    barHide.classList.toggle("fa-times");
    barHide.style.color = "red";
    barHide.classList.remove("fa-bars");
  } else {
    barHide.classList.remove("fa-times");
    barHide.classList.add("fa-bars");
  }
});

//date  todays//

const d = new Date();
const year = d.getFullYear();
document.getElementById("date").innerText = year;

