// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("navbar").classList.toggle("active");
});

// Smooth scroll to top on logo click
document.getElementById("logo").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const phrases = [
  "small businesses to grow.",
  "offline businesses to go online.",
  "brands to find digital success.",
  "entrepreneurs to stand out online."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeAnimation() {
  const currentPhrase = phrases[phraseIndex];
  const visibleText = currentPhrase.substring(0, charIndex);

  typedText.textContent = visibleText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(typeAnimation, 80);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeAnimation, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(typeAnimation, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeAnimation);
