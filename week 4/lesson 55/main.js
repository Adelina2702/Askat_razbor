// let arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for(let i = 0; i)


//   function min(a,b) {
//       return a < b ? a : b
//   }
//   console.log(min(3,1));
//   console.log() ;  let 


  // let arr = ['2', 'r', 'f']
  // arr = arr.join(",")
  // console.log(arr);


// Задачи на закреплени

// Задание №1
// Написать программу расчета площади и окружности круга по радиусу.
// Ввести радиус:
// Вывести площадь и окружность

//Ответ:
// function arr(r) {
//   let area = 3.14 * (r * r);
//   let circumference = 3.14 * 2 * r;
//   console.log(`Площадь: ${area}, Окружность: ${circumference}`);
// }
// arr(3.5);

// Задание №2
// Если содержимое переменной result больше 23 и меньше 40, выведите 'Hello',
// иначе выведите 'Goodbye'.

//Ответ:
// let arr = +prompt('Enter 23- 40');
// if (arr >= 23 && arr <= 40) {
//   alert('Hello');
// } else {
//   alert('Goodbye');
// }

// Задание №3
// Сделайте 2-e задание используя условный (тернарный) оператор.

//Ответ:
// let arr = +prompt('Enter 23- 40')
// let result
// result = (arr >= 23 && arr <= 40 )? 'Hello' : 'Goodbye'
// console.log(result)

// Задание №4
// Есть переменная seasons, если пользователь ввел цифру 1, то выведите
// сообщение 'зима', если 2-'весна', если 3-лето, 4-осень. Используйте Конструкцию
// 'Switch'
// let seasons = +prompt('Введите число от 1-4')
//Ответ:
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

// Задание №5
// Используя цикл for вывести все четные числа от 1 до 100;

//Ответ:
// for(let i = 0; i <= 100; i++){
//   if (i %2  === 0 ) {
//     console.log(i)
//   }
// }

// Задание №6
// Напишите функцию которая возвращает массив из 4 функций;
// 	•	первая увеличивает счетчик( переменная i )  на 1
// 	•	вторая уменьшает на 1
// 	•	третья умножает на 2
// 	•	четвёртая делит на 2

//  **сделать задание при помощи замыкания!!

//Ответ:
// function arr(i) {
//   let counter = i
//   return [
//     function add() {
//       counter++
//       return counter
//     },
//     function substract() {
//       counter--;
//       return counter
//     },
//     function multi() {
//       counter *= 2
//       return counter
//     },
//     function divide() {
//       counter /= 2
//       return counter
//     },
//   ]
// }

// let num = arr(10);
// console.log(num[0]())
// console.log(num[1]())
// console.log(num[2]())
// console.log(num[2]())
// console.log(num[3]())

//  * Задание №7
//  *   Напишите функцию которая принимает число и
//  * возвращает его двоичный формат
//  * (Решать при помощи рекурсии)
//  * К примеру:
//  *    func(5) >> 101
//  *    func(6) >> 110
//  *    func(1234321) >> 100101101010110010001

//Ответ:
// function strNum(dec) {
//   return (dec >>> 0).toString(2);
// }

// console.log(strNum(5));
// console.log(strNum(6));
// console.log(strNum(123123));

//  Задание №8
//  Дана строка; нужно написать функцию, которая позволяет
//  вернуть значение true, если строка является палиндромом,
//  и false — если нет. При этом нужно учитывать пробелы и
//  знаки препинания.
//  К примеру:
//  palindrom('tenet') === true
//  palindrom('nolan') === false

//Ответ:
// function checkPalindrome(str){
//       let arr = str.split("")
//       let reversed = arr.reverse().join("")
//       if(reversed === str){
//       console.log("Палиндром");
//       return true;
//   }
//   else {
//       console.log("Не палиндром");
//       return false
//   }
//   }
//   checkPalindrome("tenet")

//   checkPalindrome("nolan")

// Задание №9
// Нужно написать функцию, принимающую строку в качестве
// аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются 'a', 'e', 'i', 'o', 'u'.
// К примеру:
// vowel('hello') // --> 2
// vowel('why') // --> 0

//Ответ:
// function  num (str) {
//   let vowels = {
//     a: 'a',
//     e: 'e',
//     i: 'i',
//     o: 'o',
//     u: 'u',
// }
// let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     vowels[str[i]] ? count++ : null;
//   }

//   return count;
// }
// console.log(num("hello"))
// console.log(num("why"))

// Задание №10
// Напишите функцию которая принимает массив из чисел. Находит количество
// четных чисел в массиве и их сумму. И выведите их на экран.
// К примеру:
// let arr9 = [1, 2, 3, 4, 5, 6]
// `Четные числа в массиве: ${newArr} их сумма равна ${sum}`
// четные числа = [2, 4, 6]
// сумма четных чисел = 12

//Ответ:
// function str(arr) {
//   let res = [];
//   arr.map((item) => {
//     item % 2 === 0 ? res.push(item) : null;
//   });
//   let sum = 0;
//   res.map((item) => {
//     sum += item;
//   });
//   console.log(`Четные числа в массиве: ${res} их сумма равна ${sum}`);
// }
// str([1, 2, 3, 4, 5, 6]);




// RegExp. Домашнее задание.

// Задание №1
// Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит последнее 'aaa' на '!'.
// Пример:
// input: 'aaa aaa aaa'
// output: 'aaa aaa !'

//Ответ:
// let str = 'aaa aaa aaa'
// console.log(str.replace(/\aaa$/, '!'))

// Задание №2
// Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'.
// Пример:
// input: 'aaa aaa aaa'
// output: '! aaa aaa'

//Ответ:
// let str = 'aaa aaa aaa'
// console.log(str.replace(/^aaa/, '!'))

// Задание №3
// Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра и замените их на знак $.
// Пример:
// input: 'a1a a2a a3a a4a a5a aba aca'
// output: '$ $ $ $ $ aba aca'

//Ответ:
// let str = 'a1a a2a a3a a4a a5a aba aca';
// console.log(str.replace(/a\da/g,'$'))

// Задание №4
// Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр и замените их на слово Hy.
// Пример:
// input: 'a1a a22a a333a a4444a a55555a aba aca'
// output: 'Hy Hy Hy Hy Hy aba aca'

//Ответ:
// let str = 'a1a a22a a333a a4444a a55555a aba aca'
// console.log(str.replace(/a\d+a/g, 'Ну'))

// Задание №5
// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных. Замените их на слово Good.
// Пример:
// input: 'aAXa aeffa aGha aza ax23a a3sSa'
// output: 'aAXa Good aGha Good ax23a a3sSa'

//Ответ:
// let str = 'aAXa aeffa aGha aza ax23a a3sSa'
// console.log(str.replace(/a[a-z]+a/g, 'Good'))

// Задание №6
// Дана строка 'ae1ea aeea a3544a a1a axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз. Замените их на слово many.
// Пример:
// input: 'ae1ea aeea a3544a a1a axxa axxxa'
// output: 'ae1ea many a3544a a1a many many'

// Ответ:
// let str = 'ae1ea aeea a3544a a1a axxa axxxa'
// console.log(str.replace(/a[a-z]+a/g, 'many'))

// Задание №7
// Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.
// Пример:
// input: '10 6 3 2'
// output: '100 36 9 4'

//Ответ:
// let str = '10 6 3 2'.replase(/\d+)/g, function (match) {
//   return match * match;
// });
// console.log(str);

// Задание №8
// Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза.
// Пример:
// input: "2aaa'3'bbb'4'"
// output: "2aaa'6'bbb'8'"

//Ответ:
// let match = 0;
// let result = "2aaa'3'bbb'4'".replace(/\d+(?=')/g, function (match) {
//   return match * 2;
// });
// console.log(result);

// Задание №9
// Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции.
// Пример:
// input: '23 + 35 ='
// output: '23 + 35 =58'

//Ответ:
// let str = '23 + 35 ='
// .replace(/(\d+)\s\+\s(\d+)\s=/g,
// function (match, match1, match2) {
// let res = parseInt(match1) + parseInt(match2);
//  return match + res;
//     }
//   );
//   console.log(str);

// Задание №10
// С помощью test определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.
// Пример:
// 1)  input: '1955'
//     output: true

// 2)  input: '2200'
//     output: false

//Ответ:
// let str = "1995"
// let regexp = /^\d\d|\d|\d$/
// let result = regexp.test(str)
// console.log(result);

// Задание №11
// С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.
// Пример:
// 1)  input: '09:15'
//     output: true

