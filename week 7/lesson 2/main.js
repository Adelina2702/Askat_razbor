//! Типы запросов
const API = "http://localhost:3000/products"
// ? GET
//!fetch
// function getData() {
//     fetch(API)
//     .then((response) => {
//         if(response.ok){
//            return  response.json()
//         }else {
//             console.log(response.statusText);
//         }
//     })
//     .then((data) => {console.log(data)
//     })
// }
// getData()

//! axios
// async function getDataAxios (){
//     try{
//         const { data } = await axios(API);
//         console.log(data);
//     }catch (e) {
//         const status = e.response.status
//         if(status == 404) {
//             console.log("Введите правильную ссылку");
//         }else if(status == 500 ) {
//             console.log("Неполадки на сервере");
//         }else if(status == 403) {
//             console.log("Не авторизован");
//         }
//     }
// }
// getDataAxios()

// const num = 10;
// try{
//     num = 20;
// }catch(error) {
//     console.log(error);
// }

//! Post(как отправить данные на какой либо сервер)
let input = document.querySelector('input')
let btn = document.querySelector('button')

// const addProduct = () => {
//     let value = input.value
//     let product = {
//         title: value
//     }
//     fetch(API, {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json",
//         },
//         body : JSON.stringify(product)
//     });
// };
// btn.addEventListener('click', addProduct)


//! AXIOS
// const addProduct = async () => {
//     let value = input.value
//     let product = {
//         title: value,
//     }
//     const res = await axios.post(API, product)
//     console.log(res);
// }
// btn.addEventListener("click", addProduct)

//! PUT, PATCH

function updateProduct() {
    let editedProduct = {
        title: "Mackbook M1po"
    };
    //! c помощью fetch
    // fetch(`${API}/1`, {
    //     method: "PUT",
    //     headers: {
    //         'Content-Type': "application/json",
    //     },
    //     body: JSON.stringify(editedProduct),
    // })
    //! c помощью axios
    axios.patch(`${API}/2`, editedProduct)
}
updateProduct()

//! PUT - заменяет весь объект на переданный объект
//! PATCH- заменяет только те поля, которые передали , остальные поля не трогает

