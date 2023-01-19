const cards = document.querySelectorAll(".cards_2 .card");

cards.forEach((card) => {
    card.addEventListener('mouseenter', fadeCards);
    card.addEventListener('mouseleave', backToNormal);
});

function fadeCards() {
    for (let card of cards) {
        card.style.opacity = 0.5;
    }
}

function backToNormal() {
    for (let card of cards) {
        card.style.opacity = 1;
    }
}
