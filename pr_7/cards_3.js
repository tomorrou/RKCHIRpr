const cards_3 = document.querySelectorAll(".cards_3 .card");

cards_3.forEach((card) => {
    card.addEventListener('mouseenter', fadeCards);
    card.addEventListener('mouseleave', backToNormal);
});

function fadeCards() {
    for (let card of cards_3) {
        console.log('nya');
        card.style.filter = "blur(5px)";
    }
}

function backToNormal() {
    for (let card of cards_3) {
        card.style.filter = "none";
    }
}
