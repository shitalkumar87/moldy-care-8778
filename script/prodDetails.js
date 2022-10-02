
let sz=0;

let size = (eu,uk)=>{
        console.log(eu,uk);
        sz=eu;

        sendData(sz);

        const container_size = document.getElementById('prod_sizes').innerHTML=null;
        
        const p_div = document.createElement('div');
        p_div.className="prod_sizes_div"
        const pr = document.createElement('p');
        pr.innerText=`EU ${eu} (UK ${uk})`;
        pr.style.fontWeight="bold"

        p_div.append(pr)

        let cont2=document.getElementById('prod_sizes');
        cont2.style.height="20px"
        cont2.append(p_div);  
}


document.getElementById('prod_addToBag').addEventListener("click",()=>{
    addCart()
});


let selected_prod = JSON.parse(localStorage.getItem("details"));
console.log(selected_prod);

document.getElementById('prod_name').innerText=selected_prod.name;
document.getElementById('prod_price').innerText=selected_prod.price;
document.getElementById('elementId');

document.getElementById('prod_img1').src=selected_prod.image1;
document.getElementById('prod_img2').src=selected_prod.image3;

let selected_prodData;

let sendData= (sz)=>{

        selected_prodData={
        name : selected_prod.name,
        price : selected_prod.price,
        image : selected_prod.image1,
        size : sz,
        price2 : selected_prod.pricevalue
    }
    // console.log(selected_prodData);

}

// console.log(selected_prodData);

let addedProduct = JSON.parse(localStorage.getItem("cart")) || [];

let addCart = ()=>{

    console.log(selected_prodData);

    addedProduct.push(selected_prodData);

    localStorage.setItem("cart", JSON.stringify(addedProduct));
    console.log(addedProduct);

    alert("product added");
}


 