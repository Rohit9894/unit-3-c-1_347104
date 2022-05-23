var data=JSON.parse(localStorage.getItem("Nike"));
data.forEach(function(ele,index)
{
    let type=document.createElement("h3");
    type.innerText="Type :"+ele.type;
    let des=document.createElement("h3");
    des.innerText="Description :"+ele.des;
    let price=document.createElement("h3");
    price.innerText="Price :"+ele.price;
    let img=document.createElement("img")
    img.src=ele.image;
    img.setAttribute("id","image");
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute("id","button")
    btn.addEventListener("click",function(){
        removeitem(ele,index)}
        )
    
    let div=document.createElement("div");
    div.setAttribute("id","div")
    div.append(img,type,price,des,btn);
    document.querySelector("#all_products").append(div)
})
function removeitem(ele,index)
{
    data.splice(index,1)
    localStorage.setItem("Nike",JSON.stringify(data))
    window.location.reload();
}
