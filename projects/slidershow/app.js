const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const maxlen = slides.length;
let currsli = 0;
btnRight.addEventListener('mouseover', function() {
    if (currsli === maxlen - 1) {
        currsli = 0;
    } else {
        currsli++;
    }
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-currsli)}%)`);
});
btnLeft.addEventListener('mouseover', function() {
    if (currsli === 0) {
        currsli = maxlen - 1;
    } else {
        currsli--;
    }
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-currsli)}%)`);
})