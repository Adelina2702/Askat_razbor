// Простые методы массива

// PUSH, POP, SHIFT, UNSHIFT
// let arr = [1, 2 ,3]
// arr.push(4) // добавляет в конец
// console.log(arr)
// let num = arr.pop(); // вырезает один элемент с конца
// arr.pop()
// console.log(arr)
// console.log(num)

// let arr = ['Kyrgyzstan', 'Uzbekistan', 'Russian']
// arr.unshift("China") // добавляет в начало
// console.log(arr)
// let country = arr.shift; // вырезает один элемент с начала
//     console.log(arr);
//     console.log(country)

// Splice, slice
// let nums = [22, 40, 38, 50]
//  
// // Массив.splice( с какого начать, сколько вырезать, что вставить)

// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2)
// console.log(arr)
// console.log(num);
// массив.slice(с какого начать, по какой (не включительно))

// let arr = [1, 2, 3, 4, 5];
// // arr.reverse()
// let str = arr.join(""); //из массива делает строку
// console.log(arr);
// console.log(str);
// let newArr = str.split("+"); // из строки делает массив
// console.log(newArr);

// let nums = [1, 2, 30, 11, 101, 22, 86];
// // nums.sort()
// // nums.sort((a, b) => a- b);
// // nums.sort((a, b) => b-a)
// console.log(nums)

//CONCAT
// let res1 = [1, 2, 3];
// let res2 = [4, 5, 6];

// let result = res1.concat(res2, ['str', 'boolean'])
// console.log(result)

// let myArray = ['Kuba', 'Malik', 'Ainura', 'Maksat', 'Adelina', 'Askat']
// for (let i = 0; i < myArray.length; i++) {
//     // console.log(myArray[i])
//     myArray.splice(i, 1, [myArray[i], i]);
//         console.log(myArray)
// }


// let mixedUsers = [
//     {
//     role: "user"
// },
// {
//     role: "admin"
// },
// {
//     role: "admin"
// },
// {
//     role: "admin"
// },
// {
//     role: "user"
// },
// {
//     role: "user"
// },
// ];

// let admins = [];
// let users = [];
// for( let i=0; i < mixedUsers.length;i++) {
//     if(mixedUsers[i].role === 'admin') {
//     admins.push(mixedUsers[i]);
//     } else if (mixedUsers[i].role === 'user') {
//     users.push(mixedUsers[i]);
// }
// }
// console.log(admins);
// console.log(users);


// let products = [
//     { size: "s" },
//     { size: "s" },
//     { size: "s" },
//     { size: "s" },
//     { size: "l" },
//     { size: "l" },
//     { size: "l" },
//     { size: "l" },
//     { size: "m" },
//     { size: "m" },
// ];
// console.log(products);

//  let sSizes = []
//  let mSizes = []
//  let lSizes = []
// console.log(products);
// for (let i = 0; i < products.length; i++) {
//     if (products[i].size === "s") { //products[i] - это элемент объекта
//         sSizes.push(products[i]);
//     } else if (products[i].size === "m") {
//         mSizes.push(products[i]); 
//         } else if (products[i].size === "l") {
//             lSizes.push(products[i])
// }
// }
// console.log(sSizes)
// console.log(mSizes)
// console.log(lSizes)


// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let array = array1.concat(array2);
// for (let i = 0; i < array.length; i++) {
//     for (let y = 0; y < array.length; y++) {
//         if (y === 1) {
//             continue;
//         }
//         if (array[i] === array[y]) {
//             array.splice(y, 1);
//             y--;
//         }
//     }
// }
// console.log(array);




// let arr = [8, 3, 2, 1, 3, 4];
// for (let i = 0; i < arr.lengt; i++) {
//     console.log(arr[i]);
// }


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = (arr1.concat(arr2));
// console.log(newArr)


// let arr = [1, 2, 3, 4, 5];
// arr.splice(5, 0, 2, 3, 4);
// console.log(arr)


// Import stylesheets
import './style.css';

// Задачи на закрепление тем. Week 3

// Задание №1
// Запросите у пользователя число с помощью prompt.
// Если содержимое переменной result больше 23 и меньше 40, выведите
// пользователю ответ ‘Hello’, иначе выведите ‘Goodbye’.
// let arr = +prompt('Enter your age');
// if (arr > 23 && arr < 40) {
//   alert('Hello');
// } else {
//   alert('Goodbye');
// }

// Задание №2
// Запросите у пользователя число с помощью prompt.
// Если пользователь ввел цифру 1, то выведите сообщение ‘зима’, если 2-’весна’,
// если 3-лето, 4-осень. Используйте Конструкцию ‘Switch’.
// let seasons = +prompt(‘Введите число от 1-4’)
// Пример ввода: 1
// Вывод: 'зима'

