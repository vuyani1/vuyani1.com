const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = index;
    slides[currentSlide].style.display = 'block';

    // Redirect after last slide
    if (currentSlide === slides.length - 1) {
        setTimeout(() => {
            window.location.href = "https://vuyani1.github.io/home.html";
        }, 3000);
    }
}

function startSlideshow() {
    showSlide(currentSlide);

    const timings = [5000, 3000, 4000]; // Duration for each slide
    for (let i = 0; i < timings.length; i++) {
        setTimeout(() => {
            showSlide(i + 1);
        }, timings.slice(0, i + 1).reduce((a, b) => a + b, 0));
    }
}

document.body.addEventListener('click', () => {
    const jokes = [
        "Why was the snowman looking through the carrots? He was picking his nose!",
        "What do you call Santa when he stops moving? Santa Pause!",
        "What do snowmen eat for breakfast? Snowflakes!"
    ];
    alert(jokes[Math.floor(Math.random() * jokes.length)]);
});

startSlideshow();
