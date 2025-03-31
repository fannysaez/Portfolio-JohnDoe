//Script Lightbox (image en grand) lors du clique
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".gallery-item img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.classList.add("active");
            lightboxImg.src = this.src;
        });
    });

    // Ferme la lightbox au clic
    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});
