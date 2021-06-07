/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const num = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const bot1 = function() {
    const task = num(1,100);
    let attempt = 10;
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
            attempt -= 1;
            if (attempt === 0) {
                let losing = confirm('Попытки закончились, хотите сыграть еще?');
                if (losing) {
                    bot1();                   
                }
                else {
                    alert('Спасибо за участие!');
                }
            }
            else {
                alert(`Загаданное число больше, осталось попыток: ${attempt}`);
                bot();
            }
        }
        else if  (result > task ) {
            attempt -= 1;
            if (attempt === 0) {
                let losing = confirm('Попытки закончились, хотите сыграть еще?');
                if (losing) {
                    bot1();                   
                }
                else {
                    alert('Спасибо за участие!');
                }
            }
            else {
                alert(`Загаданное число меньше, осталось попыток: ${attempt}`);
                bot();
            }
        }
        else if (result == task) {
            let result1 = confirm('Поздравляю, вы угадали! Хотели бы сыграть еще?');
            if (result1) {
                bot1();
            }
            else {alert('Спасибо за участие!');
            }           
        }
        else {
            alert('Что-то не так :(');
        }       
    }
    bot();
    console.dir(bot); //см замыкание
};

bot1();
