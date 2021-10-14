// while, do while

// let arr = [1, 2, 3, 4, 5]

// let i = 0
// while (i <= arr.length) {
//     console.log(arr[i])
//     i++
// }


// let number = 1
// while(number <= 100) {
//     if (number % 2 !== 0 ) {
//         console.log(number)
//     }
//     number++
// }

// let i = 50 
// do {
//     console.log(i, "Сработает один раз")
// }while (i < 40 )


//for

// for(let i = 0; i < 20 ; i++) {
//     console.log(i)
// }


// let arr = ["Arstan", "Beksulnat", "Akai"]
// for (let i = 0; i < arr.length; i+++) {
//     console.log(arr[i])
//     if (arr[i] === "Beksultan")
//     alert(arr[i])
//     continue;
// }
// console.log('Код ниже')


// let users = [
//     {
//         name: "Askat"
//     },
//     {
//         name: "Sanzhar"
//     },
//     {
//         name: "Vladimir"
//     },
//     {
//         name: "Erlan"
//     }
// ]

// for(let i = 0; i < users.length; i++){
//     document.write(`<p>имя: ${users[i]}.name</p>`)
// }
// console.log(users)



//for of, for in

// for (let value of users) {
//     console.log(value)
// }

// for (let value in users) {
//     console.log(users[value])
// }

// let user = {
//     name: "Atai"
// }

// for (let key in user) {
//     console.log(user[key])
// }

// for (let value of user) {
//     console.log(value)
// }
//С помощью for in можно перебирать и обьекты, и массивы
// С помощью for of можно перебирать только массивы

// let number = 5
// console.log(number++) //икримент
// console.log(number--) //дикримент
// console.log(number)

// number +=1
// number = number +1

// let arr = [true, 7, 2, 'Hello', NaN]
// let sum = 0
// for(let i = 0; i <arr.length; i++) {
//     if (typeof arr[i] === 'number' && arr[i].toString() !== "NaN") {
//         sum += arr[i]
//     }
// }
// console.log(sum)

let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]
let positive = 0
let zero = 0
let negative = 0
for (let i = 0; i < arr.length; i++) { 
    if(arr[i] === 0 ) {
        zero++
    }
else if (arr[i] > 0) {
    positive++
}
else if (arr[i] < 0) {
    negative++
}
}
console.log(positive, zero, negative)


//task 13

// for (let item of arr) {
//     console.log(`${item[0]}`): (${ item[1]})
// }


// //task 14
// for (let i = 2; i <= n; i++) {
//     let s = 0
//     for (let x = 2; x <= 6; x++)
//         if (6 % x === 0) {
//             s++
//         }
//     if (s === 1) {
//         console.log(i)
//     }



// (четные числа не бывают простыми)