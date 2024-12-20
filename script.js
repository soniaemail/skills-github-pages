console.log("sonia")
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  
  function validateForm() {
    const emailField = document.getElementById("email");
    // Prévoyez un id "emailError" dans une balise <p> vide
    const errorMessage = document.getElementById("emailError");
  
    if (!validateEmail(emailField.value)) {
      errorMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
      return false;
    } else {
      errorMessage.textContent = "";
      return true;
    }
  }
  // Prévoyez un id "contactForm" dans la balise <form>
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  let currentSlide = 0;
// Prévoyez une classe "slide" pour chaque élément du diaporama
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
}

// Bouton "suivant"
document.getElementById("nextSlide").addEventListener("click", function() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Bouton "précédent"
document.getElementById("prevSlide").addEventListener("click", function() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// Prévoyez une classe "project-image" sur chaque image de projet
const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(image => {
  image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.1)";
  });

  image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1)";
  });
});
// Prévoyez un bouton associé à l'id "scrollToTop"
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});  
 