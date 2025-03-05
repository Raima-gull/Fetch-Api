let searchParams=new URLSearchParams(window.location.search)
let paramValue=searchParams.get("id")
// console.log(paramValue)

if(!paramValue||searchParams.size>1){
    location.href="./index.html"
}
fetch(`https://fakestoreapi.com/products/${paramValue}`)
.then((data)=>{
    console.log(data);
    return data.json()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
 alert("This product id is not available");
 location.href="./index.html"
})

  