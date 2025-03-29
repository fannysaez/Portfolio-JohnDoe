# Explication de ma logique tout en détaillant les 4 différents scripts

## 1. Loader (Barre de progression animée)

Ce script simule un chargement progressif et met à jour une barre de progression.

```js
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

📌  Objectifs : Ce code crée une animation de barre de progression qui commence à 0% et augmente de 5% toutes les 100 millisecondes.

Logique :

- À chaque intervalle de 100ms, la valeur de la progression augmente de 5%.

- La largeur de la barre de progression (progressBar) et le texte affiché (progressText) sont mis à jour en conséquence.

- Une fois la barre remplie (100%), le setInterval est arrêté et la loader (le conteneur de la barre de progression) devient invisible après une courte transition.

## 2. Effet de Bascule (Toggle Effect) pour les services

Ce code permet d'afficher ou de supprimer des paragraphes descriptifs lorsque l'utilisateur clique sur différents éléments (par exemple, services de photographie).

```js
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

📌  Objectifs : Ce code permet de basculer l'affichage d'un paragraphe de description lorsque l'utilisateur clique sur un service (par exemple, "nature", "événement").

  Logique :

- Chaque service a un événement click qui appelle la fonction toggleParagraphe.

- La fonction toggleParagraphe vérifie si un paragraphe existe déjà. Si oui, il est supprimé ; sinon, un nouveau paragraphe est créé et ajouté à l'élément cliqué.

- Un drapeau (existFlag) permet de suivre si le paragraphe existe pour savoir s'il faut l'ajouter ou le retirer.

## 3. Mode Sombre/Clair avec Icônes

Cette section permet de basculer entre un mode sombre et un mode clair en utilisant un bouton.

```js
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

📌  Objectifs : Permet à l'utilisateur de basculer entre le mode sombre et le mode clair.

Logique :

- Au chargement de la page, le script vérifie dans le localStorage si le mode sombre a été activé précédemment. Si oui, il applique la classe dark-mode au body et modifie le texte du bouton.

- Lorsque l'utilisateur clique sur le bouton, le mode est basculé. Si le mode sombre est activé, il est enregistré dans le localStorage, et vice versa.

## 4. Slider (Carrousel d'images)

Explication du script JavaScript pour le défilement automatique du slider

Ce script permet de créer un slider d'images où les images se déplacent automatiquement à intervalles réguliers. Il utilise les méthodes JavaScript pour manipuler les classes CSS et contrôler le défilement des images. Voici une explication détaillée de chaque partie du script.

### 1. Sélection des images du slider

```js
const slide = document.querySelectorAll(".slide");
```

📌  Objectif : Sélectionner toutes les images du slider.

- Détails : document.querySelectorAll(".slide") sélectionne tous les éléments HTML ayant la classe .slide. Le résultat est un tableau de nœuds (NodeList) qui contient toutes les images que nous voulons faire défiler.

### 2. Initialisation de la variable numero

```bash
let numero = 0;
```

📌  Objectif : Créer une variable pour suivre l'indice de l'image actuellement affichée.

- Détails : numero commence à 0, ce qui signifie que l'image à l'indice 0 (la première image) est affichée au début du défilement.

### 3. Affichage de la première image

```js
slide[numero].classList.add("active");
```

📌  Objectif : Afficher la première image en ajoutant la classe .active.

- Détails : Au départ, l'image correspondant à l'indice numero (qui est 0) reçoit la classe CSS .active, ce qui la rend visible. La classe .active peut être définie dans les styles CSS pour rendre l'image visible et afficher le slider correctement.

### 4. Fonction ChangeSlide

```js

function ChangeSlide(sens) {
    slide[numero].classList.remove("active"); // Masque l'image actuelle
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    slide[numero].classList.add("active");
}
```

📌  Objectif : Changer l'image affichée selon la direction spécifiée.

Détails :

- Masquer l'image actuelle : slide[numero].classList.remove("active") enlève la classe .active de l'image actuellement affichée, la rendant invisible.

- Mise à jour de l'indice : numero = numero + sens; modifie la valeur de numero en fonction du paramètre sens :

- Si sens est 1, on passe à l'image suivante.

- Si sens est -1, on revient à l'image précédente.

* Bouclage à la fin ou au début :

- if (numero < 0) numero = slide.length - 1; : Si numero devient inférieur à 0 (lorsque l'on essaie de revenir avant la première image), on revient à la dernière image du tableau.

- if (numero > slide.length - 1) numero = 0; : Si numero dépasse le dernier indice (lorsque l'on passe après la dernière image), on revient à la première image.

- Afficher la nouvelle image : slide[numero].classList.add("active"); ajoute la classe .active à la nouvelle image, la rendant visible.

### 5. Défilement automatique

```js
setInterval(() => {
    ChangeSlide(1); // Défilement vers la prochaine image
}, 3000); // Change cette valeur pour ajuster la vitesse (en millisecondes)
```

📌  Objectif : Déclencher le changement d'image automatiquement toutes les 3 secondes.

Détails :

- setInterval(() => { ... }, 3000); appelle la fonction passée en argument toutes les 3000 millisecondes (soit 3 secondes). Cela crée l'effet de défilement automatique.

- À chaque intervalle, ChangeSlide(1) est appelé pour changer l'image dans le sens suivant (1 pour avancer).

- Personnalisation : La valeur 3000 peut être modifiée pour ajuster la vitesse du défilement. Si tu veux un défilement plus rapide, tu peux réduire cette valeur (par exemple, 2000 pour 2 secondes).

### Lightbox (Affichage des images en plein écran)

📌 Objectif :
* Permet d’agrandir une image en cliquant dessus et de la refermer en cliquant à l’extérieur.

```js
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".gallery-item img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.classList.add("active");
            lightboxImg.src = this.src;
        });
    });

    // Ferme la lightbox au clic
    lightbox.addEventListener("click", function (event) {
        if (event.target !== lightboxImg) { // Vérifie qu'on clique en dehors de l'image
            lightbox.classList.remove("active");
        }
    });
});
```

🔹 Explication

* Récupère la lightbox, l’image dans la lightbox, et toutes les images de la galerie.

- Ajoute un événement click sur chaque image :

* Quand on clique, la lightbox s'affiche (classList.add("active")) et l’image sélectionnée est affichée en grand.

* Ferme la lightbox si on clique en dehors de l’image affichée.

## 🎯 Résumé des fonctionnalités

| **Fonctionnalité**            | **Explication** |
|--------------------------------|---------------|
| **Loader**                     | Simule un chargement avec une barre de progression animée. |
| **Effet toggle (Services)**     | Affiche ou cache des descriptions en cliquant sur un service. |
| **Mode sombre / clair**         | Permet de basculer entre un mode sombre et un mode clair (sauvegarde en localStorage). |
| **Slider d'images**             | Un carrousel qui affiche automatiquement les images. |
| **Lightbox**                    | Affiche une image en grand lorsqu'on clique dessus. |
