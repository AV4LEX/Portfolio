/**
 * Vérifie si un élément est visible dans la fenêtre d'affichage.
 * 
 * @param {HTMLElement} element - L'élément à vérifier.
 * @returns {boolean} - Retourne true si l'élément est visible, sinon false.
 */
const isitVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Ajustement du seuil pour les mobiles
    const visibilityThreshold = window.innerWidth < 768 ? 0.9 : 1;

    return (
        rect.top >= 0 &&
        rect.bottom <= windowHeight * visibilityThreshold 
    );
};

// Sélectionne tous les boutons de contact et icônes sociales dans la section contact
const contactElements = document.querySelectorAll('.contact-button, .social-icons img');

// Ajoute la classe d'animation au chargement de la page
contactElements.forEach(element => {
    element.classList.add('slide-in');
});

// Vérifie la visibilité des éléments de contact lors du défilement de la page
window.addEventListener('scroll', () => {
    contactElements.forEach(element => {
        if (isitVisible(element)) {
            element.classList.add('visible'); 
        }
    });
});

// Vérifie la visibilité des éléments de contact au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    contactElements.forEach(element => {
        if (isitVisible(element)) {
            element.classList.add('visible'); 
        }
    });
});
