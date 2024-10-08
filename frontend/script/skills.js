// Vérifie si un élément est visible dans la fenêtre d'affichage à 85%.
const isAnElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top < windowHeight * 0.85 && 
        rect.bottom >= 0 && 
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const skillElements = document.querySelectorAll('.fade-in-opacity');

window.addEventListener('scroll', () => {
    skillElements.forEach(element => {
        if (isAnElementVisible(element)) {
            element.classList.add('visible'); 
        }
    });
});

// Ajoute la classe 'visible' lors du chargement de la page si l'élément est déjà visible
document.addEventListener("DOMContentLoaded", () => {
    skillElements.forEach(element => {
        if (isAnElementVisible(element)) {
            element.classList.add('visible');
        }
    });
});

