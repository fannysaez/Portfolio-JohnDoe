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
<br><br>

<p align="center">
  <a href="./modeToogle.md">Précédent</a> | <a href="./slider.md">Suivant</a>
</p>