// HAMBURGER MENU TOGGLE
function hamburg() {
  document.querySelector(".dropdown").classList.add("open");
}

function cancel() {
  document.querySelector(".dropdown").classList.remove("open");
}

// VIDEO BACKGROUND PLAYING
const video = document.getElementById('bg-video');

// Hide video entirely until it's ready to play
video.style.opacity = '0';
video.style.transition = 'opacity 1.5s ease';

video.addEventListener('playing', () => {
  video.classList.add('loaded');  // only fades in once actually playing
});

// Fallback in case playing event doesn't fire
setTimeout(() => {
  video.classList.add('loaded');
}, 3000);

// TYPEWRITER EFFECT
const typewriterTexts = [
  "Computer Science Student",
  "Front-End Developer",
];

let typewriterIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1500;

const typewriterSpan = document.querySelector(".typewriter-text");

function type() {
  if (charIndex < typewriterTexts[typewriterIndex].length) {
    typewriterSpan.textContent += typewriterTexts[typewriterIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterSpan.textContent = typewriterTexts[typewriterIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    typewriterIndex++;
    if (typewriterIndex >= typewriterTexts.length) typewriterIndex = 0;
    setTimeout(type, 500);
  }
}

// SCROLL NAVIGATION EFFECT (optional smooth scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.querySelector(".dropdown").classList.remove("open"); // close menu when navigating
  });
});

// INITIALIZE TYPEWRITER WHEN PAGE LOADS
document.addEventListener("DOMContentLoaded", function () {
  if (typewriterTexts.length) setTimeout(type, 1000);
});
