/**
 * Vérifie si un élément est visible dans la fenêtre d'affichage.
 * 
 * @param {HTMLElement} element 
 * @returns {boolean} 
 */
const isVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Ajuster la visibilité en fonction de la taille de l'écran
    const visibilityThreshold = window.innerWidth < 768 ? 0.9 : 0.85;

    return (
        rect.top < windowHeight * visibilityThreshold && 
        rect.bottom >= 0 // Vérifie si le bas de l'élément est visible
    );
};

// Récupère toutes les cartes de projet
const projectCards = document.querySelectorAll('.project');

// Ajoute l'animation slide-in au chargement de la page
projectCards.forEach(card => {
    card.classList.add('slide-in');
});

// Vérifie la visibilité des cartes lors du défilement de la page
window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        if (isVisible(card)) {
            card.classList.add('visible');
        }
    });
});

// Vérifie la visibilité des cartes au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    projectCards.forEach(card => {
        if (isVisible(card)) {
            card.classList.add('visible');
        }
    });
});
