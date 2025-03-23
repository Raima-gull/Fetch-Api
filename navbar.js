let showNavBar=document.getElementById('showNavBar')
showNavBar.innerHTML=`<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html">Products</a>
        </li>
        <li class="nav-item">
            <a href='./cart.html' class="btn btn-primary">
                Cart <span class="badge text-bg-secondary" id="cartCount">0</span>
            </a>        
        </li>
      </ul>
     
    </div>
  </div>
</nav>`
let cartCount=document.getElementById('cartCount')
let localStorageItems=localStorage.getItem('cart')

window.addEventListener('load',()=>{
    if(localStorageItems){
        let parseData = JSON.parse(localStorageValue);
        cartCount.innerHTML=parseData.length
    }else{
        cartCount.innerHTML=0
    }

})