/**
 * Vérifie si un élément est visible dans la fenêtre d'affichage, avec une marge pour déclencher l'animation plus tôt.
 * 
 * @param {HTMLElement} element - L'élément à vérifier.
 * @returns {boolean} - Retourne true si l'élément est suffisamment visible, sinon false.
 */
const isElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Vérifie si l'élément est visible quand il est à 75% dans la fenêtre
    return (
        rect.top < windowHeight * 0.75 &&  
        rect.bottom >= 0
    );
};

const activityCards = document.querySelectorAll('.activity');

// Ajoutez la classe d'animation au chargement de la page
activityCards.forEach(card => {
    card.classList.add('slide-in-left'); 
});

// Vérifie la visibilité des cartes lors du défilement de la page
window.addEventListener('scroll', () => {
    activityCards.forEach(card => {
        if (isElementVisible(card)) {
            card.classList.add('visible'); 
        }
    });
});

// Vérifie la visibilité des cartes au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    activityCards.forEach(card => {
        if (isElementVisible(card)) {
            card.classList.add('visible');
        }
    });
});
