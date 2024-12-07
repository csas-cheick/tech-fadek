// Liste des images d'arrière-plan
const backgroundImages = [
    "../images/hero-bg2.png",
    "images/hero-bg.jpg"
];

let currentBgIndex = 0;

// Fonction pour changer l'arrière-plan
function changeBackground() {
    const heroSection = document.querySelector(".hero-section");
    heroSection.style.backgroundImage = `url(${backgroundImages[currentBgIndex]})`;
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
}

// Changer l'arrière-plan toutes les 5 secondes
setInterval(changeBackground, 5000);
const sliderData = [
    {
        title: "Bienvenue chez TECH-FADEK",
        text: "Votre destination pour les produits et services technologiques.",
    },
    {
        title: "Explorez nos offres",
        text: "Des produits innovants pour tous vos besoins.",
    },
    {
        title: "Contactez notre équipe",
        text: "Nous sommes là pour vous accompagner.",
    },
];

let currentIndex = 0;

function updateSlider() {
    const sliderTitle = document.getElementById("slider-title");
    const sliderText = document.getElementById("slider-text");

    sliderTitle.textContent = sliderData[currentIndex].title;
    sliderText.textContent = sliderData[currentIndex].text;

    currentIndex = (currentIndex + 1) % sliderData.length;
}
setInterval(updateSlider, 3000);

