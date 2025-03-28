// Effet de bascule (Toggle Effect) pour tous les services

//Sélection de l'élément avec id='nature'
const nature = document.getElementById('nature');
const evenement = document.getElementById('evenement');
const portraits = document.getElementById('portraits');
const retouche = document.getElementById('retouche');

//Variable de contrôle
let existNature = false;
let existEvenement = false;
let existPortraits = false;
let existRetouche = false;

//Variables existNature, existEvenement, etc. : Ces variables permettent de suivre l'état (existe ou non) de chaque paragraphe pour savoir si on doit le créer ou le supprimer.

//Fonction pour gérer l'ajout ou suppression de paragraphe
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

//toggleParagraphe() : Cette fonction est utilisée pour ajouter ou supprimer un paragraphe. Elle prend l'élément cliqué, un drapeau (existFlag) pour vérifier si un paragraphe existe déjà, le texte à afficher, et l'ID pour le paragraphe.

//Ajout des écouteurs d'événements pour chaque élément
nature.addEventListener('click', () => {
    existNature = toggleParagraphe(nature, existNature, 
        'Notre service de photographie de la nature offre des images à couper le souffle, capturant la beauté sauvage du monde naturel. Que vous soyez un passionné de paysages, une entreprise de tourisme ou une organisation dédiée à la conservation de la nature, nos photographies sauront répondre à vos besoins spécifiques.', 
        'paragrapheNature');
});

evenement.addEventListener('click', () => {
    existEvenement = toggleParagraphe(evenement, existEvenement, 
        'La photographie d\'événements capture l\'essence des moments importants de la vie, qu\'il s\'agisse de mariages, de fêtes, ou d\'autres occasions spéciales. Nous nous assurons que chaque moment clé est immortalisé avec professionnalisme et créativité.', 
        'paragrapheEvenement');
});

portraits.addEventListener('click', () => {
    existPortraits = toggleParagraphe(portraits, existPortraits, 
        'Nos portraits sont conçus pour capturer l\'individualité et l\'authenticité de chaque sujet. Que ce soit pour des portraits personnels, professionnels ou familiaux, notre équipe sait comment faire ressortir le meilleur de chaque personne.', 
        'paragraphePortraits');
});

retouche.addEventListener('click', () => {
    existRetouche = toggleParagraphe(retouche, existRetouche, 
        'La retouche photo professionnelle permet de sublimer vos images en corrigeant les imperfections, ajustant les couleurs et améliorant la qualité visuelle. Nous offrons des services de retouche pour des portraits, des événements, et bien plus.', 
        'paragrapheRetouche');
});

//Écouteurs d'événements : Chaque élément de la liste (nature, evenement, portraits, retouche) a un écouteur d'événements click qui déclenche la fonction toggleParagraphe avec des paramètres spécifiques à chaque élément.