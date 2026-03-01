const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");
const lightboxImage = document.getElementById("lightboxImage");

const correctPassword = "DAVINCI"; 

submitButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        openLightbox();
    } else {
        alert("Incorrect password. Try again.");
    }
});

closeButton.addEventListener("click", closeLightbox);

function openLightbox() {
    lightbox.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

lightboxImage.addEventListener("click", closeLightbox);
