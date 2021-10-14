// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//forEach
// arr.forEach((item, index, array) => {
// // console.log(item);
// // console.log(index);
// console.log(array);
// })

// let newArr = arr.map((item) => {
//     return item + 10
// })
// console.log(newArr);

//map()

// arr.map((item, index, array) => {
//     // console.log(item);
//     console.log(index);
// })


//filter
// let newArr = arr.filter((item, index, array) => {
//     return item > 4
// })
// console.log(newArr);


// let str = 'Ivan, Misha, Andrei'
// let newStr = str.split (',')
// let filteredArr = str.split(',').filter (item =>  {
//     return item.length > 4
// })
// // console.log(filteredArr);
// console.log(newStr);


//indexOf
// let str = ['Ivan', 'Misha', 'Andrei'] 
// let index = arr.indexOf('Ivan');
// console.log(index);

// findIndex ()
// let index = arr.findIndex((item, index, array) => {
//     return item.length === 5
// })
// console.log(index);

// let arr = [
// {
//     name: 'Ivan'
// },
// {
//     name: 'Oleg'
// },
// {
//     name: 'Jonh'
// },
// {
//     name:'Aktan'
// },
// {
//     name:'Emily'
// },
// ]
// find()
// console.log(arr.find( item => item.name === 'Oleg'));
// console.log(arr.findIndex(item => item.name === 'Oleg'));


//every
// let arr = [1, 2, 3, 10, 12, 24];
// let result = arr.every((item, index, array) => {
//     return typeof item === 'number'
// })
// console.log(result);


//some
// let arr = [1, 2, 3, "10", 12, 24];
// let result = arr.some((item) => {
//     return typeof item === "string"
// })
// console.log(result);


// includes(element, fromIndex)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.includes(4, 5)
// console.log(result);

//reduce()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal, currIndex, array) => {
    // console.log(prevVal);
    // console.log(currVal);
    // console.log(currIndex);
//     console.log(array);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal) => {
//     return prevVal + currVal
// })
// console.log(result);


//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((a, b) => {
//     // console.log(a);
//     // return a + b
//     return [...a, b]
// }, [])
// console.log(result);

// alert(str)
// let str ="hello"

let arr = [1, 2, 5, 9, 4, 13, 4, 10]
for (let i = 0; i < arr.length; i++{
    if (arr === 4) {
        console.log("Есть")
    };
}