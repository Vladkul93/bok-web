import "@babel/polyfill";
import './index.html';
import './index.scss';
import './constants/catalog.js';
// import 'bootstrap';
import 'mixitup';



import './components/Header/Header.js';
import './components/Products/Products.js';
import './components/Footer/Footer';
import './constants/root';

import './components/modal/modal';
import './components/Footer/Footer';



import modal from './components/modal/modal.html';

import footer from './components/Footer/footer.html';

import header from './components/Header/header.html';

document.getElementById("header").innerHTML = header;

document.getElementById("footer").innerHTML = footer;

document.getElementById("root").innerHTML = modal;


import { Products } from "./components/Products/Products.js";
import { render } from "sass";


    

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});

