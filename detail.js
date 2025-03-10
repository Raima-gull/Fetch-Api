let searchParams=new URLSearchParams(window.location.search)
let paramValue=searchParams.get("id")
let detailBox=document.getElementById("detail-box")
let img=document.getElementById("img")
let title=document.getElementById("title")
let desc=document.getElementById("desc")
let price=document.getElementById("price")
let btn=document.getElementById("btn")
let category=document.getElementById("category")
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
    title.innerHTML=res.title
    desc.innerHTML=res.description
    price.innerHTML=`Price: Rs ${res.price}`
    category.innerHTML=`Category:  ${res.category}`
    img.src=res.image
    btn.innerHTML="Add To cart"
})
.catch((err)=>{
 alert("This product id is not available");
 location.href="./index.html"
})

  