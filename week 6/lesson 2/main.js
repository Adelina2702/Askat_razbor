// Native JS events

// ! DOMContentLoaded нужен для того чтобы htmlка загрузилась
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM полностью загружен");
});

let btn = document.querySelector('button')
// // #2
// // btn.onclick = () => {
// //     alert('Clicked')
// // }

// //#3
// btn.addEventListener('click', (event) => {
//     // alert('clicked')
//     console.log(event);
// })

// ! online, offline(
// window.addEventListener('offline', () => {
//     console.log("Пропал интернет");
// })

// window.addEventListener('online', () => {
//     console.log("Появился интернет");
// })

// ? mousemove - любое движение мыши
// ? mousedown - при нажатие мыши
// ? mouseup - при отпускании мыши
// document.addEventListener("mousemove", (e) => {
//     console.log(e);
// })

// document.addEventListener("mousedown", (e)  => {
//     console.log(e);
// })

// document.addEventListener("mouseup", (e) => {
//     console.log(e);
// })

// ! input - на каждое изменение инпута
// ! paste - когда вставляем
// ! copy - когда скопируем

// let input = document.querySelector('input')
// let h3 = document.querySelector("h3")

// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
//     h3.innerHTML = e.target.value
// })

// input.addEventListener("paste", (e) => {
//     alert("Скопировать")
// })

// input.addEventListener("copy", (e) => {
//     alert("Нельзя скопировать")
// })

// ! resize - при изменении размера экрана
// window.addEventListener("resize", (e) => {
//     console.log(e);
// })

// ! submit - у тега Form при нажатие на enter
// let input = document.querySelector("input")
// let form = document.querySelector("form")
// let ul = document.querySelector("ul")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let text = input.value
//     let li = document.createElement("li")
//     li.innerText = text
//     ul.append(li)
//     input.value = ""
// })

// ? keypress - при нажатии любой клавиши 
// ? keydown - при нажатие клавиши
// ? keyup - при отускании клавиши

// document.addEventListener("keypress", (e) => {
//     console.log(e);
// })

// document.addEventListener("keydown", (e) => {
//     console.log(e);
// })

// document.addEventListener("keyup", (e) => {
//     console.log(e);
// })

let span = document.querySelector(".first-span")
let btnChangeColor = document.querySelector(".change-color")
let btnChangeSize = document.querySelector(".change-size")

btnChangeColor.addEventListener("click", () => {
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    span.style.color = `rgba(${red}, ${green}, ${blue})`
})

btnChangeSize.addEventListener("click", () => {
    span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`
})