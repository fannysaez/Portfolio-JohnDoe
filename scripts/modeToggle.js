// Mode sombre/clair avec icones

// Fonction pour basculer le mode sombre/clair
const modeToggleButton = document.getElementById('modeToggle');

// Vérifier si le mode sombre est déjà activé depuis le localStorage
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggleButton.textContent = "☀️"; // Modifier le texte du bouton
}

// Ajouter un événement de clic pour basculer le mode
modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Sauvegarder le mode dans le localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        modeToggleButton.textContent = "☀️"; // Modifier le texte du bouton
    } else {
        localStorage.setItem('mode', 'light');
        modeToggleButton.textContent = "🌙"; // Modifier le texte du bouton
    }
});
