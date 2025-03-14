let products = document.getElementById("products")
let searching = document.getElementById("product-search")
let searchingProducts;
fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json();
    }).then((res) => {
        searchingProducts = res;
        cardPrintAndSearching(res)
    })
searching.addEventListener("keyup", ((e) => {
    let searchValue = e.target.value
    let filterData = searchingProducts.filter((val) => {
        return val.title.toLowerCase().includes(searchValue.toLowerCase())
    });
    cardPrintAndSearching(filterData)
}

));
function cardPrintAndSearching(cards) {
    for (var a = 0; a < cards.length; a++) {
        products.innerHTML += `
        <div class="col-sm-6  col-md-4  col-lg-3">
        <div class="card" style="width: 100%;">
         <img src="${cards[a].image}"height="250px" class="card-img-top" alt="card-image" >
         <div class="card-body">
        <p class="card-text">${cards[a].title}</p>
         <a href="#" class="btn btn-dark" onclick="addToCart(${cards[a].id})"style="width:50%">Add to cart</a>
        <a href="./detail.html?id=${cards[a].id}" class="btn btn-dark  style="width:50%">View details</a>
        </div>
        </div>
        </div>`
    }
}
