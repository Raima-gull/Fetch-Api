function addToCart(e) {
    fetch(`https://fakestoreapi.com/products/${e}`)
        .then((data) => {
            return data.json()
        })
        .then((res) => {
            localStorageValue = localStorage.getItem('cart')
            if (localStorageValue) {
                let parseData = JSON.parse(localStorageValue)
                let CheckVal = parseData.find((val) => {
                    return val.title == res.title
                })
                if (CheckVal) {
                    alert("Product already in cart")
                } else {
                    parseData.push(res)
                    localStorage.setItem('Cart', JSON.stringify(parseData))
                    alert("Product added to cart")
                }}
            else {
                    console.log('Eles ma hoon')
                    localStorage.setItem('Cart', JSON.stringify(res))
                    alert('The are in else area')
                }
            }  
    )}