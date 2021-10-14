// writeHtml("Hello, I am progger,  ")

// function writeHtml(text) {
//     console.log(text);
// }

// writeHtml("Good morning")

// let sum = function (arg1, arg2) {
//     console.log(arg1, arg2);
//     let result = arg1 +arg2
//     console.log(result);
// }
// sum(43, 7)

// let multy = (num1, num2, num3) => {
// console.log(num1, num2, num3);
// let result = num1 * num2 * num3
// return result
// }
// let newNum = multy(5, 10, 2)
// console.log(newNum);

// let multy = (num1, num2, num3) => num1 * num2 * num3 
//     let result = multy (2,3,4)
//     console.log(result);

// function perimetr(a,b){
//     return (a +b)*2
// }
// let result = perimetr (5, 10) + 10
// console.log(result);

// function func (arg1, framework) {
//     console.log(arg1);
//     return function(arg2){
//         // console.log("Язык программирования " + arg1 + "" + framework + " и " + arg2);
//         // console.log(`Язык программирования ${arg1} ${framework} и ${arg2}`);
//     }
// }
// let newFunc = func("Java", "Mobile")
// newFunc("Python")
// newFunc("C++")

// 5! = 1 * 2 * 3 * 4 * 5

// function fact(num) {
// if(num === 1)  return 1
// return num * fact(num - 1)
// }
// console.log(fact(5));

// function fact(num) {
//     if (num <= 1) return 1
//     return num * fact(num - 1)
// }
// console.log(fact(-1));

// let product = {
//     title: "Adidas ball",
//     size: 4,
//     price: 100,
//     getSize() {
//         console.log(this.size);
//     },
//     setSize(newSize) {
//         this.size = newSize;
//     },
//     // getPrice: () => {
//     //     console.log(this);
//     // }
// }
// console.log(product);
// product.getSize()
// product.setSize(6)
// console.log(product);
// product.getPrice()

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

// function generatePassword(){
//     let length = 8;
//     let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789.!@#$%^&*()";
//     let password = "";
//     let charsetLength = charset.length;
//     for(let i = 0; i < length; i++) {
//         password += charset[Math.ceil(Math.random() * charsetLength)]
//     }
//     return password
// }
// let password = generatePassword()
// console.log((password));



// let arr = [[[5], 3], 0, ['test']]

// function countNumbers(array) {
//     if(array.length === 0) return 0
//     let total = 0
//     let first = array.shift()
//     if(Array.isArray(first)) {
//         total += countNumbers(first)
//     }else if (Number.isInteger(first)) {
//         total += 1
//     }
//     return total + countNumbers(array)
// }
// console.log(countNumbers(arr)) 