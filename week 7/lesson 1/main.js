//! Синхронность и асинхронность, Promise, запросы

//! setTimeout позволяет вызвать функцию 
// !только один раз через опреденное время
// setTimeout(() => {
//     console.log('Zero');
// },0);
// console.log('first');
// console.log('second');
// console.log('third');

//! setInterval позволяет вызвать функцию регулярно,
//! через определенный интервал времени
// let id = setInterval(() => {
//     console.log('HI');
// },3000)
// setTimeout(() => {
//     clearInterval(id)
// }, 5000)

//! Promise - это объект, у которого есть три состояния: 
//!pending- ожидание
//! fulfilled - успешно выполнено (resolve)
//! rejected - выполнено с ошибкой
//! Методы promise:
//! then - отловить успешный результат
//! catch - отловить результат с ошибкой
//! finally - отловить вне зависимости результата
// const promise= new Promise((resolve, rejected) => {
//     let age = prompt('Enter age')
//     if(age > 25) {
//         resolve('true')
//     }else {
//         rejected('false')
//     }
// })

// promise
// .then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Итог");
// })

//! Запросы 

// ! XMLHttpRequest
// let xhr = new XMLHttpRequest()
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon")
// xhr.send();
// xhr.onload = function () {
//     let response =JSON.parse(xhr.response)
//     console.log(response);
// }

// ! Fetch

//? Статусы:
//! 200-299 успешно
//! 400 ошибка на фронте
//! 403 нету доступа
//! 404 не найдено
//! 500 ошибка на сервере

// let API ="https://pokeapi.co/api/v2/pokemon"
// fetch(API)
// .then((response)=> response.json())
// .then((data) => {
//     console.log(data);
// })


let tbody = $('tbody')
let prev = $('.prev')
let next = $('.next')
let preloader = $(".preloader")
let API = "https://swapi.dev/api/people"

function render (url) {
    preloader.css("display", "flex")
    fetch(url)
    .then((res) => res.json ())
        .then((data) => {
            console.log(data);
            preloader.css('display', "none")
            tbody.html("")
            data.results.forEach((item) => {
                tbody.append(`
                <tr>
                <td>${item.name}</td>
                <td>${item.eye_color}</td>
                <td>${item.mass}</td>
                <td>${item.height}</td>
                </tr>
                `)
            });
            if(!data.previous){
                prev.addClass('disabled')
            }else {
                prev.removeClass('disabled')
                prev.attr('id', data.previous)
            }
            if(!data.next) {
                next.addClass('disabled')
            } else {
                next.removeClass('disabled')
                next.attr('id', data.next)
            }
        })
    }
    next.on('click', (e) => {
        let url = e.currentTarget.id;
        render(url)
    })
    prev.on("click", (e) => {
        let url = e.currentTarget.id
        render(url)
    })
render(API); 