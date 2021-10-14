// let arrowFunc = () => {
//     console.log('Hello World');
// }
// arrowFunc()


// let arrowFunc = () => console.log("Hello World");
// arrowFunc()

// let arrowFunc = (arg1, arg2) => {
//    return arg1 + arg2
// }
// console.log(arrowFunc(7, 4))


// let arrowFunc = (arg1, arg2) =>  arg1 + arg2
// console.log(arrowFunc(7, 4))


// // let arrowFunc = arg1 => console.log(arg1);
// // arrowFunc(5)



// // let arrowFunc = (arg1, arg2, arg3) => {
// //     console.log(...arguments);
// // }
// // arrowFunc(true, 23, 'makers')



// //object metod

// let person = {
//     name: "John",
//     age: 22,

//     sayHello(){
//         console.log("Hello World");
//     },

//     sayName: function(){
//         console.log(`My name is ${this.name}`);
//     },

//     sayAge: function() {
//         console.log(`I am ${person.age}`)
// }
// }

// // console.log(person.age);
// // person.sayHello()
// // person.sayName()
// // person.sayAge()

// let person2 = {...person}
// // console.log(person2);
// person2.name = "Kani"
// person2.age = 23
// person2.sayName()
// person2.sayAge()



// // let obj1 = {
// //     name: 'Kani',
// //     age: 20,
// //     obj2: {
// //         name: "Kubat",
// //         sayName: () => {
// //             console.log(`${this.name}`);
// //         }
// //     }
// // }
// // obj1.obj2.sayName()



// // alert('qwerty');
// // console.log(this);


// let obj = {
//     alert(a){
//         console.log(a + "OBJ1");
//     },
//     hello: () => {
//         let obj2 = {
//             alert(a){
//                 console.log(a + "OBJ2");
//             },
//             hello2: () => {
//                 this.alert("ALERT")
//             }
//         }
//         obj2.hello2()
//     }
// }
// obj.hello()


// Стрелочные функции, методы объектов, this. Классная работа

// Задание №1
// Создайте стрелочную функцию, которая принимает 2 аргумента и  возвращает сумму всех аргументов.

// let arrowFunc = (arg1, arg2) => arg1 + arg2
// console.log(arrowFunc(6,7))
// Задание №2
// Создайте объект user со свойствами name, surname и age.

// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 31
// }
// Задание №3
// Создайте у объекта user метод SayHi, который будет выводить в консоль “Hello World”.


// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 31,
//     sayHi: () => {
//         console.log('Hello World');
//     }
// }

// user.sayHi()


// Задание №4
// Создайте метод у объекта user, который будет выводить в консоль  его возраст.



// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 31,
//     sayHi: () => {
//         console.log('Hello World');
//     },
//     sayAge: function(){
//         console.log(user.age);
//     }
// }

// user.sayHi()
// user.sayAge()
// // Задание №5
// // Создайте метод у user, который будет возвращать полную информацию. Например: Homer Simpson 40

// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 31,
//     sayHi: () => {
//         console.log('Hello World');
//     },
//     sayAge: function () {
//         console.log(user.age);
//     },
//     sayInfo(){
//         console.log(`${user.name}, ${user.name}, ${user.age}`);
//     }
// }

// user.sayHi()
// user.sayAge()
// useer.sayInfo()
// // Задание №6
// // Сделайте 3 и 4 задание используя this.

// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 31,
//     sayHi: () => {
//         console.log('Hello World');
//     },
//     sayAge: function () {
//         console.log(this.age);
//     },
//     sayInfo() {
//         console.log(`${this.name}, ${this.name}, ${this.age}`);
//     }
// }

// user.sayHi();
// user.sayAge();
// user.sayInfo()






// //REGEX
// const str = 'Hello! My name is Kani';
// const regexp = /Kani/
// const regexp = /\d/g;
// const regexp = /\w/
// const regexp = /\W/


// const str ='hello! we are Alan and Ulan.'
// const regexp = /[AU]lan/g


// const str = 'Today is 20.10.2020 '
// // const regexp = /\d{2}.\d{2}.\d{4}/
// const regexp = /\./
// const result = str.match(regexp)
// console.log(result);


// let str = 'We see you. we need you'
// let pattern = /we/gi
// console.log(str.replace(pattern, 'I'));


// let str = prompt('Enter word')
// let regexp = new RegExp(/ [a-zA-ZA-Яа-я] /,'g')


// let str = prompt("enter word")
// let regexp = new RegExp(/\d+/, 'g')
// console.log(regexp.test(str));



// let str = 'Name: Jack, LastName:Smith '; 
// let newArr = []
// for(let i = 0; i < str.length; i++ ){
//     if(str[i].toLowerCase !== 'a')newArr.push(str[i])
//     else newArr.push('*')
// }
// let newStr = newArr.join()
// console.log(newStr);
// console.log(str.replace(/a/gi, '*'));


// let str = prompt('Enter your mobile phone:')
// let regexp = new RegExp(/^\+996\d{9}/, 'g')
// // console.log(regexp.test(str));


// if(regexp.test(str)) {
//     alert('corect')
//  }else{
//     alert('Wrong')
// }