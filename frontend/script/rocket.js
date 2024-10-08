const rocket = document.getElementById('rocket');
const portal = document.getElementById('portal');

/**
 * Gère l'événement de clic sur la fusée.
 * Déplace la fusée en diagonale, fait apparaître le portail, puis gère la réapparition de la fusée.
 */
rocket.addEventListener('click', () => {
    // Animation pour faire disparaître la fusée
    rocket.style.transition = 'transform 0.7s ease-out, opacity 0.7s ease-out';
    rocket.style.transform = 'translate(600px, -600px)';
    rocket.style.opacity = '0';

    // Montre le portail après un délai
    setTimeout(() => {
        portal.classList.add('show'); 
    }, 500); // Délai avant d'afficher le portail

    // Gère la réapparition de la fusée
    setTimeout(() => {
        rocket.style.transition = 'none';
        rocket.style.transform = 'translate(0, -480px) rotate(-45deg)';
        rocket.style.opacity = '0';

        setTimeout(() => {
            rocket.style.zIndex = '4000'; 
            rocket.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
            rocket.style.opacity = '1';

            setTimeout(() => {
                rocket.style.transition = 'transform 2s ease-out, opacity 0.5s ease-out';
                rocket.style.transform = 'translate(0, 0) rotate(0deg)';

                setTimeout(() => {
                    rocket.style.zIndex = '2000'; 
                    portal.classList.remove('show'); 
                }, 1000);

            }, 0);
        }, 250);
    }, 1300);
});
