let products = document.getElementById("products")
let searching = document.getElementById("product-search")
let searchingProducts;
fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json();
    }).then((res) => {
        searchingProducts = res;
        // console.log(res);
        for (var a = 0; a < res.length; a++) {
            products.innerHTML += `
            <div class="col-sm-6  col-md-4  col-lg-3">
        <div class="card" style="width: 100%;">
  <img src="${res[a].image}"height="250px" class="card-img-top" alt="card-image" >
  <div class="card-body">
   <p class="card-text">${res[a].title}</p>
     <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
   </div>
    </div>`
        }
    })
searching.addEventListener("keyup", ((e) => {
    // console.log(searchingProducts)
    let searchValue = e.target.value
    let filterData=searchingProducts.filter((val)=>{
        return val.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    console.log(filterData)
} 

))