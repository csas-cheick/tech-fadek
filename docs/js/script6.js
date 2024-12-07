// Simulation du panier (vous pouvez remplacer par un stockage local ou dynamique)
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Afficher les articles du panier sur la page commande
function displayCart() {
    const cartSummary = document.getElementById("cart-summary");
    const cartTotal = document.getElementById("cart-total");

    cartSummary.innerHTML = ""; // Vider la liste actuelle
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        listItem.innerHTML = `
            ${item.title} - ${item.quantity} x ${item.price} FCFA
        `;
        cartSummary.appendChild(listItem);
    });

    cartTotal.innerText = total;
}

// Gérer la soumission de la commande
document.getElementById("commande-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre commande ! Nous vous contacterons bientôt.");
    localStorage.removeItem("cart"); // Vider le panier
    window.location.href = "../index.html"; // Retourner à l'accueil
});

// Charger les articles du panier au chargement
document.addEventListener("DOMContentLoaded", displayCart);
