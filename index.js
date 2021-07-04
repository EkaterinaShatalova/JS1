/*jshint esversion: 8 */
/* jshint node: true */

let count = 0;
const img = document.querySelector('img');
const btn = document.querySelector('button');
let flyInterval;

const flyAnimate = function() {
    count++;
    flyInterval = requestAnimationFrame(flyAnimate);
    if (count * 3 < 1800) {
        img.style.left = count * 3 + 'px';
    }
    else {
        count = 0;
        img.style.left = count * 3 + 'px'
    }
};

let animate = false;
btn.addEventListener('click', () => {
    if(!animate) {
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = true;
        } 
    else {
        cancelAnimationFrame(flyInterval);
        animate = false;
    }
});

