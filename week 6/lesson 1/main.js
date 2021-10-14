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
