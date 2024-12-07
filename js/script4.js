document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi par défaut

        // Récupérer les valeurs des champs
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Valider les champs
        if (!fullName || !email || !subject || !message) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide !");
            return;
        }

        // Afficher un message de succès
        alert(`Merci ${fullName} ! Votre message a été envoyé avec succès.`);
        form.reset(); // Réinitialiser le formulaire
    });

    // Fonction pour valider les emails
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
});
