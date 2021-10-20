let btnStart = document.querySelector(".start")
let btnReset = document.querySelector(".reset")
let car1 = document.querySelector(".car1")
let car2 = document.querySelector(".car2")
let winner = document.querySelector(".winner")

btnStart.addEventListener("click", () => {
    let randNum1 = Math.floor(Math.random() * (450 - 400) + 400)
    let randNum2 = Math.floor(Math.random() * (450 - 400) + 400)

    car1.style.transform = `translateX(${randNum1}px)`;
    car2.style.transform = `translateX(${randNum2}px)`;

    setTimeout(() => {
        if(randNum1 > randNum2) {
            winner.innerText += "" + 'Car #1'
        } else {
            winner.innerText += "" + 'Car #2'
        }

    }, 1000)
})

btnReset.addEventListener('click', () => {
    winner.innerText = "Winner is:"
    car1.style.removeProperty('transform');
    car2.style.removeProperty('transform');
})

// Dom Selector native Js
// let h1 = document.getElementsByName('h1')
// console.log(h1);
// h1[0].style.color = "red";
// let p = document.getElementsByClassName("paragraph")
// console.log(p);
// // p[0].style.fontSize = "24px"
// for(const val of p){
//     val.style.fontSize = "24px"
//     val.style.fontWeight = 700
// }

// let firstSpan = document.getElementById("first-span")
// console.log(firstSpan);
// firstSpan.style.fontWeight = 700;

// let h1 = document.querySelector('h1');
// console.log(h1);
// h1.style.color = "green"
// let p = document.querySelectorAll('.paragraph')
// console.log(p);
// p.forEach(item => {
//     item.style.fontSize = "24px"
// })
// // let span = document.querySelector("#first-span")
// let span = document.querySelector(".paragraph span")
// span.style.background = "lightblue"

// let p = document.querySelector('.paragraph')
// // p.classList.toggle('paragraph')
// // p.classList.toggle('paragraph')
// p.classList.add("text")
// // p.classList.remove("paragraph")
// p.classList.replace("paragraph", "para")
// console.log(p.classList.value);

// let div = document.querySelector('div')
// let btn = document.createElement('button')
// btn.innerText = "SAVE"
// console.log(btn);
// div.append(btn)

// let lastP = document.getElementById('last-p')
// let text = lastP.innerText
// // lastP.innerText += " coding is easy"
// lastP.innerHTML += '<strong>coding is easy</strong>'

// let strong = document.querySelector("strong")
// console.log(strong);

// let allTags = document.querySelectorAll("*")
// console.log(allTags);

// let tagsAByGet = document.getElementsByTagName("a")
// let tagsByQuery = document.querySelectorAll("a")
// let a = document.createElement("a")
// document.body.append(a)
// console.log(tagsAByGet);
// console.log(tagsByQuery);

// let listItem = document.querySelectorAll('li')
// let listItemTag = listItem[0].outerHTML;
// console.log(listItemTag);
// listItem.forEach((item, index) => {
// if (index % 2 === 0) {
//         item.style.backgroundColor = 'pink'
//     }
// })

// let h3 = document.querySelector("h3")
// h3.outerHTML = `<h4>${h3.innerText}</h4>`

// let pTags = document.querySelectorAll('p')
// pTags.forEach((item) => {
//    item.querySelectorAll.toggle("second-title") 
// });

// let h2 = document.querySelector('h2')
// let res = h2.hasAttribute('class')
// h2.setAttribute("class", "h2-title") // сам аргумент, и его значение
// h2.removeAttribute("class")
// h2.removeAttribute("id")
// console.log(res);

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.
let h3 = document.querySelectorAll('h3');
h3.forEach((item) => {
    item.innerText = '!!!';
});

// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.

h3.forEach((item) => {
    item.style.color = 'green';
});

// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

let hz = document.createElement('ul');
//let list = document.getElementsByTagName('ul');
document.body.appendChild(hz);
let list = document.getElementsByTagName('ul');

for (let i = 1; i <= 30; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = `${i} - овечка`;
    list[0].append(listItem);
}

// Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.
let container = document.querySelector('.container');
for (let i = 0; i < 4; i++) {
    let span = document.createElement('span');
    span.innerText = 'hzhz';
    container.append(span);
    span.classList.add('active');
}


// 1) Найдите все HTML-теги strong и окрасьте их в зеленый цвет.
let strong = document.querySelectorAll('strong');
strong.forEach((item) => {
    item.style.color = 'green';
});

//2) Найдите все HTML-теги em и добавьте им класс .selected .
let em = document.querySelectorAll('em');
em.forEach((item) => {
    item.classList.add('.selected');
});

//3) Найдите все HTML-теги mark, которые находятся в div с классом .row и задайте им
// класс .selected .
let mark = document.querySelectorAll('div.row mark');
mark.forEach((item) => {
    item.classList.add('.selected');
});

//4) Найдите все гиперссылки и удалите у них подчеркивания.
// let a = document.querySelectorAll('a');
// a.forEach((item) => {
//   item.style.textDecoration = 'none';
// });

//5) Переключите HTML-теги strong с классом .some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.
// let strong = document.querySelectorAll('.some strong');
// strong.classList.toggle('strongs');
// console.log(strong);

let p = document.querySelectorAll('strong');
p.forEach((item) => {
    item.classList.toggle('some');
});

//6) Среди набора элементов с классом .row, удалите этот класс у второго элемента.
let roww = document.getElementsByClassName('row');
roww[1].classList.remove('row');

//7) Выведите CSS-свойство color у второй гиперсылки в тексте(при помощи метода getComputedStyle())
let a = document.getElementsByTagName('a');
let a1 = getComputedStyle(a[0]);
console.log(a1.color);

//8) Задайте третьему row дополнительный класс .third.
let classRow = document.querySelectorAll('.third');
classRow.forEach((item) => {
    item.classList.add('.third');
});

//9) Обратитесь к элементу с классом .row-inner и задайте ему цвет текста розовый.
let pink = document.querySelectorAll('.row-inner');
pink[0].style.color = 'pink';

//10) Добавтье элемент input type="text" с классом .input внутри div с классом .row-input.
let diiv = document.querySelectorAll('div .row-input');
diiv[0].innerHTML += '<input type="text" class="input">';

//11) Сделайте фон желтым у нового элемента input.
let input2 = document.querySelectorAll('input');
input2[0].style.background = 'yellow';

//12) Добавтье placholder этому элементу input с классом .input.
input2[0].placeholder = 'enter text';

//13) Обратитесь к элементу с классом .row-outer и задайте ему размер шрифта 20px.
let size = document.querySelectorAll('.row-outer');
size[0].style.fontSize = '20px';

//14) Обратитесь к элементу с классом .last и добавьте ему текст "Last but not least".
let lasti = document.querySelector('.last');
let text = lasti.innerText;
lasti.innerText += 'Last but not least';

//15) Сделайте последний текст, который вы добавили, жирным.
// lasti[0].style.fontWeigth = '700'
// Задание #1
// Создайте обработчик события, который при нажатии на кнопку будет менять цвет фона страницы.

let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    document.body.style.background = "green"
})

// Задание #2
// Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение и не
// отправляйте форму.

// let btn1 = document.querySelector('#btn1');
// let inp = document.querySelector('#inp');
// inp.addEventListener('change', function (event) {
//   if (!inp.value) {
//     console.log('Empty string');
//   } else {
//     console.log(inp.value);
//   }
// });

// Задание #3
// Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо)
// анимированно сдвигает элемент влево или вправо на 100px.

// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById("btn4")
// let div = document.getElementsByClassName(".divchik")
// btn3.addEventListener('click', () => {
//   btn3.style = '100px';
// });
// let kvadrat = document.querySelector('kvadrat');
// let a = 0;
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'ArrowRight') {
//     kvadrat.style.transform = `translateX(${(a += 100)}px)`;
//   } else if (e.key === 'ArrowLeft') {
//     kvadrat.style.transform = `translateX(${(a -= 100)}px)`;
//   }
// });
// Задание #4
// Навесьте на событие движения мыши обработчик, который будет выводить в консоль
// координаты движения. Примечание: выводите их как x и y.
// Событие надо «повесить» на document

// document.addEventListener('mousemove', (event) => {
//   console.log(`X=${event.offsetX},Y=${event.offsetY}`);
// });

// Задание #5
// Создайте обработчик события, который при нажатии на div элемент выводит через
// alert() id либо class вашего элемента

// let div = document.getElementById('app');
// let btn9 = document.getElementById('btn');
// btn9.addEventListener('click', (e) => {
//   alert(`id of button is: ${e.target.id}`);
// });

// Задание №6
// Создайте две кнопки в HTML - "увеличить" и "уменьшить". В JS файле создайте
// глобальную переменную counter. Навесьте на ваши кнопки обработчики событий, которые
// увеличивают, либо уменьшают ваш counter на одну единицу при нажатии на
// соответствующую кнопку.

// let count = 0;
// let add = document.getElementById('btn5');
// let minus = document.getElementById('btn6');
// add.addEventListener('click', () => {
//   count = count + 1;
//   console.log(count);
// });
// minus.addEventListener('click', () => {
//   count = count - 2;
//   console.log(count);
// });

// Задание №7
// Создайте в HTML параграф с текстом. В JS файле напишите обработчик
// события, который при нажатии на текст, выводит количество букв и пробелов
// в вашем тексте.

// let p = document.getElementById('p');
// p.addEventListener('click', () => {
//   let regexp1 = /\w/gi;
//   let regexp2 = /\s+/g;
//   let result = p.innerHTML.match(regexp1);
//   console.log(result.length);
//   let res = p.innerHTML.match(regexp2);
//   console.log(res.length);
// });

// console.log(p.innerHTML);

// Задание №8
// Создайте в HTML button. Навесьте на этот элемент обработчик события, который
// при нажатии на кнопку удаляет эту кнопку.

// let btn7 = document.querySelector('#btn7');
// btn7.addEventListener('click', (e) => {
//   btn7.remove();
// });

// let btn8 = document.querySelector('#btn8')
// btn8.addEventListener('click', (e) => {
//   btn8.remove()
// })

// Задание #9
// Создайте модальное окно по аналогии с компонентом Bootstrap:
// http://getbootstrap.com/javascript/#modals

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// document.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// Задание №10
// Создайте кнопку и нумерованный список с 6 li элементами в HTML. Навесьте на кнопку
// обработчик события, который при нажатии проходится циклом по элементам списка и меняет
// их цвет на зеленый.

// let color = document.getElementById('btn11');
// let li = document.getElementsByClassName('item_1');
// color.addEventListener('click', () => {
//   for (let i = 0; i < 6; i++) {
//     document.body.style.color = 'green';
//   }
// });


// Задание №1
// 	Создайте функцию которая находит все
// ссылки в html и менят их атрибут href
// на "https://makers.kg/"(через jQuery)

let href = $('a');
href.attr('href', 'https://makers.kg/');

// Задание №2
// Узнайте ширину и высоту первого, второго и третьего дивов <div> (по очереди) непосредственно внутри #wrapper без учета padding и границы.
// (для начала создайте div с id = wrapper,  и внутри неё ещё 3 дива с разными размерами и паддингами)

$('#wrapper')
    .children()
    .each(function () {
        let width = $(this).width();
        let height = $(this).height();
        console.log(`Ширина: ${width}px Высота: ${height}px`);
    });

// Задание №3
// То же самое, что во 2 задании, но только с учетом padding

$('#wrapper')
    .children()
    .each(function () {
        let width = $(this).innerWidth();
        let height = $(this).innerHeight();
        console.log(`Ширина: ${width}px Высота: ${height}px`);
    });

// Задание №4
// То же самое, что во 2 задании, но только с учетом padding и границы

$('#wrapper')
    .children()
    .each(function () {
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        console.log(`Ширина: ${width}px Высота: ${height}px`);
    });

// 1) Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание:
// попробуйте подключение с разных CDN-хранилищ, и при помощи локального файла.

// В HTMLке подключили через CDN, через локальный способ не получился,он завис

// Выберите при помощи селекторов jQuery:

// 2) все HTML-элементы strong и окрасьте их в зеленый цвет
// 1-способ
// let title = $('strong');
// title.css('color', 'green')

// 2-способ
$('strong').css('color', 'green');

// 3) найдите все HTML-элементы em и добавьте им класс .selected
// let em = document.querySelectorAll('em');

let em = $('em');
em.addClass('.selected');

// 4) Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected

let mark = $('div.row mark');
mark.addClass('.selected');

// 5) Найдите все гиперссылки и удалите у них подчеркивания
// решение

let a = $('a');
$('a').removeAttr('href');

// 6) Переключите элементы strong с классом some в состояние без этого класса, а

let p = $('strong');
p.toggle('some');

// 7) среди набора элементов с классом .row удалите класс у второго элемента

let row = $('.row:eq(1)');
row.removeClass();

// 8) выведите CSS-свойство color у второй гиперсылки в тексте

console.log($('a').eq(1).css('color'));

// 9) выберите все элементы из HTML документа. Используйте All Selector

let allElems = $('*');
console.log(allElems);

// 10) с помощью специального селектора jquery выберите элемент со свойством disabled и удалите её свойство disabled

let disabledInput = $('input').prop('disabled', false);

// 11)  Поменяйте всем <li> на странице их текст на их порядковый номер. (each)

let liTags = $('li');
liTags.each((index, element) => {
    $(element) + index;
    $(element).text(index);
});

// 12) Все <h2> НЕ с классом test покрасить на желтый цвет
// решение

let h2 = $('h2:not(.test)');
h2.css('color', 'yellow');

// 13) Получите содержимое атрибута src картинки по ее id, равным www.

let src = $('#www').attr('src');
console.log(src);

// 14) Сделайте неотмеченным первый чекбокс на странице.
// решение

$('input[type="checkbox"]:first').prop('checked', true);

// 15) Добавьте всем li класс www, если его нет, и удалите, если есть

// 1 способ
// let li = $('li');
// li.addClass('www');

// 2 способ
let li = $('li');
li.toggleClass('www');


// Задание 1
// Поменяйте всем тэгам <div> цвет на черный
$('div').css('background', 'black');

// Задание 2
// Создайте 5 тэгов <div> и выведите в консоль количество созданных тэгов

let tag = $('div').length;
console.log(tag);

// Задание #3
//  Создайте обработчик нажатия на кнопку, который будет менять цвет фона страницы.

let btn = $('#btn');
btn.on('click', function () {
    $('body').css('background-color', 'blue');
});

// Задание #4
//  Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение и не
// отправляйте форму.

let btn1 = $('#btn1');
let inp = $('#inp');
inp.on('change', function (event) {
    if (!inp.val()) {
        console.log('Empty string');
    } else {
        console.log(inp.val());
    }
});

// Задание #5
//  Создайте обработчик события на нажатие кнопок направлений (влево, вправо) так,
// чтобы HTML-элемент при однократном нажатии на кнопку анимированно сдвигался
// влево или вправо на 100px

let div = $('.kvadrat');
let leftBTN = $('.btn3');
let rightBTN = $('.btn4');
leftBTN.on('click', () => {
    $(div).css('margin-right', '100px');
});
rightBTN.on('click', () => {
    $(div).css('margin-left', '100px');
});

// Задание #6
//  Навесьте на событие движения мыши обработчик, который будет в консоль
// выводить координаты движения. Примечание: выводите их как x и y. Событие надо
// «повесить» на document
// Категория ГУГЛ в помощь(бонусные таски):

$('document').mousemove(function (event) {
    console.log(`X=${event.offsetX},Y=${event.offsetY}`);
});

// Задание #7
//  Создайте модальное окно по аналогии с компонентом Bootstrap:
// http://getbootstrap.com/javascript/#modals

let btnShowModal = $('.show-modal');
let btnCloseModal = $('.my-modal button');
let modal = $('.modal');
let myModal = $('.my-modal');
function showModal() {
    modal.fadeIn(1000).css('display', 'flex');
}

function closeModal() {
    modal.fadeOut(1000);
}
btnShowModal.on('click', showModal);
btnShowModal.on('click', closeModal);

modal.on('click', (e) => {
    let h3 = $('.my-modal h3');
    let p = $('.my-modal p');
    if (e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
        closeModal();
    }
});

// Задание #8
// * Создайте эффект перетаскивания HTML-элементов с классом .drag. Примечание
// к задаче: напишите обработчики событий mousedown, mouseup и mousemove

// Задание #9
// *Создайте эффект голосования,
// подобно тем, что есть в социальных сетях.

$(document).ready(function () {
    $('#container div a').click(function () {
        $(this).parent().animate(
            {
                width: '100px',
            },
            500
        );
        $(this)
            .prev()
            .html(parseInt($(this).prev().html()) + 1);
        return false;
    });
});

// Задание №1
// 	После полной загрузки страницы выведите в
// консоль: “DOCUMENT READY!”

$(document).ready(function () {
    console.log('DOCUMENT READY!');
});

// Задание №2
// Вставьте картинку и кнопку в html.
// При нажатии на кнопку скройте картинку
// путем затухания до прозрачного состояния.

let img = $('img');
let btnFadeOut = $('#btn-out');

btnFadeOut.on('click', () => {
    img.fadeOut(1000);
});

// Задание №3
// Создайте h1 с классом "output-text"
// Создайте input type="text"
// с классом "input-text".
// При каждом изменении ".input-text"
// меняйте содержимое ".output-text"
// на значение из ".input-text".

let h1 = $('h1');
let inp = $('input');
inp.on('input', () => {
    h1.text(inp.val());
});
// Задание 4
// Измените цвет текста когда курсор мыши будет наведен на элемент а, когда курсор мыши будет выведен из границ элемента текст становится черным цветом

h1.on('mousemove', () => {
    h1.css('color', 'violet');
});
h1.on('mouseleave', () => {
    h1.css('color', 'black');
});

// Задание 5
// Найдите все HTML-элементы, который содержат слово «Задания» и находятся в элементе с классом .container

$('.zadacha').css('color', 'blue');


// Задание №1
// Создайте в LocalStorage пустой объект localData, с ним в дальнейшем и будем работать
// После этого создайте объект со стилями и положите его в LocalStorage, затем получите его обратно и примените эти стили к "body"

localStorage.setItem('localData', JSON.stringify({}));
let object = {
    backgroundColor: 'lightgreen',
    margin: 0,
    color: 'black',
};
let obj1 = {};

$('document').ready(function () {
    obj1['style'] = object;
    localStorage.setItem('localData', JSON.stringify(obj1));
    $('body').css(JSON.parse(localStorage.getItem('localData')).style);
});

// Задание №2
// Сделайте форму, при submit'е которой, в LocalStorage, в объекте localData создаётся новый объект с ключом и информацией из вашей формы:
// пример нового объекта:
// {
//   key: data
// }
// где key - это value из первого input'а, а data - из второго

$('.btnForm').on('click', function (e) {
    e.preventDefault();
    let obj = {};
    obj[$('.inp-first').val()] = $('.inp-second').val();

    localStorage.setItem('localData', JSON.stringify(obj));
    $('.inp-first').val('');
    $('.inp-second').val('');
});

// Задание №3
// Теперь добавьте input и кнопку , при клике на которую - в LocalStorage, в объекте localData будет удаляться значение под ключом input
// Также добавьте кнопку, которая будет удалять весь объект localData из LocalStorage

$('.btn1').click(function (e) {
    let key = $('.input-del').val();
    let third = window.localStorage.getItem('localData');
    third = JSON.parse(third);
    delete third[key];
    localStorage.setItem('localData', JSON.stringify(third));
    $('.input-del').val('');
    alert('data deleted');
});

$('.btn2').click(function (e) {
    localStorage.setItem('localData', JSON.stringify({}));
    alert('All cleared');
});
