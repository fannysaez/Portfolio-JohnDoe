## 6. Lightbox (Affichage des images en plein écran)

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
<br><br>


<p align="center">
  <a href="./slider.md">Précédent</a> | <a href="readme.md">Retour</a>
</p>