/*jshint esversion: 8 */
/* jshint node: true */
'use strict';


let num = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let bot1 = function() {
    let task = num(1,100);
    console.log(task);  //см число
    function bot() {
        let result = prompt('Угадай число от 1 до 100');
        if (result === null) {
            alert('Game over!');
        } 
        else if ( isNaN(parseFloat(result)) || !isFinite(result) || result < 1 || result > 100 || (parseFloat(result) !== parseInt(result))) {
            alert('Введите число от 1 до 100!!');
            bot();
        }
        else if  (result < task ) {
            alert('Загаданное число больше');
            bot();
        }
        else if  (result > task ) {
            alert('Загаданное число меньше');
            bot();
        }
        else {
            alert('Поздравляю, вы угадали!');
        }
    }  
    bot(); 
    console.dir(bot); //см замыкание    
};

bot1();
