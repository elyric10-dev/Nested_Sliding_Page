const slide_pages = document.querySelectorAll('.page');
const swipe_pages = document.querySelectorAll('.swipe_page');

const movement_value = 100;

let slide_result = 0;
let swipe_result = 0;

slide = (direction) => {
    (direction === 'next') ? slide_result -= movement_value: slide_result += movement_value;
    (direction === 'home') ? slide_result = 0: slide_result = slide_result;

    slide_pages.forEach(
        (item) => item.style.transform = `translateX(${slide_result}%)`
    );
}

swipe = (direction) => {
    (direction === 'up') ? swipe_result -= movement_value: swipe_result += movement_value;
    (swipe_result === 100 && direction === 'down') ? swipe_result = 0: swipe_result = swipe_result;
    (swipe_result === -400) ? swipe_result = 0: swipe_result = swipe_result;

    swipe_pages.forEach(
        (item) => item.style.transform = `translateY(${swipe_result}vh)`
    );
}