// 2)  input: '25.00'
//     output: false

// //Ответ:
// let time = "24:00"
// let regexp = /^\d\d:\d\d$/;
// let result= regexp.test(time)
// console.log(result);

// Задание №12
// С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com.
// Пример:
// 1)  input: 'google'
//     output: false

// 2)  input: 'google.com'
//     output: true

//Ответ:
// let str = "google"
// let regexp = /(\w+\.)+\w+/g
// let result = regexp.test(str)
// console.log(result);

// Задание №13
// Удалите одной регуляркой все повторяющиеся слова из строки.
// Пример:
// 1)  input: 'dsf xxx xxx sd'
//     output: 'dsf xxx sd'

// 2)  input: 'dsf xxx xxx xxx sd'
//     output: 'dsf xxx sd'

// Ответ:
// let str = 'dsf xxx xxx sd'.replace(/\b(\w+)\s+\1/g, "$1");
// console.log(str)

// Задание №14
// Напишите программу на JavaScript для подсчета количества слов в строке с помощью регулярного выражения.
// Примечание:
// - Удалите пробелы из начальной и конечной позиции.
// - Преобразовать 2 или более пробелов в 1
// Пример:
// input: 'this string has five words'
// output: 5

//Ответ:
//   function count(str) {
//   let counter = 1;
//   str.replace(/(\s+)/g, function (a) {
//       counter++;
//   });
//   return counter
// }
// console.log(count('this string has five words'))

// Задание №15
// Напишите функцию JavaScript для печати целого числа с запятыми в качестве разделителей тысяч.
// Пример:
// 1)  input: '1000'
//     output: '1,000'

// 2)  input: '10000000000'
//     output: '10,000,000,000'

//Ответ:
//  let str = '1000';
// console.log(str.replace(/\B(?=(\d{3})+(?!\d))/g, ','));


// Стрелочные функции, методы объектов, this.  Домашняя работа.

// Группа C ======================================================
// Задание №1
// Перепишите данную функцию в стрелочную функцию.
// function showFirstMessage() {
//     console.log("Hello World!");
// }
// showFirstMessage()

//Ответ:
// let showFirstMessage = () =>{
// console.log("Hello World!")
// }
// showFirstMessage()

// Задание №2
// Напишите стрелочную функцию birthday которая будет принимать age и name,
// и будет поздравлять этого человека.

//Ответ:
// let showList = (age, name) => console.log(`Happy ${age}th birthday, ${name}!`);
// showList(20, "Lisa");

// Задание №3
// Дан массив с именами, добавьте is cool в конец каждой имени.

//Ответ:
// let names = ["Naruto", "Sakura", "Saske"];
// let fullNames = names.map(function(name) {
//  return `${name} cool`;
// });

// console.log(fullNames)

// Задание №4
// Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// Например, строка «JavaScript» должна стать строкой «tpircSavaJ».

//Ответ:
// let reverse = (str) => {
//     if (str === '') {
//       return '';
//     } else {
//       return reverse(str.substr(1)) + str.charAt(0);
//     }
//   }
//   console.log(reverse('«JavaScript»'));

// Задание №5
// Реализуйте стрелочную функцию, принимающую строку и символ и возвращающую количество символов в строке.
// Например, если мы передаем «JavaScript» и «a», то должны получить 2 (в строке «JavaScript» две буквы «a»).

//Ответ:
// let sum = 0;
// let func = (arg1,arg2) => {
//   for(let i = 0; i < arg1.length; i++) {
//     if(arg1[i] === arg2){
//       sum++
//     }
//   }
// }
// func('JavaScript','a')
// console.log(sum)

// Группа B ======================================================

// Задание №6
// Дан массив arr = [1, 2, 3, 4, 5], при помощи стрелочных функций реализуйте пункты a и b.
// a) умножьте каждый элемент массива на 5.
// b) отфильтруйте массив по четным числам.

// Ответ:
// let func = (arr) => {
//   arr = arr.map((item) => item * 5);
//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] % 2 === 1) {
//     //   arr.splice(i, 1);
//     // }
//   }
//   return arr;
// };
// console.log(func([1, 2, 3, 4, 5]));

// Задание №7
// Создайте стрелочную функцию с одним аргументом,
// если в этом аргументе хранится строка “User” выведите
// alert Hello User, иначе выведите alert “Error” .

// //Ответ:
// let arrowFunc = (arg1) => {
//   if( arg1 === 'User') {
//   alert('Hello User')
//   }else {
//     alert('Error')
//   }
// }
// arrowFunc('User')

// Задание №8
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

//Ответ:
// let func = (min) => {
//     if (min >= 0 && min < 16) {
//       return 'числo в первoй четвертe ';
//     } else if (min > 15 && min < 31) {
//       return 'числo во вторoй четвертe ';
//     } else if (min > 30 && min < 46) {
//       return 'числo в третьeй четвертe ';
//     } else if (min > 45 && min <= 59) {
//       return 'числo в четвертoй четвертe';
//     } else {
//       return 'дайте другое число';
//     }
//   };
//   console.log(func(15));

// Задание №9
// Функция принимает количество часов (проверить
// что это число). Функция возвращает
// количество секунд в переданых часах.

//Ответ:
// let hour = (hours) => hours * 60 * 60;
// console.log(hour(2));

// Задание №10
// В функцию передаются переменные first и second.
// Проверьте, что first делится без
// остатка на second. Если это так - возвращаете true,
// иначе возвращаете false.

//Ответ:
// let firstSecond = (first, second) => (first % second === 0 ? true : false);
// console.log(firstSecond(4, 3));
// console.log(firstSecond(4, 2));

// Группа A ======================================================

// Задание №11
// Создайте два объекта со свойствами language и framework.
// Затем, отдельно создайте функцию describe() который выводит свойства объектa.
// Примените describe() этим двум объектам.

//Ответ:
// let obj1 = {
//       language: 'English'
//   }
//   let obj2 = {
//       framework: 'class'
//   }
//   let describe = () => console.log(obj1.language, obj2.framework)
//   describe(obj1.language)
//   describe(obj2.framework)

// Задание №12
// Создайте объект group со свойствами title и students. Свойство students будет
// хранить масив с именами студентов. Так же реализуйте метод showList() который будет выдавать alert
// на title и на имя каждого студента.

//Ответ:
// let group = {
//   title: 'people',
//   students: ['Itachi', 'Levi', 'L'],

//   showList() {
//     for (let i = 0; i < this.students.length; i++) {
//       alert(`${this.students[i]} is a ${this.title}`);
//     }
//   },
// }
// group.showList()

// Задание №13
// Создайте объект person со свойством name, реализуйте метод introduce() который будет выдавать
// имя объектa

//Ответ:
// let person = {
//       name: 'Takemichi',
//       introduce() {
//           console.log(this.name)
//       }
//   }
//   person.introduce()

// Задание №14
// Создайте любой объект с несколькими свойствами и один метод который будет выдавать в консоле
// все ключи и значения этого объект.

//Ответ:
// / let obj = {
//       name: 'Askat',
//       surname: 'Askatov',
//       age: 23,
//       objInfo: () => {
//           console.log(obj);
//           console.log(obj.name, obj.surname, obj.age);
//       }
//   }
//   obj.objInfo()

// let obj = {
//   name: 'Kayamoto',
//   surname: 'Hinata',
//   age: '20',

//   describe() {
//     console.log(`name: ${this.name},
//     surname: ${this.surname},
//      age: ${this.age}`);
//   },
// };

// obj.describe();

// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

//Ответ:
// let elevator = {
//   current: 1,
//   max: 16,
//   min: 1,
//   num = 0,
//   printfloor: function() {
//     console.log(`Вы находитесь на ${this.current} этаже`);
//   },
//   upOneFloor: function () {
//     if (this.current < max) {
//       this.curent++
//       this.printfloor()
//     }else {
//       console.log(`Вы не можете подняться выше ${this.max}`)
//     }
//   },
//   downOneFloor: function (){
// if (this.current > this.min) {
//   this.current--
//   this.printfloor()
// }else{
//   console.log(`Вы не можете спускаться ниже ${this.min} `)
// }
//   },
//   toFloor: function (num) {
//     if(num < this.min || num > this.max)
//     console.log(`Такого этажа нет`)
//     return
//   }
//   toFloor: function(){
//     if(num < this.current){
//       while (this.floor !== num) {
//         this.upOneFloor()
//       }
//     }else if (num === this.floor) {
//       console.log(`Мы уже итак находимся на${num}этаже`)
//     }else{
//       while(this.current !== num) {
//         this.downOneFloor()
//       }
//     }
//   }
// }
// elevator.toFloor(20)


