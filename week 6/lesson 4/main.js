//! jQuery events

//! ready
$(document).ready(() => {
    console.log('Dom загружен');
})

//! click
// let btn = $('button')
// btn.on('click', () => {
//     console.log("Hi");
// })


// ! dblclick
// let btn = $("button")
// function sayHello(){
//     // alert("Hello");
//     console.log("aa");
// }
// btn.on("dblclick", sayHello)

// ! focus
// let input = $('input')
// input.on("focus", () => {
//     console.log("Eсть focus");
// })

//! blur
// input.on("blur", () => {
//     console.log('Убираем focus');
//     if(!input.val()) {
//         // alert("Данное поле обязательно для заполнения")
   
// input.css("border","2px solid red")   
//     }else {
//         input.css("border", "2px solid green")
//     }
// })

// ! input 
// input.on("input", (e) => {
//     console.log(e.target.value);
// })

// ! select при выделение срабатывает  (работает в input,text Area
// let input = $('input')
// input.on("select", (e) => {
//     console.log(e);
// })


// let p = $('p')
// !не работает
// p.on('select', (e) =>{
//     console.log(e);
// })
//! работает
// let strong = $('strong')
// p.on('mouseup', (e) => {
// let selectedText = (window.getSelection().toString());
// strong.text("Вы выделили:" + selectedText)
// })

//! hide, show, toggle
// let img = $('img')
// let btnHide = $('#btn-hide')
// let btnShow = $('#btn-show')
// let btnToggle = $('#btn-toggle')

// btnHide.on('click',() => {
//     img.hide(2000)
// })

// btnShow.on('click', () => {
//     img.show(1000)
// })

// btnToggle.on('click', () => {
//     img.toggle(1500)
// })

//! fadeIn, fadeOut, fadeTo, fadeToggle
// let img = $('img') 
// let btnFadeOut = $('#btn-hide')
// let btnFadeIn = $('#btn-show')
// let btnFadeTo = $('#btn-to')
// let btnFadeToggle = $('#btn-toggle')

// btnFadeOut.on("click", () => {
//     img.fadeOut(1000)
// })

// btnFadeIn.on("click", () => {
//     img.fadeIn(1000)
// })

// btnFadeToggle.on("click", () => {
//     img.fadeToggle(1000)
// })

// let opacity = 1
// btnFadeTo.on("click", () => {
//     if(opacity < 0) {
//         img.fadeTo(1000, (opacity += 0.1))
//     }
//     img.fadeTo(1000, (opacity -= 0.1))
// })


//! modal

let btnShowModal = $(".show-modal")
let btnCloseModal =$(".my-modal button")
let modal = $('.modal')
let myModal = $(".my-modal")
function showModal(){
    modal.fadeIn(1000).css('display', "flex")
}

function closeModal () {
    modal.fadeOut(1000)
}
btnShowModal.on("click", showModal)
btnShowModal.on("click", closeModal)

modal.on("click", (e) => {
    let h3 = $('.my-modal h3')
    let p = $('.my-modal p')
    if(e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]){
        closeModal()
    }
})

//! range input
let range = $('#range')
let img = $("img")
range.on("change", (e) => {
let value = e.target.value;
img.fadeTo(500, value)
})