const rocket = document.getElementById('rocket');
const portal = document.getElementById('portal');

/**
 * Gère l'événement de clic sur la fusée.
 * Déplace la fusée en diagonale, fait apparaître le portail, puis gère la réapparition de la fusée.
 */
rocket.addEventListener('click', () => {
    setTimeout(() => {
        rocket.blur(); // Retire le focus immédiatement après le clic
    }, 4); // Délai de 4 millisecondes

    // Animation pour faire disparaître la fusée
    rocket.style.transition = 'transform 0.7s ease-out, opacity 0.7s ease-out';
    rocket.style.transform = 'translate(600px, -600px)';
    rocket.style.opacity = '0';

    // Montre le portail 
    setTimeout(() => {
        portal.classList.add('show'); 
    }, 500); // Délai avant d'afficher le portail

    // Réapparition de la fusée
    setTimeout(() => {
        rocket.style.transition = 'none';
        rocket.style.transform = 'translate(0, -480px)'; // Pas de rotation ici
        rocket.style.opacity = '0';

        setTimeout(() => {
            rocket.style.zIndex = '4000'; 
            rocket.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
            rocket.style.opacity = '1';

            // Ajouter une rotation après être revenu à la position d'origine
            setTimeout(() => {
                rocket.style.transition = 'transform 2s ease-out'; // Transition pour la rotation seulement
                rocket.style.transform = 'rotate(-45deg)'; // Rotation après être revenu à la position

                setTimeout(() => {
                    rocket.style.transition = 'transform 2s ease-out, opacity 0.5s ease-out';
                    rocket.style.transform = 'translate(0, 0) rotate(0deg)'; // Remettre la rotation à 0 après la rotation initiale

                    setTimeout(() => {
                        rocket.style.zIndex = '2000'; 
                        portal.classList.remove('show'); 
                    }, 1000); // Délai avant de retirer le portail

                }, 1000); // Temps avant d'appliquer la première rotation
            }, 0); // Aucune attente avant la première rotation
            
        }, 250); // Réapparition de la fusée après un délai
    }, 1300); // Délai avant la réapparition
});
