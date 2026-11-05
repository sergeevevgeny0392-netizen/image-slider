/* Логика слайдера — кейс-задача № 3 (ванильный JavaScript) */

const track = document.querySelector(".track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");
const dotsBox = document.getElementById("dots");

let current = 0;
const total = slides.length;

/* Создаём точки-индикаторы, по одной на каждый слайд */
slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("aria-label", `Перейти к изображению ${index + 1}`);
    dot.addEventListener("click", () => show(index));
    dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll(".dot");

/**
 * Показывает слайд с индексом index.
 * Зацикливание: (index + total) % total — после последнего слайда
 * снова показывается первый, перед первым — последний.
 */
function show(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    counter.textContent = `Изображение ${current + 1} из ${total}`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });
}

/* Слушатели событий для кнопок "вперёд" и "назад" */
nextBtn.addEventListener("click", () => show(current + 1));
prevBtn.addEventListener("click", () => show(current - 1));

/* Бонус: управление стрелками с клавиатуры */
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") show(current + 1);
    if (event.key === "ArrowLeft") show(current - 1);
});

show(0);
