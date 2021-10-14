console.log("Hello World")

let string = "abcd";
let number = 10;
number = '20'
let boolean = true 
let typeNull = null
let typeUndefined = undefined
let object = {
    title: " Adidas Zoom", 
    color: "green",
    size: 42,
    'description-1': "Good shoes"
}
object.size = 37
let newObject = object
newObject.title = "Nike AirForse-1"
console.log(newObject)
console.log(object)

let firstStr = "JS12"
let secondStr = firstStr
secondStr = "JS13-FULLSTACK"
console.log(firstStr)
console.log(secondStr)


// alert, prompt, confirm

// let result = alert("Привет")
// console.log(result)
// let name = prompt("Введите ваше имя")
// alert("Привет " + name)


// let result = confirm("Вам есть 14 лет?")
// console.log(result)


// let num1 = '10' 
// let num2 = 20
// let sum = num1 + num2
// console.log(sum)


// console.log(typeof null)

// console.log(10 <= 10)
// console.log(10 >= 11)
// console.log(10 == '10')
// console.log(10 === '10')

// let num1 = +prompt("Введите первое число")
// let num2 = +prompt('Введите второе число')
// console.log(num1 + num2)


// let user = {
//     name: "Beknazar",
//     lastName: "Omurbek",
//     age: 23
// }

// console.log("Добро пожаловать" + user.name + user.lastName + "на наш сайт")
// console.log(`Добро пожаловать ${user.name} ${user.lastName} на наш сайт`)


// let obj = {
//     5: 0,
//     "5": 10,
//     5: 333,
//     name: "Askat",
//     name: "Mirbek"
// }
// console.log(obj)
// console.log(obj['5'])



// let list = [1, 2, 3, 4, 5, "Hello", {arr: 123}, ["first", "second"]]
// console.log(list[6])

//Вычислить объем куба
let num1 = prompt( 'enter number')
let mul = num1 * num1 * num1
console.log(mul)

    //вычислить перbметр прямоугольника
    let num1 = +prompt('enter number 1')
    let num2 = +prompt ('enter number 2')
    let mul = 2*(num1 + num2)
    console.log(mul)
    
