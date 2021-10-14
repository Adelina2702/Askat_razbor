// console.log(typeof document.getElementById('title'));
// let title = document.getElementById('title')
// let list = document.getElementsByTagName('ul')
// let items = document.getElementsByClassName('item')
// let inp = document.getElementsByName('inp=name')
// console.log(inp);
// console.log(list);

// let title = document.querySelector("#title")
// let list = document.querySelectorAll('ul')
// let items = document.querySelectorAll('item')
// let inp = document.querySelectorAll('[name = "inp-name]')
// console.log(inp);
// console.log(list);

// let items = document.getElementsByClassName('item')
// // console.log(items);
// let items2 = document.querySelectorAll('.item')
// // console.log(items2);
// // let list = document.getElementsByTagName('ul')
// // list[0].innerHtml += '<li class='item'>New Elem</li>'
// // console.log(list)
// for(let i = 0; i < items.length;i++){
//     console.log(items[i]);
// }


// let example = document.getElementById('hello')
// // console.log(example.innerText);
// example.innerText = 'New Data'
// console.log(example.innerText);


// let h2s = document.querySelectorAll("h2")
// // console.log(h2s);
// h2s.forEach(item => {
//     item.innerText = 'Hello World'
// })

// let items = document.querySelectorAll('.item')
// console.log(items);
// items.forEach((item, index) => {
//     // item.innerHTML = `${item.innerHTML} ${index + 1}`
//     // item.style.color = "red";
//     // item.style.backgroundColor = "green"
//     if(index % 2 !== 0){
//         item.style.backgroundColor = 'pink'
//     }
// })

// Содание элемента
// let newElem = document.createElement('div')
// newElem.innerHTML = "<span>I am an new element</span>"

// // добавление элемента
// let container = document.querySelector('.container')
// // console.log(container);
// container[0].appendChild(newElem)
// newElem.style.color = "brown"
// newElem.style.fontSize = "25px"


// удаление элемента
// container [0].removeChild(elem 2)

// let date = new Date ().getHours()
// console.log(date);
// if(date > 10){
//     document.body.classList.add('theme-dark')
// }else {
//     document.body.classList.add("theme-ligth")
// }


// let res = prompt('Enter your name:')
// let title = document.getElementById('title')
// title.innerText = `${title.innerText}, ${res}`



//СОБЫТИЕ NATIVE JS
// let btn = document.getElementById('btn')
// btn.addEventListener('click', handler)
// btn.addEventListener('click', handler2)

// function handler (){
//     alert('Thank you!')
// }

// function handler2(){
//     alert('Thank you again!')
// }

// btn.removeEventListener('click', handler)

// let h1 = document.querySelector('h1')
// let inp = document.querySelector("#inp")
// inp.addEventListener('change', function(event){
//     // console.log(event.target.value);
//     h1.innerText = event.target.value
//     event.target.value = ""
// })
// console.log(h1, inp);

// inp.addEventListener('change', function (event) {
//     // console.log(event.target.value);
//     h1.innerText = event.target.value
//     console.log(event);
//     })


// let btn = document.querySelector('#btn')
// let inp = document.querySelector('#btn')
// let container = document.querySelector('#container')

// let addElemToContainer = function () {
//     // console.log(inp.value);
//     let newElem = document.createElement('div')
//     if(!inp.value) return
//     newElem.innerText = inp.value
//     container.append(newElem)
//     inp.value = ''
// }

// btn.addEventListener('click', addElemToContainer)
// inp.addEventListener('change', handler)

// document.addEventListener('mousemove', function () {
//     console.log(("mouse"));
// })

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Loaded');
// })


// // taski
// //  ! Добавтье placholder этому элементу input с классом.input.
// let input = document.querySelectorAll("input")
// input[0].placeholder = "Enter word"






// let title = $("h1")
// let welcome = $('.welcome')
// let titleById = $('title')
// let inp = $('[name="inp-name]')
// console.log(title, welcome, titleById,inp);
// titleById.style.color = "red"

// title.css('color', 'green')
// welcome.css('background-color', "yellow")

// welcome.classList.add('example')
// welcome.addClass('example1')
// welcome.hasClass('welcome')
// // console.log(welcome.hasClass('welcome'));
// welcome.removeClass('example1')


