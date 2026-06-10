document.addEventListener('DOMContentLoaded', () => {
    const galleryOverlay = document.querySelector('.gallery-overlay');
    const imgBox = document.querySelector('.imgBox');
    const imgBoxImg = imgBox.querySelector('img');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    function openLightbox(imageSrc) {
        imgBoxImg.src = imageSrc;
        galleryOverlay.classList.add('active');
        imgBox.classList.add('active');
    }

    function closeLightbox() {
        galleryOverlay.classList.remove('active');
        imgBox.classList.remove('active');
    }

    galleryItems.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(img.src);
        });
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    galleryOverlay.addEventListener('click', () => {
        closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
