/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const DomElement = function (selector, height, width, bg, fontSize, innerText) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.innerText  = innerText;
};

DomElement.prototype.creator = function() {

    if(this.selector.startsWith('.') || this.selector.startsWith('#') ) {
        const elem = this.selector.startsWith('.') ? document.createElement('div') : document.createElement('p');
        this.selector.startsWith('.') ? elem.classList.add(this.selector.substr(1)): elem.id = this.selector.substr(1);
        elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
        elem.innerText = this.innerText;
        document.body.append(elem);
    }
};

//пример
const b2 = new DomElement('.input',  '30px', '300px', 'yellow', '25px', 'Привет');
const b3 = new DomElement('#input111', '30px', '300px', 'orange', '25px', 'Пока');

b2.creator();
b3.creator();


