document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link'); // Ajoutez une référence pour le lien
    const modalImageContainer = document.getElementById('modal-image-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentImageIndex = 0; 
    let projects = []; 

    // Charger les données JSON
    fetch('frontend/data/projets.json')
        .then(response => response.json())
        .then(data => {
            projects = data; 
            document.querySelectorAll('.project').forEach((project, index) => {
                project.addEventListener('click', function () {
                    currentImageIndex = 0; 
                    openModal(index); 
                });
            });
        })
        .catch(error => console.error('Erreur lors du chargement du JSON:', error));

    // Fonction pour ouvrir la modale
    function openModal(index) {
        const project = projects[index]; 
        modalTitle.textContent = project.title; 
        modalDescription.textContent = project.description; 

        // Vérifiez si un lien existe pour le projet
        if (project.link) {
            modalLink.href = project.link; 
            modalLink.textContent = "Voir le code"; 
            modalLink.style.display = 'block';
        } else {
            modalLink.style.display = 'none'; 
        }

        currentImageIndex = 0; 
        updateCarousel(index); 
        modal.style.display = 'flex'; 
    }

    // Mettre à jour le carrousel avec les images du projet
    function updateCarousel(index) {
        modalImageContainer.innerHTML = ''; 
        projects[index].images.forEach((image, imgIndex) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.classList.add('carousel-image');
            if (imgIndex === currentImageIndex) imgElement.classList.add('active'); 
            modalImageContainer.appendChild(imgElement);
        });
        showImage(currentImageIndex); 
    }

    // Afficher l'image courante
    function showImage(index) {
        const images = modalImageContainer.querySelectorAll('.carousel-image');
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none'; 
        });
    }

    // Fonction pour changer d'image dans le carrousel
    function changeImage(direction) {
        const images = modalImageContainer.querySelectorAll('.carousel-image');
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length; 
        showImage(currentImageIndex); 
    }

    // Événements pour les boutons de navigation
    prevBtn.addEventListener('click', function () {
        changeImage(-1); 
    });
    nextBtn.addEventListener('click', function () {
        changeImage(1); 
    });

    // Fonction pour fermer la modale
    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none'; 
    });

    // Ferme la modale quand on clique en dehors de celle-ci
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    });
});
