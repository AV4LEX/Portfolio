document.querySelector('.burger-menu').addEventListener('click', function() {
    const menu = document.querySelector('.sticky-menu ul');
    menu.classList.toggle('visible');
    menu.classList.toggle('hidden');
});

// Ajout d'un gestionnaire d'événements pour chaque élément de menu
document.querySelectorAll('.sticky-menu li').forEach(item => {
    item.addEventListener('click', function() {
        const menu = document.querySelector('.sticky-menu ul');
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    });
});
