//Методы массивов (forEach, map, filter, reduce,indexOf, includes, every, some)

// Коллбэк - ф/я которая передаетcя в аргумент, другой функции

// forEach
// let arr = ['boolean', 34, {}, true]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i , arr);
// }
// arr.forEach((item, index, array) => {
//     console.log(item, index, array);
// });

// map
// let arr = [1, 2, 3, 4, 'a', 6];
// let newArr = arr.map(function(item, index, array) {
//     if(item === 'a') {
//         return 5;
//     }
//     return item;
// })
// console.log(newArr);


//filter - 
// let numbers = [33, 2 ,43, 10, 15]
// let newArray = numbers.filter(item => {
//     return item > 15
// })
// console.log(newArray);


// let films = [
//     {
//         title: "Оно",
//         genre: "horror"
//     },
//     {
//         title:  "Venom",
//         genre: "fantasy"
//     },
//     {
//         titlt: "2 баатыр",
//         genre: "comedy"
//     },
// ]
// console.log(films);
// function handleFilter(genre) {
//     let filteredArr = films.filter((item) => {
//         return item.genre === genre
        
//     })
//     console.log(filteredArr);
// }
// handleFilter("comedy")

//reduce - перебирает массив, сокращает 
// let arr = [2, 4, 10, 12]
// let result = arr.reduce((prevValue, currentValue, index, array) => {
//     console.log(prevValue, currentValue);
//     return prevValue + currentValue
//     // console.log(prevValue, currentValue, index, array );
//     // return currentValue 
// })
// console.log(result);

//indexOf - находит и передает индекс
// let arr = [true, 1, 0, "str"];
// let result = arr.indexOf(true);
// console.log(result); 

// function cut(elem) {
//     let index = arr.indexOf(elem)
//     console.log(index);
//     arr.splice(index, 1)
// }
// console.log(arr);
// cut(false)
// console.log(arr);


//includes
// let arr = [10, 20, "array"]
// let result = arr.includes("str")
// console.log(result);

//some () and every
// let users = [
//     { id: 1, name: "Санжар"},
//     { id: 1, name: "Байэл" },
//     { id: 1, name: "Атай" },
// ];
// let result = users.every(item =>  item.id === 1);
// console.log(result);


// let arr = [1, 20, 30, -5]
// // let result = arr.every(item => item > 0);
// let result = arr.some(item => item > 0);
// console.log(result);


//find
// let users = [
//     { id: 1, name: "Санжар"},
//     { id: 1, name: "Байэл" },
//     { id: 1, name: "Атай" },
// ];
// let user =  users.find(item => item.name === "Атай")
// console.log(user);


//findIndex
// let users = [
//     { id: 1, name: "Санжар"},
//     { id: 1, name: "Байэл" },
//     { id: 1, name: "Атай" },
// ];
// let user =  users.findIndex(item => item.name === "Атай")
// console.log(user);


//
// let arr = [-15, 10, 24, 36, 0];
// let newArr = arr.map(item => item * 1.8 +32)
// console.log(newArr);

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()). 
// 
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]
// let updatedList = studentRecords.filter(item => item.marks > 50)
// updatedList = updatedList.map((item) => {
//     item.marks += 15
//     return item
// })
// console.log(updatedList);
// let ave = updatedList.reduce((prev, student) => {
//     console.log(prev, student);
//     return prev + student.marks
// }, 0)
// ave = ave / updatedList.length
// console.log(ave);

// let arr =[1,2,34,5,6]
// let max = arr[0]
// arr.forEach(item => {

// })