// let seasons = +prompt("Введите число от 1-4")
// switch (seasons) {
//   case 1: alert('зима');
//   break;
//   case 2: alert('весна');
//   break;
//   case 3: alert('лето');
//   break;
//   case 4: alert('осень');
//   break;
//   default:
//     break;
// }

// Задание №3
// Найти максимальное число из трех.
// Пользователь должен вводить числа поочерёдно через prompt.
// Используя конструкцию if..else, напишите код, который должен определять, какое из введенных чисел является наибольшим.

// let chislo1 = +prompt('Введите первое число')
// let chislo2 = +prompt('Введите второе число')
// let chislo3 = +prompt('Введите третье число')
// if (chislo1 > chislo2 && chislo1 > chislo3) {
//     alert(chislo1)
// } else if (chislo2 > chislo1 && chislo2 > chislo3) {
//     alert(chislo2)
// } else if (chislo3 > chislo1 && chislo3 > chislo2) {
//     alert(chislo3)
// }

// Задание №4
// Дан массив с элементами - [8,3,2,1,3,4]. С помощью цикла for поочередно выведите все
// элементы в консоль.
// Вывод в консоли:
// 8
// 3
// 2
// 1
// 3
// 4

// let arr = [8, 3, 2, 1, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Задание №5
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let nums = [1, 2, 3, 4, 5]
// let res = nums.splice( 3,0,'a', 'b', 'c')
// console.log(nums)
// console.log(res)

// Задание №6
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let nums = [1, 2, 3, 4, 5];
// nums.splice(1,2);
// console.log(nums);

// Задание №7
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его по возрастанию при помощи метода массива.

// let num = [3, 4, 1, 2, 7];
// num.sort((a,b) => a - b);
// console.log(num)

// Задание №8
// Запросите у пользователя текст с помощью prompt и сохраните ввод
// в переменной result. Eсли пользователь вводит текст и первая буква текста
// начинается с ‘a’, то выведите сообщение ‘да’, иначе ‘нет’.
// Например:
// Пример ввода: ‘abcd’
// Вывод: 'да'

// let str = prompt('Введите текст')
// let result = str
// if (str[0] === 'a') {
//     alert('Да')
// } else {
//     alert('Нет')
// }
//  console.log(result);

// Задание №9
// Напишите цикл, который через prompt запрашивает число. Если пользователь ввёл число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать ввести число до тех пор, пока пользователь не введёт 0, либо не нажмёт кнопку Cancel (ESC).
// После ввода нуля, показать на экран количество чисел, которые были введены, их общую сумму и среднее арифметическое.

// let a = 0;
// let b = 0;
// while (true) {
//     let repeat = +prompt("Введите число");
//     if (repeat === 0 || repeat === null){
//         break
//     } else {
//         alert("Введите повторно")
//     }
//     a += repeat
//     b++
// }
// console.log(b);
// console.log(a);
// console.log(a / b);

// Задание №10
// Дан массив с элементами [1,5,2,3]. С помощью цикла найдите
// сумму чисел из которых состоит данный массив.

// let fff = [1, 5, 2, 3]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//   sum += arr[i]
// }
// console.log(sum)

// Задание №11
// 	Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

// let arr = ['а', 'б', 'в']
// arr.push(4,3,5,5)
// console.log(arr)

// Задание №12
// 	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// Задание №13
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let num = [1, 2, 3, 4, 5];
// num.splice(5, 0, 2, 3, 4)
// console.log(num)

// Задание №14
// 	Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let tom = [1, 2, 3, 4, 5];
// tom.splice(1, 0, 'a', 'b')
// tom.splice(6, 0, 'c')
// tom.splice(8, 0, 'e')
// console.log(tom)

// Задание №15
// Используя условные операторы напишите калькулятор.
// Ваша программа должна запрашивать у пользователя два числа и
// один из операторов(например + - / *), затем выдавать результат
// в виде alert()

// Улучшите ваш калькулятор используя циклы. Калькулятор должен
// работать до тех пор пока пользователь не нажмет кнопку отмены( Cancel либо Esc)

// let arr1 = +prompt('Первое число')
// let result = prompt('Введите действие')
// let arr2 = +prompt('Второе число')
// if(result === '+' ){
//   alert(arr1 + arr2)
// } else if(result === '/'){
//   alert(arr1 / arr2)
// } else if(result === '-'){
//   alert(arr1 - arr2)
// } else if(result === '*'){
//   alert(arr1 * arr2)
// }
