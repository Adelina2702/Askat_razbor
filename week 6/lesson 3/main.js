//! jQuery

// let allElems = $('*')
// console.log(allElems);

// tagName
// let h1 = $('h1')
// console.log(h1);
// h1.css('fontSize, "24px"')

//? className
// let month = $('.october')
// console.log(month);

// let liTags = $('li')
// liTags.css('color', 'blue')
// let thirdLiTag = $('li:nth-child(3)') // по порядковому номеру
// // let thirdLiTag = $("li:eq(2)") // index
// thirdLiTag.css('color', "green")
// let first = $('li:first-child')
// first.css("fontWeight", "700")
// $("li:last-child").css("fontSize", "30px")

// let inputs = $('input')
// let disabledInput = $("input:disabled")
// console.log(disabledInput);
// disabledInput.val("НЕ РАБОТАЕТ")
// let value = disabledInput.val()
// console.log(value);

// let liTags = $('li')
// liTags.addClass("list-item")
// liTags.toggleClass('list-item')
// liTags.toggleClass('active')
// liTags.removeClass('list-item')
// let result = liTags.hasClass('list-item')
// console.log(result);

// let divsWithoutClass = $('div:not(.block)')
// console.log(divsWithoutClass);

// let paragraph = $('.text')
// let text = paragraph.text()
// console.log(text);
// paragraph.text(paragraph.text()+" Hello")
// paragraph.html("<strong>JSFS-13</strong>")

// let div = $("#users")
// let users = [
//     {
//         name:"Aak",
//         age:17,
//     },
//     {
//         name: "Askat",
//         age: 18,
//     },
//     {
//         name: "Ast",
//         age: 19,
//     },
// ]
// users.forEach(item => {
//     div.append(`<p>Имя: ${item.name} <br/> Возраст: ${item.age}</p>
//     <strong>14:55</strong>`)
// })


// let google = $('a[href ="google.com"]')
// console.log(google);


// let p = $('p')
// p.text(new Date())
// let google = $('a:first');
// let href = google.attr('href', "amazon.com");
// google.removeAttr("href")
// google.attr("id", "global")
// console.log(href);

// let href = google.prop("href")
// console.log(href);

// ! attr возвращает значение атрибута только для 1го элемента
//! removeattr принимает аттрибуты


let liTags = $('li') 
liTags.each((index, element) => {
    console.log(index, element);
    if(index % 2 == 0) {
        $(element).css("color", "red")
    }
})
