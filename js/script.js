const container = document.querySelector('.container');
const slideRight = document.querySelector('.rightSlide');
const slideLeft = document.querySelector('.leftSlide');
const btnUp = document.querySelector('.btnUp');
const btnDown = document.querySelector('.btnDown');
const slideLength = slideLeft.querySelectorAll('div').length;

let slideIndex = 0;

slideLeft.style.top = `-${(slideLength-1)*100}vh`


btnUp.addEventListener('click', () => change('up'));
btnDown.addEventListener('click', () => change('down'));


const change = (direction) => {
    const slideHeight = container.clientHeight
    if (direction === 'up') {
        slideIndex++
        if (slideIndex > slideLength-1) {
            slideIndex = 0
        }
    } else if (direction === 'down') {
            slideIndex--
            if (slideIndex < 0) {
                slideIndex = slideLength - 1;
            }
    }
    slideRight.style.transform = `translateY(-${slideIndex*slideHeight}px)`
    slideLeft.style.transform = `translateY(${slideIndex*slideHeight}px)`
}