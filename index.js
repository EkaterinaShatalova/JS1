/*jshint esversion: 8 */
/* jshint node: true */

let count = 0;
const img = document.querySelector('img');
const btnGo = document.querySelector('#btn1');
const btnReset = document.querySelector('#btn2');
let flyInterval;

const flyAnimate = function() {
    count++;
    flyInterval = requestAnimationFrame(flyAnimate);
    if (count * 3 < 1800) {
        img.style.left = count * 3 + 'px';
    }
    else {
        count = 0;
        img.style.left = count * 3 + 'px';
    }
};

let animate = false;
btnGo.addEventListener('click', () => {
    if(!animate) {
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = true;
        } 
    else {
        cancelAnimationFrame(flyInterval);
        animate = false;
    }
});

btnReset.addEventListener('click', () => {
    img.style.left = 0;
});
