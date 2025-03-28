# Explication de ma logique tout en détaillant les 4 différents scripts

## 1. Loader (Barre de progression animée)

Ce script simule un chargement progressif et met à jour une barre de progression.

``` bash
let progress = 0;
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const loader = document.getElementById("loader");

// Simule un chargement progressif
const loadingInterval = setInterval(() => {
    progress += 5;
    progressBar.style.width = progress + "%";
    progressText.innerText = progress + "%"; // Mise à jour du texte

    if (progress >= 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }, 300);
    }
}, 100);
```

* Objectifs : Ce code crée une animation de barre de    progression qui commence à 0% et augmente de 5% toutes les 100 millisecondes.

Logique :

* À chaque intervalle de 100ms, la valeur de la progression augmente de 5%.

* La largeur de la barre de progression (progressBar) et le texte affiché (progressText) sont mis à jour en conséquence.

* Une fois la barre remplie (100%), le setInterval est arrêté et la loader (le conteneur de la barre de progression) devient invisible après une courte transition.

## 2. Effet de Bascule (Toggle Effect) pour les services

Ce code permet d'afficher ou de supprimer des paragraphes descriptifs lorsque l'utilisateur clique sur différents éléments (par exemple, services de photographie).

``` bash
let existNature = false;
let existEvenement = false;
let existPortraits = false;
let existRetouche = false;

function toggleParagraphe(element, existFlag, text, id) {
    const paragraphe = document.querySelector(`#${id}`);
    
    if (paragraphe) {
        paragraphe.remove();
    } else {
        const newParagraphe = document.createElement('p');
        newParagraphe.textContent = text;
        newParagraphe.id = id;
        element.appendChild(newParagraphe);
    }
    
    return !existFlag;
}
```

* Objectifs : Ce code permet de basculer l'affichage d'un paragraphe de description lorsque l'utilisateur clique sur un service (par exemple, "nature", "événement").

    Logique :

* Chaque service a un événement click qui appelle la fonction toggleParagraphe.

* La fonction toggleParagraphe vérifie si un paragraphe existe déjà. Si oui, il est supprimé ; sinon, un nouveau paragraphe est créé et ajouté à l'élément cliqué.

* Un drapeau (existFlag) permet de suivre si le paragraphe existe pour savoir s'il faut l'ajouter ou le retirer.

## 3. Mode Sombre/Clair avec Icônes

Cette section permet de basculer entre un mode sombre et un mode clair en utilisant un bouton.

``` bash
const modeToggleButton = document.getElementById('modeToggle');

// Vérifier si le mode sombre est déjà activé depuis le localStorage
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggleButton.textContent = "☀️ Mode Clair"; // Modifier le texte du bouton
}

// Ajouter un événement de clic pour basculer le mode
modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Sauvegarder le mode dans le localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        modeToggleButton.textContent = "☀️ Mode Clair"; // Modifier le texte du bouton
    } else {
        localStorage.setItem('mode', 'light');
        modeToggleButton.textContent = "🌙 Mode Sombre"; // Modifier le texte du bouton
    }
});
```

* Objectifs : Permet à l'utilisateur de basculer entre le mode sombre et le mode clair.

Logique :

* Au chargement de la page, le script vérifie dans le localStorage si le mode sombre a été activé précédemment. Si oui, il applique la classe dark-mode au body et modifie le texte du bouton.

* Lorsque l'utilisateur clique sur le bouton, le mode est basculé. Si le mode sombre est activé, il est enregistré dans le localStorage, et vice versa.

## 4. Slider (Carrousel d'images)

Cette section gère un diaporama d'images en permettant de naviguer entre elles.

``` bash
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
    slide[numero].classList.add("active"); // Affiche la nouvelle image
}
```

* Objectifs : Affiche un carrousel d'images, permettant à l'utilisateur de naviguer entre elles en avant ou en arrière.

Logique :

* Le script initialise le premier élément comme étant actif en ajoutant la classe active à la première image.

* La fonction ChangeSlide(sens) permet de changer l'image affichée en fonction de la direction (avant ou arrière). Elle met à jour l'index de l'image affichée et ajoute ou retire la classe active pour afficher ou masquer les images.