// Замыкание и рекурсия. Домашняя работа.

// Группа C ====================================================

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

// Задание №2
// 	let arr = [“hello”, 25, true, {}]
// Напишите функцию, которая перебирает массив arr через рекурсию и выводит каждый элемент в консоль.

// Вывод в консоль:
// hello
// 25
// true
// {}

//Ответ:
// let arr = ['hello', 25, true, {}];
// function showArr(arr, n = 0) {
//   if (n === arr.length) return;
//   console.log(arr[n]);
//   showArr(arr, n + 1);
// }
// showArr(arr);

// Задание №3
// Напишите функцию которая принимает число и возвращает его факториал используя рекурсию.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// 5! = 1*2*3*4*5 =120
// 6! = 1*2*3*4*5*6 = 720

// Вызов функции: recFactorial(5)
// Вывод в консоль:
// 120

//Ответ:
//  function recFactorial(n) {
//   return (n != 1) ? n * recFactorial(n - 1) : 1;
// }

// console.log(recFactorial(5));
// console.log(recFactorial(6));

// Задание №4
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//   //Допишите ф-ю
// }
// // Пример:
// const res = foo(3)(4);
// console.log(res); //7

// function foo(a) {
//     //Допишите ф-ю
//   }
//   // Пример:
//   const res = foo(3)(4);
//   console.log(res); //7

//Ответ:
// let count = 0;
// function counter(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// let countNum = counter(4);
// console.log(countNum(3));

// Задание №5
// Создайте функцию, которая считает и выводит количество своих вызовов. (решите с помощью замыкания)

// Пример

// func(); //Первый вызов выведет 1
// func(); //Второй вызов выведет 2
// func(); //Третий вызов выведет 3
// func(); //Четвертый вызов выведет 4

//Ответ:
// function count() {
// 	let i = 1;
// 	return function() {return i++};
// }
// let func = count();

// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// Задание №6
// Дана последовательность натуральных чисел от 0 до N. Напишите код, который запрашивает число N и выводит все нечетные числа из этой последовательности, сохраняя их порядок.

//Ответ:
// function checkNum(n) {
//   if (n <= 0) return 0;
//   if (n % 2 === 1) {
//     console.log(n);
//     checkNum(n - 1);
//   } else {
//     checkNum(n - 1);
//   }
// }
// checkNum(10);

// Группа B ====================================================

// Задание №7S

// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

//Ответ:
// function limit (num){
//   if(num <= 1000){
//     console.log(num)
//     limit(num+num)
//     console.log(num)
//   } return
// }
// limit(50)

// Задание №8
// Сократить слово до нуля через рекурсию (используйте метод substr())

//Ответ:
// function func(str) {
//   console.log(str);
//   if (str.length === 0) {
//     return;
//   }
//   func(str.substr(1));
// }
// func('makers');

// Задание №9
// Сделать реверс слова через рекурсию (используйте методы substr() и charat())

//Ответ:
// function reverse(str) {
//   if (str === '') {
//     return '';
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(reverse('Bootcamp'));

// Задание №10

// Напишите функцию с замыканием, которая принимает в родительской функции, в аргументы - Имя и Фамилию, а в дочерней объединяет их и передает обратно в родительскую, а также затем выводит в консоль "Hello *Имя *Фамилия"
// Например:
// Ввод: sayHi("John", "Doe")
// Вывод: "Hi John Doe"

//Ответ:
// function init(str) {
//   let name = "John";
//   function displayName() {
//       console.log(name);
//   }
//   displayName("John", "Doe");
// }
// init()

// Группа А ====================================================

// Задание №11

// Напишите функцию, которая будет высчитывать сумму квадратов заданных чисел (некоторые могут лежать во вложенных массивах) (используйте рекурсию)
// Пример:

// let arr = [1,2,3];
// console.log(sumSquare(l)); // 1 + 4 + 9 = 14

// arr = [[1,2],3];
// console.log(sumSquare(l)); // 1 + 4 + 9 = 14

// arr = [[[[[[[[[1]]]]]]]]]
// console.log(sumSquare(l)); // 1 = 1

// arr = [10,[[10],10],[10]]
// console.log(sumSquare(l)); // 100 + 100 + 100 + 100 = 400

//Ответ:
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// Задание №12
// Напишите функцию, которая возвращает количество цифр, встречающихся в многоуровневом массиве (используйте рекурсию)

// Пример:

// Ввод: let count = countNumbers([[[5], 3], 0, 2, ['test'], [], [4, [5, 6]]])
// Вывод: 7

//Ответ:
// function count(int n)
// {
//     if (n/10!=0)
//         return 1+count(n/10);
//     else
//         return 1;
// }

// function sum (int n)
// {
//     if (n/10!=0)
//         return n%10+sum(n/10);
//     else
//         return n%10;
// }

// Задание №13
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и false – если не совпадает.

//Ответ:
// function makePassword()

// Задание №14
// Создайте функцию, вызов которой вернёт числа в промежутке между X и Y.

// Ввод : interval(5, 10)
// Вывод : [6, 7, 8, 9]

// Задание №15
// Напишите функцию, принимающую в себя 2 аргумента - первый основание, а второй показатель степени. Функция должна выводить в консоль результат

// Например:
// Ввод: pow(2, 4)
// Вывод: 16

//Ответ:
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// pow(2, 4);

// Функции и области видимости. Домашняя работа

// Группа С =======================================================
// Задание №1
// Создайте функцию которая выводит в
// консоль “Hello World!”

//ОТВЕТ:
// let showMessage = function (message) {
//     console.log(message);
//   };
//   showMessage("Hello World!");

// Задание №2
// Напишите функцию hello(), которая при
// вызове будет возвращать строку:
// "Привет, JavaScript!"

//ОТВЕТ:
// function hello() {
//     return "Привет, Javascript!";
//   }
//   console.log(hello());

// Задание №3
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.

//ОТВЕТ:
// function arr(a, b) {
//       let result = (a + b);
//       return result;
//   }
//   let sum = arr(2, 2);
//   console.log(sum)

// Задание №4
// Напишите функцию, которая в качестве аргумента принимает
// число - возраст. Если возраст больше 18 выведите в
// консоль “Добро пожаловать”, иначе “Вход запрещен”

// Пример:
// console.log(func(18));
//  >>“Добро пожаловать”
// console.log(func(17));
//  >>“Вход запрещен”

//ОТВЕТ:
// function checkAge(age) {
//     if (age >= 18) {
//       return("Добро пожаловать");

//     } else {
//       return("Вход запрещен");

//     }
//   }
//   console.log(checkAge(18));
//   console.log(checkAge(17));

// Задание №5
// Напишите функцию, которая принимает целое число и возвращает сумму всех его цифр.
// Например: ввод 456, функция должна вернуть число 15, так как 4 + 5 + 6 = 15

//ОТВЕТ:
// function arr(num) {
//   let sum = 0;
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i])
//     return sum;
//   }
//   let sum = arr(456);
//   console.log(sum)
// }

// Группа B =======================================================

// Задание №6
// Напишите функцию которая принимает
// массив с названиями стран и возвращает
// страну с самым длинным названием,
// затем напишите вторую функцию которая возвращает
// страну с самым коротким названием.

// Например:
// let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// funcLongest(countries)
// Вернет строку 'Финляндия'
// funcShortest(countries)
// Вернет строку 'Лаос'

//ОТВЕТ:
// let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// function funcLongest(countries) {
//   countries.sort((a,b) => b.length - a.length);
//   return countries[0];
// }
// console.log(countries[0])

//Лаос
// function funcShortest(countries){
//   countries.sort((a,b) => a.length - b.length);
//   return countries[0];
// }
// let countries = funcShortest(['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика'])
// console.log(countries)

// Задание №7
// Напишите функцию которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например:
// func('hello', 'l')
// Вернет число 2, т.к в слове 'hello' две буквы 'l'

// ОТВЕТ:
// function func(str, letter) {
//   let sum = 0
//   for(let i = 0; i < str.length; i++){
//     if (str[i] === letter) {
//       sum += i
//       console.log(sum)
//     }
//   }
// }
// func('hello', 'l')

// Задание №8
// Напишите функцию которая принимает число и возвращает его факториал.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// Пример:
// 5! = 1*2*3*4*5 // ответ 120
// 6! = 1*2*3*4*5*6 // ответ 720

