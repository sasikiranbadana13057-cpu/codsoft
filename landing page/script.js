// Smooth Animation on Scroll

const cards = document.querySelectorAll('.feature-box, .course-card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// Initial Style

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
});