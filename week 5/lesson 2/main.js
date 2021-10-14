// let products = ['nike', 'puma', 'bigser']
// // let newArr = products.forEach((item) => console.log(item))
// // console.log(newArr);
// let newArr = products.map((item) => console.log(item))
// console.log(newArr);


 //2
// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map((item) => {
//    return item.length
// })
// console.log(newArr);

//3
// let names = ['sam', 'luck', 'james']
// names.map((item) => {
//     item = item[0].toUpperCase() + item.slice(1);
//     return item;
// })
// console.log(names);

//4
// let arr = [1, 3, 10, -11, -555, 10]
// let newArr = arr.filter((item) => {
//     return  item < 0
// })
// console.log(newArr);

//5
// let arr = ["str", 1, [3,4], true, ['str'], 10]
// let newArr = arr.filter((item) => {
//     return Array.isArray(item)
// })
// console.log(newArr);

//6
// let num = 123456789
// let str = num.toString() //переводим в строку
// let arr = str.split("") // делим по буквам и переводим в массив
// arr = arr.reverse() // переворачиваем в массив
// let newStr = arr.join("") // переводим в строку, знак + из строки в число
// console.log(newStr)

// let reverseNum = +num.toString().split("").reverse().join("")
// console.log(reverseNum);


// топот, 101, шалаш, мадам, Азиза
// Напишите функцию, которая будет принимать строку и проверять является ли 
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково 
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот", 
// "комок" и т.д.

// function palindrome(word) {
//     let secondWord = word.split("").reverse().join("")
//     if (word.toLowerCase().trim === secondWord.toLowerCase().trim) {
//         console.log("Палиндром");
//     }else {
//         console.log("Не палиндром");
// }
// }
// palindrome("топот ")

// Метод trim() убирает все пробелы до первого символа, и после последнего символа