/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();

week.forEach(function(item) {
    if (item === 'Суббота' || item === 'Воскресенье' ) {
        if (date.toLocaleString('ru', {weekday: 'long'}) === item.toLowerCase()) {
            console.log(`%c${item}`, 'font-weight: bold; font-style: italic');
        }
        else {
            console.log(`%c${item}`, 'font-style: italic');
        }}
    else {
        if(date.toLocaleString('ru', {weekday: 'long'}) === item.toLowerCase()) {
            console.log(`%c${item}`, 'font-weight: bold');
        }
        else {
            console.log(item);
        }
    }
}
);



    


