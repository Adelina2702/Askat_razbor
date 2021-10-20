// for(let i = 0; i < 10000000; i++){

// }
// console.log('Hello');



// setTimeout(() => {
//     console.log(1);
// }, 2000)
// console.log(2);


// function func (){
//     console.log('hello 1');
// }
// setTimeout(func, 1000);
// setTimeout(() =>{
//     console.log('hello 2');
// })
// console.log('hello 3');

// const id = setTimeout(() => {
//     console.log(1);
// },1000);

// const id2 = setTimeout(() => {
//     console.log(2);
// }, 1000);

// console.log(id);
// clearTimeout(id2)


// let i = 0;
// const id = setInterval(() => {
//     console.log(`hello ${++i}`);
// },1000)
// setTimeout(() => {
//     clearInterval(id)
// },5000)


//promise

// const age = 21;
// const newPromise = new Promise(function(resolve, reject){
//     if(age >= 21) {
//         resolve({age, ststus :true})
//     }else{
//         reject({age, status: false})
//     }
// })

// newPromise
// .then((result) => console.log(resilt, "Success"))
// .catch((error) => console.log(error, "error"))
// .Promisefinally(() => console.log('finish'))

// console.log(newPromise);


// new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve(new Promise((res, rej) =>{
//         setTimeout(() =>{
//               res('say hello')
//         }, 1000)
//     }))
// })
// })


// p
// .then(Promise => console.log(promise))
// .catch(error => console.log(error))



// XMLHttpRequest

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/')
// xhr.send();
// xhr.onload = function(){
//     console.log(JSON.parse(xhr.response));
// }


fetch('https://pokeapi.com/api/v2/pokemon/')
// .then(result => console.log(result))
.then(result => console.log(result.json()))
.then(data => console.log(data))
.catch(err => console.log(err))

console.log('hello')