// ОТВЕТ:
// function factorial(a) {
//     if (a === 0) {
//       return 1;
//     }
//     return a * factorial(a - 1);
//   }
//   console.log(factorial(5));
//   console.log(factorial(6))

// Задание №9
// Напишите функцию, которая принимает два аргумента x и y, затем возвращает
// массив из чисел в диапазоне от x до y.
// Например:
// funс(1, 5)
// Вывод должен быть - [1, 2, 3, 4, 5]

// ОТВЕТ:
// function num(x, y) {
//     let arr = [];
//     for (let a = x; a <= y; a++) {
//       arr.push(a);
//     }
//     return arr;
//   }
//   console.log(num(5, 10));

// Задание №10
// Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

// ОТВЕТ:

// Группа A =======================================================

// Задание №11
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

//  ПОВЕРХНОСТНОЕ И ГЛУБОКОЕ КОПИРОВАНИЕ ОБЪЕКТОВ

// let user = {
//     name: "Aisultan",
//     age: 20,
//     languages: {
//         english: "2 level",
//         french: "3 level"
//     }
// };
// // let newUser = user;
// // let newUser = Object.assign({}, user) // ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ
// let newUser = { ...user }; // ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ ... (spread operator)
// newUser.name = 'Aibek'
// newUser.languages.english = "6 level"
// console.log(user);
// console.log(newUser);


// let product = {
//     title: 't=short',
//     price: {
//         s:3000,
//         m:4000,
//         l:2000,
//     }
// }

// let newrProduct = JSON.parse(JSON.stringify(product)) // ГЛУБОКОЕ КОПИРОВАНИЕ
// newrProduct.price.s = 10000
// console.log(product);
// console.log(newrProduct);
// let str = JSON.stringify(product)
// let obj = JSON.parse(str)
// console.log(obj);
// console.log(str);
// console.log(product);



//ДЕСТРУКТУРИЗАЦИЯ

// let student = {
//     name: 'melis',
//     lastName: "Artykbaev",
// };
// // let name = student.name
// // let lastName = student.lastName
// let name = "Sanzhar"
// let {name: studentName, lastName} = student
// console.log(studentName, lastName);

// let arr =["true", 10, null, "str", 77, false]
// // let boolean = arr[0];
// // let boolean = arr[1];
// let [boolean, , type, ...rest] = arr
// let [first, second] = rest
// console.log(boolean,type,rest);
// console.log(first, second);

// let obj = {
//     name: "market place",
//     frameworks: ["react", "django Api"],
//     version: {
//         legasy: [2011, 2012, 2013]
//     },
// }
// let {frameworks: [frontedFrameWork]} = obj
// console.log(frontedFrameWork);
// let {version: {legasy : [, firstelem]}} = obj
// console.log(firstelem);
// let {name: projectName} = obj
// console.log(projectName);

