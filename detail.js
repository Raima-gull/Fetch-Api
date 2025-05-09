let searchParams = new URLSearchParams(window.location.search)
let paramValue = searchParams.get("id")
let detailBox = document.getElementById("detail-box")
let img = document.getElementById("img")
let title = document.getElementById("title")
let desc = document.getElementById("desc")
let price = document.getElementById("price")
let AddToCart = document.getElementById("AddToCart")
let category = document.getElementById("category")

if (!paramValue || searchParams.size > 1) {
    location.href = "./index.html"
}
fetch(`https://fakestoreapi.com/products/${paramValue}`)
    .then((data) => {
        console.log(data);
        return data.json()
    })
    .then((res) => {
        console.log(res)
        title.innerHTML = res.title
        desc.innerHTML = res.description
        price.innerHTML = `Price: Rs ${res.price}`
        category.innerHTML = `Category:  ${res.category}`
        img.src = res.image
        AddToCart.innerHTML = "Add To cart"
        AddToCart.addEventListener('click', () => {
            addToCart(res.id)
        })
    })
    .catch((err) => {
        alert("This product id is not available");
        location.href = "./index.html"
    })