//append(), appendChild(), prepend()
// titleById.append('World')
// titleById.prepend('World'

// title.prependTo(titleById)

// $('.center').before('<h3 class="new">New Element 1</h3>')

// $('.center').after('<h3 class="new">New Element 2</h3>')

// let result = confirm('Are you 18 y.o.?')
// if(result){
//     $('h1').css('display', "block")
// }


// $('p').empty()
// $('p').remove()

// $('body').html('<h1>hello makers bootcamp</h1>')
// $('body').after('<div class="container"></div>')

// let clonedElem = $('body').clone()
// // console.log(clonedElem);
// clonedElem[0].children[0].innerText = "Modified"
// // console.log(clonedElem);
// $('.container').append(clonedElem)



// let num1 = +prompt('Enter first number')
// let num2 = +prompt('Enter second number')
// let result = num1+ num2
// $("body").html(`<h1>$(result}</h1>`)


// function sum(){
    // let num1 = +prompt('Enter first number')
// let num2 = +prompt('Enter second number')
// let result = num1 - num2
// $("body").html(`<h1>${result}</h1>`)
// }


// function sum() {
    //     let num1 = +prompt('Enter first number')
//     let num2 = +prompt('Enter second number')
//     let result = num1 + num2
//     $("body").html(`<h1>${result}</h1>`)
// }



// function mul() {
    //     let num1 = +prompt('Enter first number')
//     let num2 = +prompt('Enter second number')
//     let result = num1 * num2
//     $("body").html(`<h1>${result}</h1>`)
// }



// function div() {
    //     let num1 = +prompt('Enter first number')
//     let num2 = +prompt('Enter second number')
//     let result = num1 / num2
//     $("body").html(`<h1>${result}</h1>`)
// }

//задачка с овечками
// Задание №2
// 	Создайте маркированный список,
// При помощи setInterval добавьте в
// маркированный список 20 li - элементы
// с текстом:
// "1 - овечка",
// "2 - овечка",
// "3 - овечка",
// и так до "20-овечка"
// (через NativeJS / DOM)

// let list = document.querySelectorAll('ul');
// let count = 1;
// function sheep() {
    //     list[0].innerHTML += `<li>${count} - sheep</li>`;
//     count++;
//     if (count === 21) {
//         clearInterval(x);
//     }
// }
// let x = setInterval(sheep, 500);


// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// let list = $('ul');
// for (let i = 1; i <= 30; i++) {
    //     list.append(`<li>${i} - овечка</li>`);
// }

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.
// let titles = $('h3');
// for (i of titles) {
    //   // console.log(i)
    //   i.innerText = '!!!';
// }
// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.
// titles.css('color', 'green');






// Событие jQuery
// $('#btn').on('click', function(){
//     alert('BTN CLICKED')
// })

// $(document).ready(function(){
    // $('#btn').click(function(){
    //     alert('BTN CLICKED')
    // })

    // $(window).on("mousemove", function(event){
    //     console.log(event);
    // })

    // $(window).mousemove(function (event) {
    //     console.log(event);
    // })

    // $('.default-btn').on('click', function(){
    //     $('.buttons').append('<button class="delete" >Delete</button>')
    //     // $('.delete').on('click', function(){
    //     //     alert('DELETE BTN CLICKED')
    //     // })
    // })

    // $('.buttons').click(".delete",function () {
    //     alert('DELETE BTN CLICKED')
    // })



$(document).ready(function () {
    // $('.block').fadeOut(2000)
    // $('.block').fadeIn(2000)
    // $('.block').hide(2000)
    // $('.block').show(2000)


    // $('.block').fadeOut(2000).delay(3000).show(2000)


    // $('div').click(function (e) {
    //     // console.log(e.currentTarget);
    //     if(e.target !== this) return
    //     alert('DIV CLICKED ')
    // })


    // $('p').click(function (e) {
    //     // console.log(e.currentTarget);
    //     if (e.target !== this) return
    //     alert('P CLICKED ')
    // })

    // $('button').click(function (e) {
    //     // console.log(e.currentTarget);
    //     // e.stopPropagation()
    //     // e.stopImmediatePropagation()
    //     if (e.target !== this) return
    //     alert('BUTTON CLICKED ')
    // })

    $('button').on('click', function(){
        event.preventDefault()
        $('h1').text('Makers Bootcamp')
    })
})