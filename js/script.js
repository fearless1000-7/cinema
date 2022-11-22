/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let backgroundImage = document.querySelector('.promo__bg')
let imgages = document.querySelectorAll('.promo__adv img')
imgages.forEach(img => {
    img.style.display = "none"
})
backgroundImage.style.background = `url("./img/bg.jpg")  no-repeat `
backgroundImage.style.width = "100%"
backgroundImage.style.height = "54%"
backgroundImage.style.backgroundSize = "contain"

let name = document.querySelector('.promo__genre')
name.innerHTML = 'ДРАМА'



