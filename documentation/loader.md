## 1. Loader (Barre de progression animée)

Ce script simule un chargement progressif et met à jour une barre de progression, augmentant de 6% toutes les 300 millisecondes.

```js
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
```

📌 Objectifs : Ce code crée une animation de barre de progression qui commence à 0% et augmente de 6% toutes les 300 millisecondes.
<br><br>
Logique :

* À chaque intervalle de 300ms, la valeur de la progression augmente de 6%.

* La largeur de la barre de progression (progressBar) et le texte affiché (progressText) sont mis à jour pour afficher la progression en temps réel.

* Une fois la barre remplie à 100%, le setInterval est arrêté pour stopper les mises à jour. Le loader (le conteneur de la barre de progression) devient ensuite invisible après une transition de 300ms. Il est complètement caché après 500ms.

<br><br>

<p align="center">
  <a href="readme.md">Précédent</a> | <a href="./modeToogle.md">Suivant</a>
</p>