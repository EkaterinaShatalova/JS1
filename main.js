/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();

// week.forEach(function(item) {
//     if (item === 'Суббота' || item === 'Воскресенье' ) {
//         if (date.toLocaleString('ru', {weekday: 'long'}) === item.toLowerCase()) {
//             console.log(`%c${item}`, 'font-weight: bold; font-style: italic');
//         }
//         else {
//             console.log(`%c${item}`, 'font-style: italic');
//         }}
//     else {
//         if(date.toLocaleString('ru', {weekday: 'long'}) === item.toLowerCase()) {
//             console.log(`%c${item}`, 'font-weight: bold');
//         }
//         else {
//             console.log(item);
//         }
//     }
// }
// );
const a = ['02', '03', '04', '22', '23']

const timeEnding = function() {
    let ending;
    if(a.includes(date.toLocaleString('ru', {hour: 'numeric'})) ) {
        ending = 'часа';
    } else if (date.toLocaleString('ru', {hour: 'numeric'}) == '01' || date.toLocaleString('ru', {hour: 'numeric'}) == '21' ) {
        ending = 'час';
    } else {
        ending = 'часов';
    }
    return ending;
};

const zeroBegin = function(elem) {
    let begin;
    if (elem == elem[0]) {
        begin = '0';
    } else {
        begin = '';
    }
    return begin+elem;
    
};


const timerId = function() {
    setInterval(function() {
    document.body.innerText = '';

    let time1 = document.createElement('p');
    time1.innerText = 'Сегодня ' + date.toLocaleString('ru', {weekday: 'long'}).toUpperCase()[0] + date.toLocaleString('ru', {weekday: 'long'}).toLowerCase().substr(1) +', '+ 
    date.toLocaleString('ru', {day: 'numeric'}) + ' ' +
    date.toLocaleString('ru', {month: 'long'}) + ' ' + date.toLocaleString('ru', {year: 'numeric'}) + ' года, ' + 
    date.toLocaleString('ru', {hour: 'numeric'}) + ' ' +timeEnding() + ' '+ date.toLocaleString('ru', {minute: 'numeric'}) + ' минут ' +
    date.toLocaleString('ru', {second: 'numeric'}) + ' секунд';

    document.body.append(time1);
    console.log(time1);

    // const time2 = document.createElement('p');
    // time2.innerText = zeroBegin(date.toLocaleString('ru', {day: '2-digit'})) + '.' +
    // zeroBegin(date.toLocaleString('ru', {month: '2-digit'})) + '.' + date.toLocaleString('ru', {year: 'numeric'}) + ' - ' + 
    // zeroBegin(date.toLocaleString('ru', {hour: '2-digit'})) + ':'+ zeroBegin(date.toLocaleString('ru', {minute: '2-digit'})) + ':' + 
    // zeroBegin(date.toLocaleString('ru', {second: '2-digit'}));
    // document.body.append(time2);
    // console.log(time2);

// console.log('Сегодня ' + date.toLocaleString('ru', {weekday: 'long'}).toUpperCase()[0] + date.toLocaleString('ru', {weekday: 'long'}).toLowerCase().substr(1) +', '+ 
// date.toLocaleString('ru', {day: 'numeric'}) + ' ' +
// date.toLocaleString('ru', {month: 'long'}) + ' ' + date.toLocaleString('ru', {year: 'numeric'}) + ' года, ' + 
// date.toLocaleString('ru', {hour: 'numeric'}) + ' ' +timeEnding() + ' '+ date.toLocaleString('ru', {minute: 'numeric'}) + ' минут ' +
// date.toLocaleString('ru', {second: 'numeric'}) + ' секунд' );

// console.log(zeroBegin(date.toLocaleString('ru', {day: '2-digit'})) + '.' +
// zeroBegin(date.toLocaleString('ru', {month: '2-digit'})) + '.' + date.toLocaleString('ru', {year: 'numeric'}) + ' - ' + 
// zeroBegin(date.toLocaleString('ru', {hour: '2-digit'})) + ':'+ zeroBegin(date.toLocaleString('ru', {minute: '2-digit'})) + ':' + 
// zeroBegin(date.toLocaleString('ru', {second: '2-digit'})));
}, 5000);
};

timerId();



