/*jshint esversion: 8 */
/* jshint node: true */

'use strict';

const randomColor = function () {
    let color = "";
    for(let i = 0; i < 3; i++) {
        const a = Math.floor(Math.random() * 256).toString(16);
        color += (a.length == 1 ? "0" + a : a);
    }
    return "#" + color;
};

const btn = document.getElementById('add');
const color = document.getElementById('color');

btn.addEventListener('click', ()=> {
    document.body.style.background = randomColor();
    color.innerText = randomColor();
});

