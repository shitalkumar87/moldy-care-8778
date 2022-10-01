import footer from "../components/component.js";
let footer_part = document.getElementById("footer");
footer_part.innerHTML = footer();
 

// import header from "../components/header.js"
// let Header=document.getElementById("headerContents")
// Header.innerHTML=header()


let data = JSON.parse(localStorage.getItem("cart"));
console.log(data);
let add_cart= document.getElementById("add_cart");
add_cart.onclick = ()=> {
  proceed();
}
let cart_total = 0;

let display_product = (data)=> {
//   document.querySelector("#cartLen").innerText = data.reduce((sum, item) =>{
//     return sum + item.qty
// },0);
// cart_total =
//   "₹ " +
//   data.reduce(function (ac, cv) {
//     return ac + cv.price * cv.qty;
//   }, 0);

  localStorage.setItem("total",JSON.stringify(cart_total));

  document.querySelector("#total").innerHTML = cart_total;
  let container =document.getElementById("items");
  container.innerHTML = null;
  data.forEach((elem, index) => {
    let mainDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.image;

    let div1 = document.createElement("div");
    div1.setAttribute("class", "desc");
    let name = document.createElement("h5");
    name.innerText = elem.name;
    let price2 = document.createElement("p");
    price2.innerText = "₹" + elem.price;
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.style.marginTop = "20px";
    del.style.cursor = "pointer";
    del.addEventListener("click", () => {
        removeElem(index);
      });

    let div2 = document.createElement("div");
    let dec = document.createElement("button");
    dec.innerText = "-";
    if (elem.qty > 1) {
      dec.style.cursor = "pointer";
    }
    dec.addEventListener("click", () => {
        decCount(index);
      });
    let quantity = document.createElement("span");
    quantity.setAttribute("id","total_qty");
    quantity.style.margin = "0px 10px 0px 10px";
    let inc = document.createElement("button");
    inc.innerText = " + ";
    inc.style.cursor = "pointer";
    inc.addEventListener("click", () => {
        incCount(index);
      });
    // appending the child elements with the parent elements
    div2.append(dec, quantity, inc);
    div1.append(name, price2, div2, del);
    mainDiv.append(img, div1);
    container.append(mainDiv);
  });
}
display_product(data);

function removeElem(index) {
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  display_product(data);
}

let counter = 1; 
let total= 0;
let total_qty = document.getElementById("total_qty");
total_qty.innerText = counter;


document.getElementById("total").innerText = total;
let incCount = (index)=> {
  counter++;
  total_qty.innerText = counter;
  total=counter*data[index].price2;
  
document.getElementById("total").innerText = total;
  // display_product(data[index].price2);
}

let decCount = (index)=> {
  if(counter<1) {
    counter=1;
  }
    counter--;
    total_qty.innerText = counter;
    total=counter*data[index].price2;    
  document.getElementById("total").innerText = total;
}
let proceed = (data)=> {
  if(data){
    alert("Your cart is empty Please add some items")
    window.location.href = "./index.html";
    return
  }
  else {
    window.location.href = "./shipping.html";
  }
  window.location.href = "./login.html";
}