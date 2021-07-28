'use strict';

let menu = document.querySelector('.menu'),
    list = document.querySelectorAll('.menu-item'),
    changeTitle = document.getElementById('title'),
    toAsk = document.querySelector('#prompt'),
    li = document.createElement('li');


//Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(list[2], list[1]);

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);
//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(/hometask5/img/apple_true.jpg)';
//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
changeTitle.innerHTML = 'Мы продаем только подлинную технику Apple';
//Удалить рекламу со страницы
document.querySelector('.adv').remove();
//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let Ask = prompt("Как Вы относитесь к технике apple?", '');
toAsk.textContent = Ask;