// let currentPage = 1;
const API = "http://localhost:8002/contacts"
// const API = `http://localhost:8001/products?_page=${currentPage}&_limit=2`;
// const SECOND_API = "http://localhost:8001/products" 

let contactName = $("#contact-name")
let contactNumber = $("#contact-number")
let contactSelf = $("#contact-self")
let contactImage = $("#contact-image")
let btnAdd = $(".btn-add")
let footer = $(".footer")

//! CREATE

async function addContact() {
    let name = contactName.val();
    let number = contactNumber.val();
    let self = contactSelf.val()
    let image = contactImage.val()
    let contact = {
        name,
        number,
        self,
        image,
    };
    try {
        const response = await axios.post(API, contact)
        console.log(response);
        Toastify({
            text: response.statusText,
            duration: 2500,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center",
            stopOnFocus: true, 
            style: {
                background: "yellow", color: "black"
            }
        }).showToast();
        modal.modal('hide')
        render(API)
    } catch (e) {
        console.log(e);
    }
}
btnAdd.on("click", addContact)

// ! READ
let content = $(".content")
let minus = $('.minus')
let plus = $(".plus")


async function render(url) {
    try {
        const response = await axios(url)
        let res=response.data
        content.html("")
        res.forEach((item) => {
            console.log(item);
            content.append(`
            <div class="card mt-3 mb-3" style="width: 18rem;">
            <img style="width: 100%; object-fit: contain; height:190px" src='${item.image}' class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${item.name}</h5>
             <p class="card-text">${item.self}</p>
             <a href="#">${item.number}</a>
             <button id=${item.id} type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#editModal">
                                Изменить 
                            </button>
            </div>
            </div>`)
        })
        
        //! Pagination
        let link = response.headers.link.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim)
        if (!link) {
            minus.attr('disabled', 'true')
            plus.attr('disabled', 'true')
            return
        }
        if (link.length === 4) {
            minus.attr('id', link[1])
            plus.attr('id', link[2])
            minus.removeAttr("disabled")
            plus.removeAttr("disabled")
        } else if (links.length === 3 && currentPage === 1) {
            minus.attr('disabled', 'true');
            plus.attr('id', links[1]);
        } else if (links.length === 3 && currentPage !== 1) {
            plus.attr('disabled', 'true')
            minus.attr('id', links[1])
        }
    } catch (e) {
        console.log(e);
    }
}
render()
render(API)
plus.on("click", (e) => {
    let url = e.target.id
    render(url);
    currentPage++
});
minus.on("click", (e) => {
    let url = e.target.id
    render(url);
    currentPage--
})


// ! SEARCH
let poiInp = $(".inp-poi")
poiInp.on("input", (e) => {
    let value = e.target.value
    let url = `${API}&q=${value}`
    render(url)
    currentPage = 1
})

// ! UPDATE

// let productNameEdit = $("#product-name-edit")
// let productPriceEdit = $("#product-price-edit")
// let productDescEdit = $("#product-desc-edit")
// let productImageEdit = $("#product-image-edit")
// let btnSaveEdit = $(".btn-save-edit")

// $(document).on('click', ".edit-btn", async (e) => {
//     let id = e.target.id
//     try {
//         const response = await axios(`${SECOND_API}/${id}`)
//         productNameEdit.val(response.data.name)
//         productPriceEdit.val(response.data.price)
//         productDescEdit.val(response.data.desc)
//         productImageEdit.val(response.data.image)
//         btnSaveEdit.attr('id', id)
//     } catch (e) {
//         console.log(e);
//     }
// })
// btnSaveEdit.on('click', async (e) => {
//     let id = e.target.id
//     let name = productNameEdit.val()
//     let price = productPriceEdit.val()
//     let desc = productDescEdit.val()
//     let image = productImageEdit.val()
//     let product = {
//         name,
//         price,
//         desc,
//         image,
//     }
//     try {
//         await axios.patch(`${SECOND_API}/${id}`, product)
//         modal.modal("hide")
//         let url = `http://localhost:8001/products?_page=${currentPage}&_limit=2`
//         console.log(url);
//         render(API)
//     } catch (e) {
//         console.log(e);
//     }
// })