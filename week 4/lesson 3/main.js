// ARROW FUNCTION / СТРЕЛОЧНЫЕ ФУНКЦИИ

// const arrowFunc = () => {
//     console.log("Arrow");
// }

// const arrowFunc = () => console.log("Arrow");
// const arrowFunc = arg => console.log(arg);
// arrowFunc(10)

// function func() {
//     console.log(...arguments);
// }
// const func = () => {
//     console.log(arguments);
// }
// func("str", 10, true)


// let km = +prompt("Enter km")
// const converter = (arg) => {
//     let m = arg * 1000;
//     alert(`${m}, м`)
// }
// converter(km)

// OBJECTS METOD

// let user = {
//     name: "MIKE", 
//     sayHello: function (arg){
//         console.log(`Hello ${arg}`); 
//     },
//     sayHello(arg) {
//         console.log(`hello ${arg}`);
//     },
//     sayHello: (arg) => {
//         console.log(`hello ${arg}`);
//     }
// }
// user.sayHello("Дамир")
// user.sayHello("Ислам")

//this

// let room = 19;


// function sum (arg){}
// console.log(this);


// let obj = {
//     title: "JS77"
//     sayContext () {
//         console.log(this);
//     }
// },
// func(){{
//     let arrowFunc = () => {
//         console.log(this);
//     };
//     arrowFunc()
// }
// }

// obj.sayContext()
// obj.sayContextArrow()
// obj.func()


// let user = {
//     name: "Erlan",
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// let newUser = {...user} //для копирования значений
// newUser.name = "Islam"
// // console.log(newUser);
// user.sayName()
// newUser.sayName() 

//1


// let passenger = {
//     firstName: "Sam",
//     lastName:"Winchester",
//     passportName : "US12345678",
//     baggage: 20,
//     getInfo(){
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number is ${this.passportName}
//         'Maximum luggage weigth is ${this.baggage} kg`);
//     },
//     setBaggage(arg) {
//         this.baggage = arg;
//     }
// }
// passenger.getInfo();
// passenger.setBaggage(50)
// passenger.getInfo()


//2

// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.
// let user = {
//     name: 'Sam',
//     age: 17,
//     balance: 700,
//     tickets: 0
// }


let user = {
    name: 'Sam',
    age: 17,
    balance: 700,
    tickets: 0,
    buyTicket(count){
     if(this.balance >= 400 * count){
         this.tickets += count
         this.balance -= 400 * count
         console.log(`ВЫ УСПЕШНО КУПИЛИ ${count} БИЛЕТ(a)`);
     }else {
         let avaTicket = Math.floor(this.balance / 400)
         if(avaTicket > 0){
             this.balance -= 400 * avaTicket;
             this.balance += avaTicket;
             console.log(`У вас недостотаточно средств купить ${count} билет(a).
             ВЫ УСПЕШНО КУПИЛИ ${avaTicket} билет(a)`);
            }else {
                alert("У ВАС НЕДОСТАТОЧНО СРЕДСТВ")
            }
     }
    },
    addToBalance(sum) {
        this.balance += sum;
        console.log(`Вы успешно пополнили свой баланc ${sum}`);
    },
    showBalance() {
        console.log(`ВАШ БАЛАНС ${this.balance} сом`);
    }
}
user.buyTicket(2)
user.addToBalance(1000)
user.showBalance()




// let elevator = {
//     maxFloor:16,
//     minFloor: 1
// }
