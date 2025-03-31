## 4. Slider (Carrousel d'images)

Explication du script JavaScript pour le défilement automatique du slider

Ce script permet de créer un slider d'images où les images se déplacent automatiquement à intervalles réguliers. Il utilise les méthodes JavaScript pour manipuler les classes CSS et contrôler le défilement des images. Voici une explication détaillée de chaque partie du script.
<br><br>

### 1. Sélection des images du slider

```js
const slide = document.querySelectorAll(".slide");
```

📌  Objectif : Sélectionner toutes les images du slider.

- Détails : document.querySelectorAll(".slide") sélectionne tous les éléments HTML ayant la classe .slide. Le résultat est un tableau de nœuds (NodeList) qui contient toutes les images que nous voulons faire défiler.
<br><br>
### 2. Initialisation de la variable numero

```bash
let numero = 0;
```

📌  Objectif : Créer une variable pour suivre l'indice de l'image actuellement affichée.

- Détails : numero commence à 0, ce qui signifie que l'image à l'indice 0 (la première image) est affichée au début du défilement.
<br><br>

### 3. Affichage de la première image

```js
slide[numero].classList.add("active");
```

📌  Objectif : Afficher la première image en ajoutant la classe .active.

- Détails : Au départ, l'image correspondant à l'indice numero (qui est 0) reçoit la classe CSS .active, ce qui la rend visible. La classe .active peut être définie dans les styles CSS pour rendre l'image visible et afficher le slider correctement.
<br><br>

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
<br><br>

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
<br><br>

<p align="center">
  <a href="documentation/toogleEffect.md">Précédent</a> | <a href="documentation/lightbox.md">Suivant</a>
</p>