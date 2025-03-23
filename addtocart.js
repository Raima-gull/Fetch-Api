// let cartCount = document.getElementById("cartCount")
// function addToCart(e) {
//     fetch(`https://fakestoreapi.com/products/${e}`)
//         .then((data) => {
//             return data.json()
//         })
//         .then((res) => {
//             localStorageValue = localStorage.getItem('cart')
//             if (localStorageValue) {
//                 let parseData = JSON.parse(localStorageValue)
//                 let CheckVal = parseData.find((val) => {
//                     return val.title == res.title
//                 })
//                 if (CheckVal) {
//                     alert("Product already in cart")
//                 } else {
//                     parseData.push(res)
//                     localStorage.setItem('Cart', JSON.stringify(parseData))
//                     alert("Product added to cart")
//                     let getItems = localStorage.getItem('cart')
//                     let parseItems = JSON.parse(getItems)
//                     cartCount.innerHTML = parseItems.length
//                 }
//             }
//             else {
//                 console.log('Eles ma hoon')
//                 localStorage.setItem('Cart', JSON.stringify(res))
//                 alert('The are in else area')
//                 let getItems = localStorage.getItem('cart')
//                 let parseItems = JSON.parse(getItems)
//                 cartCount.innerHTML = parseItems.length
//             }
//         }
//         )
// }
let cartCount = document.getElementById("cartCount");
function addToCart(e) {
  console.log(e);
  fetch(`https://fakestoreapi.com/products/${e}`)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      let localStorageValue = localStorage.getItem("cart");
      if (localStorageValue) {
        let parseData = JSON.parse(localStorageValue);
        let checkIfExist = parseData.find((val) => {
          return val.title == res.title;
        });
        if (checkIfExist) {
          alert("already in cart");
        } else {
          parseData.push(res);
          localStorage.setItem("cart", JSON.stringify(parseData));
          alert("item added in cart");

          let abcd = localStorage.getItem("cart");
          let a = JSON.parse(abcd);
          cartCount.innerHTML = a.length;
        }
      } else {
        console.log("ELSE CAHL RHA HA");
        localStorage.setItem("cart", JSON.stringify([res]));
        alert("item added in cart");

        let abcd = localStorage.getItem("cart");
          let a = JSON.parse(abcd);
          cartCount.innerHTML = a.length;
      }
    });
}