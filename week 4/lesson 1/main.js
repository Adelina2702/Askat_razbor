// Функции, области видимости, хойстинг
// 1 function declaration
// 2function expression
// 3 arrow function 

//function declaration

// function func(){
//     function func() {
//     console.log("Hi");
//     }
// }
// func();


// function sayHello() {
//     alert("Hello")
// }
// sayHello();


//ОБъявляем ф/ю

// function имя(параметры) {
//     ...тело...
// }

//вызов ф/и
//имя()


// function sumTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
// }
// sumTwoNumbers(500, 200)
// sumTwoNumbers(10, 20)


// function sumTwoNumbers(num1, num2) {
//     let result = (num1 + num2);
//     return result;
// }
// let sum = sumTwoNumbers(10, 20)
// console.log(sum);

// function firstElem(arr) {
//     let elem = arr.shift();
//     return elem;
// }
// let array = [1,2,3,4,5]
// let result = firstElem(array)
// console.log(result)


// mulTwoNums(10,20)
// function mulTwoNums(arg1, arg2 = 1) { //значение по умолчанию
//     console.log(arg1, arg2);
//     console.log(arg1 * arg2)
// }
// mulTwoNums(2,5);
// console.log(num);
// var num = 20;

// let message = "Hello World"
// function showMessage (message){
//     console.log(message);
// }
// showMessage(message)

// let arr = ["str"]
// function array(arr) { //ЗДЕСЬ ФУНКЦИЯ ПРИНИМАЕТ АРГУМЕНТЫ
//     console.log(arr);
// }
// array(arr) // ЗДЕСЬ ПЕРЕДАЮТСЯ АРГУМЕНТЫ ФУНКЦИИ

//ЕСЛИ Ф/Я ПРИНИМАЕТ АРГУМЕНТЫ, ТО АРГУМЕНТЫ НУЖНО ПЕРЕДАВАТЬ


// let numbers = [100, 200, 300]
// function lastElemOfArray(array){
//     let lastElem = array.pop();
//     console.log(lastElem);
// }
// lastElemOfArray(numbers);

// let boolValues = [true, false, true];
// lastElemOfArray(boolValues);

//function expression
// let sayHello = function (arg){
// console.log(arg);
// }
// sayHello("Hello")


// let obj = {
//     title: "Makers", 
// };
// function showTitle (arg1) {
//     console.log(arg1.title);
//   document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)
// let school = {
//         title: "Gazprom"
//     }
// showTitle(school)


// let num1 = 50
// function func() {
//     let num1 = 20;
//     console.log(num1);
//     return num1;
// }
// // console.log(num1);
// func()

//ТЕЛО Ф/И ЛОКАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ



// Напишите ф/ю роw (х,n) которая возвращает х в степени n

// function pow(x, n) {
//     let result = x ** n;
//     return result;
// }
// let result = pow(2, 2);
// console.log(result);


// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке
// function a (num) {
//     switch (num) {
//         case '1': return "Понедельник"
//             case "2": return "Вторник"
//                 case "3": return "Среда"
//                     case "4":  return "Четверг"
//                         case "5": return "Пятница"
//                             case "6":  return "Суббота"
//                                 case "7":  return "Воскресенье"
//     }
// }
// console.log(a(5));





//Напишите программу на Js для вычисления суммы двух заданных целых чисел.Если два значения одинаковы

// function arr(a, b) {
//     let result = ((a + b) * 3)
//     return result;
// }
// let sum = arr(5, 7);
// console.log(sum)


// let names = ["Maksat", "Vladimir", "Nurlan", "Aidar", "Sanjar", "Adelina"]
// function checkUser(arr, name) {
//     for(let i = 0; i < arr.length; i++){
//         let check = arr[i]
//      if(check === name) {
//      return "Да"
//      }
//     }
//     return "Нет"
// }
// console.log(checkUser(names, "Aidar"))

// / Import stylesheets
// import './style.css';

// Замыкание и рекурсия. Классная работа.

// Задание №1
// Создайте функцию, которая будет запрашивать
// у пользователя число, затем возвращать в
// консоли сумму всех чисел от введенного
// числа до 1.
// Например:
//    Ввод: 5
//    Вывод: 5 + 4 + 3 + 2 + 1 = 15

// let request = +promp('Enter number');
// function recSum(num) {
//   if (num === 1) return 1;

//   return num + recSum(num - 1);
// }
// console.log(recSum(request));

// Задание №2
// 	Создайте функцию, которая запрашивает у
// пользователя число(в качестве порядкового
// числа по Фибоначи), затем выводит в консоли
// число Фибоначи по этому порядку.
// Например:
//    Ввод: 10;
//    Вывод: 55
// Числа Фибоначчи (ссылка):
// https://shorturl.at/cvE17

// function fib(n){
//   if(n > 1){
//     return fib(n-1)+ fib(n-2)
//   }else{
//     return n
//   }
// }
// function fib(n) {
//   return n > 1 ? fib(n-1) + fib(n-2):n
// }
//   console.log(fib(3))

// Задание №3
// Создайте функцию, которая преобразовывает
// многомерный массив arr в одномерный массив.
// При помощи рекурсии!

// let arr = [1, [true], [[3], ['hello']]];
// // Вывод: [1,true,3,'hello'];
// let newArr = [];

// const arrToFloat = function (arr, i = 0) {
//   if (i === arr.length) return;
//   if (Array.isArray(arr[i])) arrToFloat(arr[i]);
//   else newArr.push(arr[i]);
//   arrToFloat(arr, i + 1);
// };
// arrToFloat(arr);
// console.log(newArr);

// Задание №4
// Создайте функцию, которая будет проверять - чётное ли число, или нечетное? В случае если число чётное - верните True, если нечётное - False

// Например
// console.log(recEven(234)); // выведет true
// console.log(recEven(-45)); // выведет false
// console.log(recEven(37)); // выведет false
