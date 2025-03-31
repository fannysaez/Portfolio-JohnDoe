//Loader ! barre de progression animer
// Initialisation des variables
let progress = 0;
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const loader = document.getElementById("loader");
const typewriter = document.querySelector('.Typewriter');

// Simule un chargement progressif avec une augmentation de 6% toutes les 300ms
const loadingInterval = setInterval(() => {
    progress += 6;
    progressBar.style.width = progress + "%";
    progressText.innerText = progress + "%"; // Mise à jour du texte

    if (progress >= 100) {
        progress = 100; // Pour éviter d'aller au-delà de 100%
        progressBar.style.width = "100%";
        progressText.innerText = "100%"; // Affiche "100%" à la fin du chargement
        clearInterval(loadingInterval);
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none"; // Cacher le loader après 0.5s
                typewriter.classList.add('startTypewriter'); // Ajouter la classe après le loader
            }, 500);
        }, 300);
    }
}, 300); // Intervalle de 300ms