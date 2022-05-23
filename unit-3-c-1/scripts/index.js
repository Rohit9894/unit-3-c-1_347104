//store the products array in localstorage as "products"
function add_data(e)
{
    e.preventDefault()
    let form=document.querySelector("#Products");
    let type=form.type.value;
    let des=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    function item(type,des,price,image)
    {
        this.type=type;
        this.des=des;
        this.price=price
        this.image=image;

    }
    var item=new item(type,des,price,image)
    var store=JSON.parse(localStorage.getItem("Nike"))||[];
    store.push(item);
    localStorage.setItem("Nike",JSON.stringify(store));
}