// let product = {
//     // title: "Pencil",
//     price: 100,
// }
// let {title = "Default title"} = product
// console.log(title);

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let user = {
//     //  name: 'John', 
// 'age': '22', }
// let { name = prompt("enter your name")} = user
// console.log(name);


// function showNameAndPhone({name, phone}){
//     console.log(name, phone);
// }
// let obj = {
//     name: "Shergazy",
//     phone: 777222323
// };
// showNameAndPhone(obj)

// function func([first, second]) {
//     console.log(first,second);
//     // let [first, second] = arg
//     // arg.forEach((item) => {
//     //     console.log(item);
//     // })
// }
// func([1, 2, 3, 4, 5])

// function showUser ({name = "Uluk", lastName,age} = obj) {
// console.log(name,lastName,age);
// }
// let obj = {
//     // name: "Ishak",
//     lastName: "Boolobekov",
//     age:24
// }
// showUser()

// Вам дан объект с информацией о книге.С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//       title: 'The Hobbit, or There and Back Again',
//       description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//       texts: [ {
//         author: 'J. R. R. Tolkien',
//         price: 120,
//         ISBN: '912-6-44-578441-0'
//       } ]
//     }
//    ];
// let [{ texts: [{ISBN}]}] = courseCatalogMetadata
// console.log(ISBN);

// ДЛЯ ЗАКРЕПЛЕНИЯ

// let arr = [
//     { id: 1 },
//     { id: 1 },
//     { id: 1 },
//     { id: 1 },
//     { id: 2 },
//     { id: 2 },
//     { id: 2 },
//     { id: 3 },
//     { id: 3 },
//     { id: 3 },
// ]
// function unig (arg) {
//     let unigArr = []
//     arg.forEach((item) => {
//         let check = unigArr.filter(elem => item.id === elem.id)
//         console.log(check);
//         if(check.length === 0) {
//             unigArr.push(item)
//         }
//     });
//     return unigArr
// }
// let newArr = unig(arr)
// console.log(newArr);


// let arr = [1,1,1,2,3,3,4,5,5]
// let newArr = []
// arr.forEach((item) => {
//     let check = newArr.filter(elem => {
// console.log("это элем", elem, "Это item", item);
// return elem === item;
//     }) 
//     if(check.length === 0){
// newArr.push(item)
//     }
// })
// console.log(newArr);


// let nums = [10,21,15,5]
// let newArr = nums.map((item) => item ** 2)
// console.log(newArr);

// let student = {
//     name: 'aibek',
//     courses: {
//         javascrit: {
//             price: 200,
//             duration: 3
//         },
//         python: {
//             position: "intro",
//             lesson: 1,
//         }
//     }
// }
// let {courses:{python:{position}}} = student
// console.log(position);

// let user = {
//     name: "igor",
//     age: 25,
//     friends:["Ilyas", "kostya"],
//     children: [
//         {name:'nikolay', age: 3},
//         {name:'petr',age:10}
//     ],
//     parents: [
//         {name:'Victor', age: 55},
//         {name: "Vasilisa", age: 53, friends: {
//             close:["Shergazy", "Aleksandra"],
//             notclose:[]
//         }},

//     ],
//     jobs: {
//         frontEnd: {
//             language: "Javascript",
//         },
//         backEnd: {
//             languages: {
//                 java: {
//                     version: 8,
//                     frameworks: {
//                         spring: {
//                             version: 1,
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// // let {children: [, secondChild]} = user
// // console.log(secondChild);

// let {parents: [,{friends:{close:[,women]}}]} = user
// console.log(women);

// let {jobs:{backEnd:{languages:{java:{frameworks:{spring:{version}}}}}}} = user
// console.log(version);

// cacAge(18)
// function cacAge(age) {
//     let days = age * 365
//     console.log(days);
// }

// const cacAge = (age) => {
//     let days =age * 365
//     console.log(days);
// }
// cacAge(18)


// const calcSquere = function() {
//     console.log(arguments);
//     let [firstNum, secondNum] = arguments
//     console.log(firstNum,secondNum);
// }
// calcSquere(3,5)

// let arr = [-100, 100, 330, -500]
// let newArr = arr.filter((item, index, array) => {
// return item < 0
// })
// console.log(newArr)


// let gamer = {
//     psevdoName: "Tuda_Suda",
//     games:["Gta", 'dota 2', 'cs:go'],
//     showUserGames(){
//         this.games.forEach((item) => {
//     console.log(item);
//         })
//     }
// }
// gamer.showUserGames()

// let arr =[20,-15,30]
// let count = 0
// let result = arr.reduce((prevValue, currentValue) => {
//     count++
//     return prevValue * currentValue
// },1) //prevValue
// console.log(count);
// console.log(result);


// let str = ""
// function first () {
//     return function(word){
//         return str += word
//     }
// }
// let func = first()
// console.log(func("hello"));
// console.log(func(" word"));
// console.log(func(" !"));
// let newFunc = first
// console.log(newFunc("coding "));
// console.log(newFunc("is coding"));



// function func(word) {
//     let str = ""
//     return (str += word)
// }
// console.log(func("hello"));
// console.log(func(" word"));
// console.log(func(" !"));


// function rec (start) {
//     if(start % 2 === 0){
//         console.log(start);
//     }
// if(start >= 100) return
// rec(start + 1)
// }
// rec(1)

// for(let i = 0; i <= 100; i){
//     console.log(i);
// }

// let i = 0
// while (i <= 100) {
//     console.log(i);
//     i++
// }


// let i = 101
// do {
//     console.log(i);
//     i++
// }while (i <= 100)


// console.log(true && true);


// let arr = [1,2,3,4,-5,-8]
// if(item)
// return item
// console.log(newArr);


// Задание №1
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.

//Ответ:
// function task1 (num1, num2) {
//   let result = num1 + num2
//   return result
// }
// let sum = task1 (55, 20)
// console.log(sum)

// Задание №2
// Дано число 5, выведите все числа от 5 до 1 используя рекурсию.

// Вывод в консоль:
// 5
// 4
// 3
// 2
// 1

//Ответ:
// function task2 (num){
//     console.log(num)
//     const newNum = num -1
//     if(newNum > 0) {
//       task2 (newNum)
//     }
//   }
//   task2 (5)

// Задание №3
// Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// Например, строка «JavaScript» должна стать строкой «tpircSavaJ».

//Ответ:
// let task3 = (str) => {
//     if (str === '') {
//       return '';
//     } else {
//       return task3 (str.substr(1)) + str.charAt(0);
//     }
//   }
//   console.log(task3('«JavaScript»'));

// Группа B =============================================================

// Задание №4
// Напишите функцию которая принимает
// массив с названиями стран и возвращает
// страну с самым длинным названием,
// затем напишите вторую функцию которая возвращает
// страну с самым коротким названием.

//Ответ:
//Longest countries
// let countries = ['Норвегия', 'Корея', 'Япония', 'Италия']
// function funcLongest(countries) {
//   countries.sort((a,b) => b.length - a.length);
//   return countries[0];
// }
// console.log(countries[0])

//Shortest countries
// function funcShortest(countries){
//   countries.sort((a,b) => a.length - b.length);
//   return countries[0];
// }
// let countries = funcShortest(['Норвегия', 'Корея', 'Япония', 'Италия'])
// console.log(countries)

// Задание №5
// Сделать реверс слова через рекурсию (используйте методы substr() и charat())

//Ответ:
// function reverse (str){
//       if (str === '') {
//         return '';
//       } else {
//         return reverse(str.substr(1)) + str.charAt(0);
//       }
//     }
//     console.log(reverse('String'));

// Задание №6
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

//Ответ:
// let task6 = (min) => {
//   if (min >= 0 && min < 15) {
//     return ' В первую четверть ';
//   } else if (min > 16 && min < 31) {
//     return ' Во вторую четверть ';
//   } else if (min > 32 && min < 45) {
//     return ' В третью четверть ';
//   } else if (min > 46 && min <= 59) {
//     return ' В четвертую четверть';
//   }
// };
// console.log(task6(47));

// Задание №7
// Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза.
// Пример:
// input: "2aaa'3'bbb'4'"
// output: "2aaa'6'bbb'8'"

//Ответ:
// let match = 0;
// let result = "2aaa'6'bbb'8'".replace(/\d+(?=')/g, function (match) {
//   return match * 2;
// });
// console.log(result);

// Группа A ==============================================================

// Задание №8
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

//Ответ:

// function task8 (str) {
//   let sum = 0
//     for(let i = 0; i < str.length; i++){
//       if ([i] === str) {
//         sum += i
//         console.log(sum)
//       }
//     }
//   }
//   task8('hello')

// Задание №9
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и false – если не совпадает.

//Ответ:
// function makePassword (password) {
// return function

// }

// Задание №10
// Создайте объект person со свойством name, реализуйте метод introduce() который будет выдавать
// имя объектa

//Ответ:
// let person = {
//         name: 'Kani',
//         introduce() {
//             console.log(this.name)
//         }
//     }
//     person.introduce()

// Задание №11
// С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com.
// Пример:
// 1)  input: 'google'
//     output: false

// 2)  input: 'google.com'
//     output: true

//Ответ:
// let task11 = "google.com"
// let regexp = /(\w+\.)+\w+/g
// let result = regexp.test(task11)
// console.log(result);

// let task111 = "google"
// let regexp = /(\w+\.)+\w+/g
// let result = regexp.test(task111)
// console.log(result);

// Методы массивов. Задачи на закрепление.

// Задание № 1
// Написать функцию, которая получает в
// качестве параметра массив, затем перебирает
// все его элементы и выводит на экран сам
// элемент, а также тип данных элемента - числовой, не числовой
// Пример: [‘Молоко’, 77, 11, ‘Мед’, -88];
// Ответ: 	Молоко-не число
// 77-число и т.д.

//Ответ:
// let arr = ['Молоко', 77, 11, 'Мед', -88]
// let arr2 = (arr) => {
//   for(let i = 0; i < arr.length; i++ ) {
//     if(typeof arr[i] === "number") {
//       console.log(`${arr[i]}-число`)
//     } else {
//       console.log(`${arr[i]}-не число`)
//     }
//   }
// }
// arr2(arr)

// Задание № 2
// Напишите функцию, определяющую,
// присутствует ли заданный элемент в массиве.
// В качестве результата работы функции можно
// выдавать логическое значение true и индекс
// этого элемента, если элемент найден,
// и false — в противном случае.
// Пример: ['Молоко’, 20, 40, “дом”, 30]
// Ввод: 40
// Вывод: true 2

// Ответ:
// let arr = ['Молоко', 20, 40, 'дом', 30];
// let newArr = arr.includes(40);
// let arr2 = arr.indexOf(40)

// console.log(newArr, arr2);;

// Задание № 3
// Найдите сумму чисел в массиве
// методом forEach(), методом reduce() и map().
// Пример: [5, 6, 7, 8, 9]
// Ответ: 35

// Ответ:
//forEach
// function sumArray(arr) {
//   let total = 0;
//   arr.forEach(function(element){
//       total += element;
//   })
//   return total;
// }
// let sum = sumArray([5, 6, 7, 8, 9])
// console.log(sum)

//reduce
// let arr = [5, 6, 7, 8, 9].reduce(add, 0);

// function add(a, b) {
//     return a + b;
// }
// console.log(arr);

//map
// let  arr = [5, 6, 7, 8, 9]
// let sum = 0
// arr.map(function(item){
//     sum += item;
// });
// console.log(sum)

// Задание № 4
// Оставьте в массиве только те строки,
// длина которых равна или больше 5-ти символов.
// Используйте filter().
// Пример: [‘aaa’, ‘aaaqqq', ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]
// Ответ:  [‘aaaqqq', ‘zzzqq’]

//Ответ:
// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
// function arr1(item){return item.length > 4};
// let newArr = arr.filter(arr1);
// console.log(newArr);

// Задание № 5
// Дан массив, в нем могут быть обычные
// элементы и подмассивы.
// Оставьте в нем только подмассивы.
// Используйте filter().
// Пример: [1, 2, [3, 4], 5,[6, 7]]
// Ответ:  [[3, 4],[6, 7]]

//Ответ:
// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let newArr = arr.filter((item) => {
//   return Array.isArray(item);
// });
// console.log(newArr);

// Задание № 6
// Напишите функцию которая принимает в аргументы массив и элемент массива, и удаляет переданный элемент
// из массива.
// Например: remove_array_element([2, 5, 9, 6], 5);
// Вывод: [2, 9, 6]

//Ответ:
// let arr = [2, 5, 9, 6]
// let newArr = (item, arg) => {
//  arr.splice(arr.indexOf(arg), 1)
//  return arr
// };
// console.log(newArr(arr, 5))

// Задание № 7
// Дан массив с числами. Найдите сумму
// первых N элементов до первого нуля.
// Например здесь суммируем первые 3 элемента, так как
// дальше стоит элемент с числом 0.
// Пример: [1, 2, 3, 0, 4, 5, 6]
// Ответ: 6
// Используйте slice() и reduce().

//Ответ:
// let arr = [1, 2, 3, 0, 4, 5, 6]
// let result = arr.slice(0,3).reduce((item, elem) => {
//   return item + elem
// })
// console.log(result)

// Задание № 8
// Дан массив с числами. Напишите функцию, которая
// вычисляет сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось 10?
// Пример:  [3, 1, 4, 2, 4, 5, 6]
// Ответ: 6

//Ответ:
// let num = [3, 1, 4, 2, 4, 5, 6]
// function arraySum(array){
//   let sum = 0
//   for(let i = 0; i < array.length; i++){
//       sum = array[i];
//       }
//   console.log(sum);
//   }
//   arraySum(num);

// Задание № 9
// Напишите функцию, которая принимает массив и состоящий из строк
// и возвращает новый массив состояший только из первых и последних
// букв каждой строки
// Например: ['hi', 'goodbye', 'smile']
// Вывод: ['hi', 'ge', 'se']

//Ответ:
// let str = ['hi', 'goodbye', 'smile']
// let newStr = str.map(item => item[0] + item[item.length-1])
// console.log(newStr)

// Задание № 10
// Дан массив с числами. Вывести количество
// отрицательных чисел в этом массиве.
// Пример: [7, -1, -9, 0, 4, 5, -6]
// Ответ: 3

// Ответ:
// let arr = [7, -1, -9, 0, 4, 5, -6]
// let newArr = arr.filter((item) => {
//       return  item < 0
//   })
//   console.log(newArr);

// Задание №11
// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
// Каждый вызов данной функции должен возвращать массив с
// разным порядком элементов массива.
// Пример: дан массив [4, 8, 12, 16]
// Вывод: [8, 16, 4, 12], следующий запуск выдаст также
// другой порядок элементов - [12, 4, 16, 8]

//Ответ:
// let arr = [4, 8, 12, 16]
// function shuffle(arr){
//   let result = []
//   arr.forEach((item) => {
//     if (result.length === 0) {
//       result.push(item)
//     }else {
//       result.splice(Math.trunc(Math.random() * result.length), 0,item)
//     }
//   })
// return result
// }
// console.log(shuffle(arr))

// Задание №12
// Напишите функцию которая возвращает массив,
// содержащий только уникальные элементы.
// Пример: ['apple', 'orange', 'apple', 'pear']
// Вывод: ['apple', 'orange', 'pear']

//Ответ:
// let str = ['apple', 'orange', 'apple', 'pear']
// function func(str) {
//   let result = []
//   for(let arr of str ) {
//     if(!result.includes(arr)){
//       result.push(arr)
//     }
//   }
//   return result
// }
// console.log(func(str))


// Задание №14
// Напишите функцию которая принимает в качестве аргумента массив состоящий из объектов
// (с элементами в виде ключей и значений), а также две новые строки.
// И добавляет новую пару ключ и значение, состоящих из указанных строк,
// к каждому из объектов массива
// Например: myFunc([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
// Вывод:[{name: 'Elie', title:'instructor'},
// {name: 'Tim', title:'instructor'},
// {name: 'Matt', title:'instructor'},
// {name: 'Colt', title:'instructor'}]

//Ответ:
// function myFunc(arr) {
//     arr.forEach((elem, index, arr) => {
//       return;
//     });
//   }
//   console.log(
//     myFunc(
//       [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
//       'title',
//       'instructor'
//     )
// )

// Методы массивов. Домашняя работа.

// Группа С ======================================================
// Задание №1
// Дан массив:
// let task1 = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// Создайте новый массив, в котором будут
// только положительные числа из массива arr.
// Используйте метод .filter()

//Ответ:
// let task1 = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// let newTask1 = task1.filter(item  => {
//     return item >= 2
//   })
//   console.log(newTask1)

// Задание №2
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

//Ответ:
// let task2 = [10, 25, 25, 15, 5, 10];
// task2.forEach((item, index, array) => {
//   alert(item, index, array);
// });

// Задание №3
// 	Дан массив
// let task3 = [175, 50, 25];
// Вычтите числа в массиве начиная с начала и
// выведите результат в консоль.
// Например: 175-50-25=100
// Используйте метод .reduce()

//Ответ:
// let task3 = [175, 50, 25];
// let result = task3.reduce((a, b) => a - b);
// console.log(result);

// Задание №4
// 	Напишите функцию, которая определяет
// максимальный элемент массива.
// Нельзя использовать .sort()!
// Массив для примера:
// let task4 = [4, 15, -4, 27, 12, 8];

//Ответ:
// let task4 = [4, 15, -4, 27, 12, 8];
// let func = (task4) => {
//   let max = task4[0];
//   task4.forEach((item) => {
//     if (item > max) {
//       max = item;
//     }
//   });
//   return max;
// };
// console.log(func(task4));

// Задание №5
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

//Ответ:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// function arr() {
//   let obj = {};
//   task5.forEach((item) => {
//     if (obj[item]) {
//       obj[item] = obj[item] + 1;
//     } else {
//       obj[item] = 1;
//     }
//   });
//   let max = 0;
//   for (let item in obj) {
//     if (obj[item] > max) {
//       max = obj[item];
//     }
//   }
//   return max;
// }
// console.log(arr(task5));

// Группа B=========================================================

// Задание №6
// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
// Используйте forEach() и push()

//Ответ;
// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = [];
// arr.forEach((item) => {
// 	newArr.push(item * item);
// });
// console.log(newArr)

// Задание №7
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// Используйте every()

// //Ответ:
// let arr = [3, 10, 12, 24];
// let result = arr.every( item => item > 0)
// console.log(result);

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

//Ответ:
// let arr = ['saske', 'sakura', 'k2'];
// let newArr = arr.filter(item => item.length > 5);
// console.log(newArr);

// Задание №9
// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
// Используйте метод reduce()

//Ответ:
// let arr = [1, 2, 3, 0, 4, 5, 6];
// let newArr = 0;
// let result = arr.reduce(function (sum, item) {
//   if (item == 0) {
//     newArr = sum;
//   } else {
//     return sum + item;
//   }
// });
// console.log(newArr);

// Задание №10
// Дан массив ["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]
// Отразите текст из массива на странице в соответствующих тегах
// includes() и любой метод перебора массива
// т.е. на страничке должны появиться строки вместе с названиями тегов

//Ответ:
// let arr = ["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]
// let result = arr.includes(item => item = item)
// console.log(result);

// Группа А=========================================================

// Задание №11
// Создайте новый массив, в который возвращается объект, составленный из значений вложенных массивов. Первые элемент массива - ключ, второй - значение.
// Используйте метод reduce()

// let data = [['a', 1], ['b', 2]];
// Вывод:
// {
//     'a': 1,
//     'b': 2
// }

//Ответ:
// let data = [['a', 1], ['b', 2]];

// Задание №12
// дан двумерный массив
// let arr = [1,2, [4,5,6], [7,8]]
// выведите сумму всех элементов
// используйте reduce()

//Ответ:
// let arr = [1,2, [4,5,6], [7,8]]
// let result = arr.reduce((item) => {
// 	return item + item
// });
// console.log(result);


// / RegExp. 


// Задание №5
// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных. Замените их на слово Good.
// Пример:
// input: 'aAXa aeffa aGha aza ax23a a3sSa'
// output: 'aAXa Good aGha Good ax23a a3sSa'

//Ответ:
// let str = 'aAXa aeffa aGha aza ax23a a3sSa'
// console.log(str.replace(/a[a-z]+a/g, 'Good'))

// Задание №6
// Дана строка 'ae1ea aeea a3544a a1a axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз. Замените их на слово many.
// Пример:
// input: 'ae1ea aeea a3544a a1a axxa axxxa'
// output: 'ae1ea many a3544a a1a many many'

// Ответ:
// let str = 'ae1ea aeea a3544a a1a axxa axxxa'
// console.log(str.replace(/a[a-z]+a/g, 'many'))

// Задание №7
// Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.
// Пример:
// input: '10 6 3 2'
// output: '100 36 9 4'

//Ответ:
// let str = '10 6 3 2'.replase(/\d+)/g, function (match) {
//   return match * match;
// });
// console.log(str);

// Задание №8
// Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза.
// Пример:
// input: "2aaa'3'bbb'4'"
// output: "2aaa'6'bbb'8'"

//Ответ:
// let match = 0;
// let result = "2aaa'3'bbb'4'".replace(/\d+(?=')/g, function (match) {
//   return match * 2;
// });
// console.log(result);

// Задание №9
// Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции.
// Пример:
// input: '23 + 35 ='
// output: '23 + 35 =58'

//Ответ:
// let str = '23 + 35 ='
// .replace(/(\d+)\s\+\s(\d+)\s=/g,
// function (match, match1, match2) {
// let res = parseInt(match1) + parseInt(match2);
//  return match + res;
//     }
//   );
//   console.log(str);

// Задание №10
// С помощью test определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.
// Пример:
// 1)  input: '1955'
//     output: true

// 2)  input: '2200'
//     output: false

//Ответ:
// let str = "1995"
// let regexp = /^\d\d|\d|\d$/
// let result = regexp.test(str)
// console.log(result);

// Задание №11
// С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.
// Пример:
// 1)  input: '09:15'
//     output: true

// 2)  input: '25.00'
//     output: false

// //Ответ:
// let time = "24:00"
// let regexp = /^\d\d:\d\d$/;
// let result= regexp.test(time)
// console.log(result);

// Задание №12
// С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com.
// Пример:
// 1)  input: 'google'
//     output: false

// 2)  input: 'google.com'
//     output: true

//Ответ:
// let str = "google"
// let regexp = /(\w+\.)+\w+/g
// let result = regexp.test(str)
// console.log(result);

// Задание №13
// Удалите одной регуляркой все повторяющиеся слова из строки.
// Пример:
// 1)  input: 'dsf xxx xxx sd'
//     output: 'dsf xxx sd'

// 2)  input: 'dsf xxx xxx xxx sd'
//     output: 'dsf xxx sd'

// Ответ:
// let str = 'dsf xxx xxx sd'.replace(/\b(\w+)\s+\1/g, "$1");
// console.log(str)

// Задание №14
// Напишите программу на JavaScript для подсчета количества слов в строке с помощью регулярного выражения.
// Примечание:
// - Удалите пробелы из начальной и конечной позиции.
// - Преобразовать 2 или более пробелов в 1
// Пример:
// input: 'this string has five words'
// output: 5

//Ответ:
//   function count(str) {
//   let counter = 1;
//   str.replace(/(\s+)/g, function (a) {
//       counter++;
//   });
//   return counter
// }
// console.log(count('this string has five words'))

// Задание №15
// Напишите функцию JavaScript для печати целого числа с запятыми в качестве разделителей тысяч.
// Пример:
// 1)  input: '1000'
//     output: '1,000'

// 2)  input: '10000000000'
//     output: '10,000,000,000'

//Ответ:
//  let str = '1000';
// console.log(str.replace(/\B(?=(\d{3})+(?!\d))/g, ','));


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

// Задание №2
// 	let arr = [“hello”, 25, true, {}]
// Напишите функцию, которая перебирает массив arr через рекурсию и выводит каждый элемент в консоль.

// Вывод в консоль:
// hello
// 25
// true
// {}

//Ответ:
// let arr = ['hello', 25, true, {}];
// function showArr(arr, n = 0) {
//   if (n === arr.length) return;
//   console.log(arr[n]);
//   showArr(arr, n + 1);
// }
// showArr(arr);

// Задание №3
// Напишите функцию которая принимает число и возвращает его факториал используя рекурсию.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// 5! = 1*2*3*4*5 =120
// 6! = 1*2*3*4*5*6 = 720

// Вызов функции: recFactorial(5)
// Вывод в консоль:
// 120

//Ответ:
//  function recFactorial(n) {
//   return (n != 1) ? n * recFactorial(n - 1) : 1;
// }

// console.log(recFactorial(5));
// console.log(recFactorial(6));

// Задание №4
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//   //Допишите ф-ю
// }
// // Пример:
// const res = foo(3)(4);
// console.log(res); //7

// function foo(a) {
//     //Допишите ф-ю
//   }
//   // Пример:
//   const res = foo(3)(4);
//   console.log(res); //7

//Ответ:
// let count = 0;
// function counter(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// let countNum = counter(4);
// console.log(countNum(3));

// Задание №5
// Создайте функцию, которая считает и выводит количество своих вызовов. (решите с помощью замыкания)

// Пример

// func(); //Первый вызов выведет 1
// func(); //Второй вызов выведет 2
// func(); //Третий вызов выведет 3
// func(); //Четвертый вызов выведет 4

//Ответ:
// function count() {
// 	let i = 1;
// 	return function() {return i++};
// }
// let func = count();

// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// Задание №6
// Дана последовательность натуральных чисел от 0 до N. Напишите код, который запрашивает число N и выводит все нечетные числа из этой последовательности, сохраняя их порядок.

//Ответ:
// function checkNum(n) {
//   if (n <= 0) return 0;
//   if (n % 2 === 1) {
//     console.log(n);
//     checkNum(n - 1);
//   } else {
//     checkNum(n - 1);
//   }
// }
// checkNum(10);

// Группа B ====================================================

// Задание №7S

// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

//Ответ:
// function limit (num){
//   if(num <= 1000){
//     console.log(num)
//     limit(num+num)
//     console.log(num)
//   } return
// }
// limit(50)

// Задание №8
// Сократить слово до нуля через рекурсию (используйте метод substr())

//Ответ:
// function func(str) {
//   console.log(str);
//   if (str.length === 0) {
//     return;
//   }
//   func(str.substr(1));
// }
// func('makers');

// Задание №9
// Сделать реверс слова через рекурсию (используйте методы substr() и charat())

//Ответ:
// function reverse(str) {
//   if (str === '') {
//     return '';
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(reverse('Bootcamp'));

// Задание №10

// Напишите функцию с замыканием, которая принимает в родительской функции, в аргументы - Имя и Фамилию, а в дочерней объединяет их и передает обратно в родительскую, а также затем выводит в консоль "Hello *Имя *Фамилия"
// Например:
// Ввод: sayHi("John", "Doe")
// Вывод: "Hi John Doe"

//Ответ:
// function init(str) {
//   let name = "John";
//   function displayName() {
//       console.log(name);
//   }
//   displayName("John", "Doe");
// }
// init()

// Группа А ====================================================

// Задание №11

// Напишите функцию, которая будет высчитывать сумму квадратов заданных чисел (некоторые могут лежать во вложенных массивах) (используйте рекурсию)
// Пример:

// let arr = [1,2,3];
// console.log(sumSquare(l)); // 1 + 4 + 9 = 14

// arr = [[1,2],3];
// console.log(sumSquare(l)); // 1 + 4 + 9 = 14

// arr = [[[[[[[[[1]]]]]]]]]
// console.log(sumSquare(l)); // 1 = 1

// arr = [10,[[10],10],[10]]
// console.log(sumSquare(l)); // 100 + 100 + 100 + 100 = 400

//Ответ:
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// Задание №12
// Напишите функцию, которая возвращает количество цифр, встречающихся в многоуровневом массиве (используйте рекурсию)

// Пример:

// Ввод: let count = countNumbers([[[5], 3], 0, 2, ['test'], [], [4, [5, 6]]])
// Вывод: 7

//Ответ:
// function count(int n)
// {
//     if (n/10!=0)
//         return 1+count(n/10);
//     else
//         return 1;
// }

// function sum (int n)
// {
//     if (n/10!=0)
//         return n%10+sum(n/10);
//     else
//         return n%10;
// }

// Задание №13
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и false – если не совпадает.

//Ответ:
// function makePassword()

// Задание №14
// Создайте функцию, вызов которой вернёт числа в промежутке между X и Y.

// Ввод : interval(5, 10)
// Вывод : [6, 7, 8, 9]

// Задание №15
// Напишите функцию, принимающую в себя 2 аргумента - первый основание, а второй показатель степени. Функция должна выводить в консоль результат

// Например:
// Ввод: pow(2, 4)
// Вывод: 16

//Ответ:
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// pow(2, 4);


// Стрелочные функции, методы объектов, this.  Домашняя работа.

// Группа C ======================================================
// Задание №1
// Перепишите данную функцию в стрелочную функцию.
// function showFirstMessage() {
//     console.log("Hello World!");
// }
// showFirstMessage()

//Ответ:
// let showFirstMessage = () =>{
// console.log("Hello World!")
// }
// showFirstMessage()

// Задание №2
// Напишите стрелочную функцию birthday которая будет принимать age и name,
// и будет поздравлять этого человека.

//Ответ:
// let showList = (age, name) => console.log(`Happy ${age}th birthday, ${name}!`);
// showList(20, "Lisa");

// Задание №3
// Дан массив с именами, добавьте is cool в конец каждой имени.

//Ответ:
// let names = ["Naruto", "Sakura", "Saske"];
// let fullNames = names.map(function(name) {
//  return `${name} cool`;
// });

// console.log(fullNames)

// Задание №4
// Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// Например, строка «JavaScript» должна стать строкой «tpircSavaJ».

//Ответ:
// let reverse = (str) => {
//     if (str === '') {
//       return '';
//     } else {
//       return reverse(str.substr(1)) + str.charAt(0);
//     }
//   }
//   console.log(reverse('«JavaScript»'));

// Задание №5
// Реализуйте стрелочную функцию, принимающую строку и символ и возвращающую количество символов в строке.
// Например, если мы передаем «JavaScript» и «a», то должны получить 2 (в строке «JavaScript» две буквы «a»).

//Ответ:
// let sum = 0;
// let func = (arg1,arg2) => {
//   for(let i = 0; i < arg1.length; i++) {
//     if(arg1[i] === arg2){
//       sum++
//     }
//   }
// }
// func('JavaScript','a')
// console.log(sum)

// Группа B ======================================================

// Задание №6
// Дан массив arr = [1, 2, 3, 4, 5], при помощи стрелочных функций реализуйте пункты a и b.
// a) умножьте каждый элемент массива на 5.
// b) отфильтруйте массив по четным числам.

// Ответ:
// let func = (arr) => {
//   arr = arr.map((item) => item * 5);
//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] % 2 === 1) {
//     //   arr.splice(i, 1);
//     // }
//   }
//   return arr;
// };
// console.log(func([1, 2, 3, 4, 5]));

// Задание №7
// Создайте стрелочную функцию с одним аргументом,
// если в этом аргументе хранится строка “User” выведите
// alert Hello User, иначе выведите alert “Error” .

// //Ответ:
// let arrowFunc = (arg1) => {
//   if( arg1 === 'User') {
//   alert('Hello User')
//   }else {
//     alert('Error')
//   }
// }
// arrowFunc('User')

// Задание №8
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

//Ответ:
// let func = (min) => {
//     if (min >= 0 && min < 16) {
//       return 'числo в первoй четвертe ';
//     } else if (min > 15 && min < 31) {
//       return 'числo во вторoй четвертe ';
//     } else if (min > 30 && min < 46) {
//       return 'числo в третьeй четвертe ';
//     } else if (min > 45 && min <= 59) {
//       return 'числo в четвертoй четвертe';
//     } else {
//       return 'дайте другое число';
//     }
//   };
//   console.log(func(15));

// Задание №9
// Функция принимает количество часов (проверить
// что это число). Функция возвращает
// количество секунд в переданых часах.

//Ответ:
// let hour = (hours) => hours * 60 * 60;
// console.log(hour(2));

// Задание №10
// В функцию передаются переменные first и second.
// Проверьте, что first делится без
// остатка на second. Если это так - возвращаете true,
// иначе возвращаете false.

//Ответ:
// let firstSecond = (first, second) => (first % second === 0 ? true : false);
// console.log(firstSecond(4, 3));
// console.log(firstSecond(4, 2));

// Группа A ======================================================

// Задание №11
// Создайте два объекта со свойствами language и framework.
// Затем, отдельно создайте функцию describe() который выводит свойства объектa.
// Примените describe() этим двум объектам.

//Ответ:
// let obj1 = {
//       language: 'English'
//   }
//   let obj2 = {
//       framework: 'class'
//   }
//   let describe = () => console.log(obj1.language, obj2.framework)
//   describe(obj1.language)
//   describe(obj2.framework)

// Задание №12
// Создайте объект group со свойствами title и students. Свойство students будет
// хранить масив с именами студентов. Так же реализуйте метод showList() который будет выдавать alert
// на title и на имя каждого студента.

//Ответ:
// let group = {
//   title: 'people',
//   students: ['Itachi', 'Levi', 'L'],

//   showList() {
//     for (let i = 0; i < this.students.length; i++) {
//       alert(`${this.students[i]} is a ${this.title}`);
//     }
//   },
// }
// group.showList()

// Задание №13
// Создайте объект person со свойством name, реализуйте метод introduce() который будет выдавать
// имя объектa

//Ответ:
// let person = {
//       name: 'Takemichi',
//       introduce() {
//           console.log(this.name)
//       }
//   }
//   person.introduce()

// Задание №14
// Создайте любой объект с несколькими свойствами и один метод который будет выдавать в консоле
// все ключи и значения этого объект.

//Ответ:
// / let obj = {
//       name: 'Askat',
//       surname: 'Askatov',
//       age: 23,
//       objInfo: () => {
//           console.log(obj);
//           console.log(obj.name, obj.surname, obj.age);
//       }
//   }
//   obj.objInfo()

// let obj = {
//   name: 'Kayamoto',
//   surname: 'Hinata',
//   age: '20',

//   describe() {
//     console.log(`name: ${this.name},
//     surname: ${this.surname},
//      age: ${this.age}`);
//   },
// };

// obj.describe();

// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

//Ответ:
// let elevator =  {
//     minFloor: 1,
//     maxFloor: 16,
//     current: 1,
//     printFloor(){
//         console.log(this.current);
//     },
//     upOneFloor(){
//         if(this.current < this.maxFloor) {
//             this.current++;
//             this.printFloor();
//         }else{
//             alert("ВЫ достигли максимального этажа");
//         }
//     },
//     downOneFloor(){
//         if(this.current > this.minFloor) {
//             this.current--;
//             this.printFloor();
//         }else{
//             alert("Вы достигли минимального этажа");
//         }
//     },
//     toFloor(floor){
//         if(floor <= 16 && floor >= 1) {
//             while(this.current !== floor){
//               this.current > floor ? this.downOneFloor() : this.upOneFloor();        
//             }
//         }
//         else {
//             alert("Такого этажа не существует");
//         }
//     }
// }

// elevator.printFloor();
// elevator.upOneFloor()
// elevator.downOneFloor()
// // elevator.downOneFloor()
// elevator.toFloor(14)
// elevator.toFloor(5) 

// Функции и области видимости. Домашняя работа

// Группа С =======================================================
// Задание №1
// Создайте функцию которая выводит в
// консоль “Hello World!”

//ОТВЕТ:
// let showMessage = function (message) {
//     console.log(message);
//   };
//   showMessage("Hello World!");

// Задание №2
// Напишите функцию hello(), которая при
// вызове будет возвращать строку:
// "Привет, JavaScript!"

//ОТВЕТ:
// function hello() {
//     return "Привет, Javascript!";
//   }
//   console.log(hello());

// Задание №3
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.

//ОТВЕТ:
// function arr(a, b) {
//       let result = (a + b);
//       return result;
//   }
//   let sum = arr(2, 2);
//   console.log(sum)

// Задание №4
// Напишите функцию, которая в качестве аргумента принимает
// число - возраст. Если возраст больше 18 выведите в
// консоль “Добро пожаловать”, иначе “Вход запрещен”

// Пример:
// console.log(func(18));
//  >>“Добро пожаловать”
// console.log(func(17));
//  >>“Вход запрещен”

//ОТВЕТ:
// function checkAge(age) {
//     if (age >= 18) {
//       return("Добро пожаловать");

//     } else {
//       return("Вход запрещен");

//     }
//   }
//   console.log(checkAge(18));
//   console.log(checkAge(17));

// Задание №5
// Напишите функцию, которая принимает целое число и возвращает сумму всех его цифр.
// Например: ввод 456, функция должна вернуть число 15, так как 4 + 5 + 6 = 15

//ОТВЕТ:
// function arr(num) {
//   let sum = 0;
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i])
//     return sum;
//   }
//   let sum = arr(456);
//   console.log(sum)
// }

