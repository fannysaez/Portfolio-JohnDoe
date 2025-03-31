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
<br><br>

<p align="center">
  <a href="./loader.md">Précédent</a> | <a href="./toogleEffect.md">Suivant</a>
</p>