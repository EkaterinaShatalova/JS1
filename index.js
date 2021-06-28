/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

function get_random_color() 
{
    let color = "";
    for(let i = 0; i < 3; i++) {
        const sub = Math.floor(Math.random() * 256).toString(16);
        console.log(sub);
        color += (sub.length == 1 ? "0" + sub : sub);
        console.log(color);
    }
    return "#" + color;
}

const btn = document.getElementById('add');
const color = document.getElementById('color')

btn.addEventListener('click', ()=> {
    document.body.style.background = get_random_color();
    color.innerText = get_random_color();
});