// Группа B =======================================================

// Задание №6
// Напишите функцию которая принимает
// массив с названиями стран и возвращает
// страну с самым длинным названием,
// затем напишите вторую функцию которая возвращает
// страну с самым коротким названием.

// Например:
// let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// funcLongest(countries)
// Вернет строку 'Финляндия'
// funcShortest(countries)
// Вернет строку 'Лаос'

//ОТВЕТ:
// let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// function funcLongest(countries) {
//   countries.sort((a,b) => b.length - a.length);
//   return countries[0];
// }
// console.log(countries[0])

//Лаос
// function funcShortest(countries){
//   countries.sort((a,b) => a.length - b.length);
//   return countries[0];
// }
// let countries = funcShortest(['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика'])
// console.log(countries)

// Задание №7
// Напишите функцию которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например:
// func('hello', 'l')
// Вернет число 2, т.к в слове 'hello' две буквы 'l'

// ОТВЕТ:
// function func(str, letter) {
//   let sum = 0
//   for(let i = 0; i < str.length; i++){
//     if (str[i] === letter) {
//       sum += i
//       console.log(sum)
//     }
//   }
// }
// func('hello', 'l')

// Задание №8
// Напишите функцию которая принимает число и возвращает его факториал.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// Пример:
// 5! = 1*2*3*4*5 // ответ 120
// 6! = 1*2*3*4*5*6 // ответ 720

// ОТВЕТ:
// function factorial(a) {
//     if (a === 0) {
//       return 1;
//     }
//     return a * factorial(a - 1);
//   }
//   console.log(factorial(5));
//   console.log(factorial(6))

// Задание №9
// Напишите функцию, которая принимает два аргумента x и y, затем возвращает
// массив из чисел в диапазоне от x до y.
// Например:
// funс(1, 5)
// Вывод должен быть - [1, 2, 3, 4, 5]

// ОТВЕТ:
// function num(x, y) {
//     let arr = [];
//     for (let a = x; a <= y; a++) {
//       arr.push(a);
//     }
//     return arr;
//   }
//   console.log(num(5, 10));


// Задачи на закрепление тем. Week 3

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