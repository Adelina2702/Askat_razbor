//Регулярные выражения

// Есть 2 способа создания рег. выражения

// const regexp1 = /coding/  //1 способ
// const regexp2 = new RegExp("coding") //2 способ

// const str = "coding is easy"
// let result = str.match(regexp1) || [];
// console.log(result);

// if (result.length > 0){
// console.log('есть');
// }else {
//     console.log('нет');
// }

//Флаги

// i игнорирует регистр
// g с этим флагом поиск ищет все совпадения, а без него только первое

// let regexp = /code/gi
// let str = "code, bad Code"
// let result = str.match(regexp)
// console.log(result);

//Метод строки match ищет и возвращает массив, если не найдено,то Null

// let str = "Работайте братья, работайте"
// let regexp = new RegExp("Работайте", "gi")
// let result = str.match(regexp)
// console.log(result);

//Метод строки replace - ищет совпадение и заменяет их
// let str = "Требуется мидл-разработчик"
// let regexp = /мидл/
// let result = str.replace(regexp, "джуниор")
// console.log(result) 
//Метод регулярного выражения test проверяет , есть ли хоть одно совпадение если да, то возвращает true, иначе false

// let str = "we can"
// let regexp = /We/
// let result = regexp.test(str)
// console.log(result);

// \d цифра от 0 до 9
// \s все пробелы
// \w символ, точнее буквы(буквы латинского алфавита) или _
// \D НЕ ЦИФРА, ВСЕ КРОМЕ ОТ 0-9 
// \S Не пробел, все кроме пробела
// \W символ, кроме латинских букв и _ не цифра
// . любой символ


// let str = "coding is easy"
// let regexp = /\w\w.\w\w\w\w/
// let result = str.match(regexp)
// console.log(result);

// Якоря
// ^ - начало строки
// $ - конец строки

// let time = "20:12"
// let regexp = /^\d\d:\d\d$/;
// let result= regexp.test(time)
// console.log(result);

//Наборы []

// let str1 = "mad"
// let str2 = "sad"
// let regexp = /[ms]ad/ //mad,sad 
// let result = str1.match(regexp)
// console.log(result);

//Диапазоны

// let str = "123456789"
// let regexp = /[1-9]/g
// let result = str.match(regexp)
// console.log(result);


//[0-9]
//[A-Z]
//[a-z]
//[а-я]
//[А-Я]

// Исключения
// let regexp = /[^aeiou]/  //все кроме этих букв

// Квантификаторы

// {n} количество

// let numbers = "12 555 3477"
// let regexp = /\d{3,4}/g
// let regexp = /\d+/g // плюс означает один или более символов
// let regexp = /\d?/
// let result = numbers.match(regexp)
// console.log(result);

// let str = "color or colour"
// let regexp = /colou?r/g
// let result = str.match(regexp)
// console.log(result);


// Скобочные группы
// mail.ru
// mail.gmail.ru

// let str = 'mail.gmail.ru'
// let regexp = /(\w+.)+\w+/g
// let result = str.match(regexp)
// console.log(result);

// let str = "brown, let, blue, lightblue"
// let regexp = /[aieou]/gi
// let result = str.match(regexp)
// console.log(resultlength);

// let str = '5 apples and 5 oranges';
// let regexp = /\d+/g;
// let newStr = str.replaсe(regexp, "пять");
// console.log(newStr);

 //Альтернация (или) '|"
// let str = "I know Java, Python, Flutter, JavaScript, Dart"
// let regexp = /Java(Script)?|Python|Flutter|Dart/g
// let result = str.match(regexp) 
// console.log(result);



