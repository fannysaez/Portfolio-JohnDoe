//Slide
const slide = document.querySelectorAll(".slide");
let numero = 0;

// Afficher la première image dès le début
slide[numero].classList.add("active");

function ChangeSlide(sens) {
    slide[numero].classList.remove("active"); // Masque l'image actuelle
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    slide[numero].classList.add("active");
}

// Défilement automatique toutes les 3 secondes (3000 ms)
setInterval(() => {
    ChangeSlide(1); // Défilement vers la prochaine image
}, 3000); // Change cette valeur pour ajuster la vitesse (en millisecondes)

