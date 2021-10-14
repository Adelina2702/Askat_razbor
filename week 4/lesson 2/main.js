// ЗАМЫКАНИЕ

// function init(){
//     let name = "Adilet"; //лексическое окружение
//     return function(){
//         console.log(name);
//     }
// }
// let showName = init()
// showName()


// function words(arg1){
//     return function (arg2){
//         console.log(arg1, arg2);
//     }

// }
// let hello = words("Hello")
// hello("World")
// hello("Sanjar")


// function sum(num1) {
//     console.log(num1);
//     return function (num2) {
//         console.log(num1, num2);
//     }
// }
// let sum10 = sum(10)
// sum10(20)
// sum(20)(40);


//Замыкание  - это, когда дочерняя функциия замкнута на лексическом окружении родительской фукции


//Рекурсия

// let result = 0
// function toSum(numm) {
// for(let i = num; i <num; i  > 1,i--){
//  result += i
// }
// }
// toSum(5)
// console.log(result);


// function toSum(num){
//     if (num <= 1) return num //точка выхода
//     return num + toSum(num - 1) //вызываем функцию

// }
// let result = toSum(5)
// console.log(result);


//

// function finder(arr) {
//     if (arr.length < 1) return 0;
//     let currentNum = arr.splice(0, 1);
//     console.log(currentNum);
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)
// }
// let count =  finder([1,2,22,4,1])
// console.log(count);


// Дан массив [true, 7,2, "Hello"].Найдите сумму чисел в массиве(тольkо элементов с числовым типом данных)
//1
// function func(arr) {
//     if (arr.length < 1) return 0;
//     let showNum = arr.splice(0,1)
//     return typeof showNum[0] == "number" ? showNum[0] + func(arr) : func(arr)
//     console.log(showNum);
// }
// let num = func([true, 7, 2, "Hello"])
// console.log(num);


//2
// function dan(arr) {
//     if (arr.length < 1) return 0;
//     let elem = arr.splice(0,1);
//     if (typeof elem[0] === 'number') {
//         return (elem [0] += dan(arr))
//     } 
//     else {
//         return dan(arr)
//     }
// }
// console.log(dan([true, 7, 2, "Hello"]));



//  Создайте функцию, которая запрашивает у 
// пользователя число(в качестве порядкового 
// числа по Фибоначи), затем выводит в консоли 
// число Фибоначи по этому порядку. 
// Например: 
//    Ввод: 10; 
//    Вывод: 55 
// Числа Фибоначчи (ссылка): 
// https://shorturl.at/cvE17

// function fib(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return fib(num - 1) + fib(num - 2) ;
// }
// console.log(fib(9));


// let count = 0;
// function checkLetter(word,letter){
//     for(let i = 0; i < word.length; i++) {
//         if (letter === word[i]){
//             count++
//         }
//     }
//     return count;
// }
// console.log(checkLetter("hello", "l"))



// Вы используете приложение для построения маршрутов,
// приложение отправляет вам маршрут для прогулки в виде строки:
// (например, 'сюзв' - север, юг, запад и восток соответственно).
// Вы всегда проходите только один квартал для каждого направления, и тратите ровно одну минуту
// для пересечения одного городского квартала.
// Напишите функцию, которая вернет true, если прогулка, которую дает вам приложение,
// займет у вас ровно десять минут с учетом того, что вы также должны успеть вернутся
// в исходную точку. В противном случае программа должна вернуть false.
// Например:
// Ввод 'сювзсю'(север, юг. восток, запад, север, юг) должен возвратить false,
// т.к, во-первых прогулка короче 10 минут, данный маршрут займет 6 минут,
// во-вторых вы не возвратитесь в исходную точку.
// В свою очередь 'сюсюсюсюсю' возвратит true

// let side = 
// let sum = 0;
// function getDirections(str) {
//     let sideX = 0;
//     let sideY = 0;
//     if(str.length !== 10) return false;
//     for (let i = 0; i < str.length; i++) {
// switch(str[i]) {
//     case "Север": sideX++
//     break;
//     case "Юг": sideX--
//     break;
//     case "Запад": sideY++
//     break;
//     case "Восток": sideY--
//     break;
//     default : return console.log("Неправильная сторона света");
// }
//     }
//     console.log(sideX);
//     console.log(sideY);
//     return
// }
// console.log(getDirections("сюзввсюююв"));


// Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

// ОТВЕТ:
// function checkPalindrome(str){
//     let arr = str.split("")
//     let reversed = arr.reverse().join("")
//     if(reversed === str){
//     console.log("Палиндром");
//     return true;
// }
// else {
//     console.log("Не палиндром");
//     return false
// }
// }
// checkPalindrome("комок")


// Задание №1
// Дано число 5, выведите все числа от 5 до 1 используя рекурсию.

// Вывод в консоль:
// 5
// 4
// 3
// 2
// 1

//ОТВЕТ:
// function count(num){
//   console.log(num)
//   const newNum = num -1
//   if(newNum > 0) {
//     count(newNum)
//   }
// }
// count(5)


// Сократить слово до нуля через рекурсию (используйте метод substr())

//Ответ:
// function func(str) {
//     console.log(str);
//     if (str.length === 0) {
//         return;
//     }
//     func(str.substr(1));
// }








