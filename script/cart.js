import footer from "../components/component.js";
let footer_part = document.getElementById("footer");
footer_part.innerHTML = footer();
 
import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()

let data = JSON.parse(localStorage.getItem("cart"));
let add_cart= document.getElementById("add_cart");
add_cart.onclick = ()=> {
  proceed();
}
let cart_total = 0;
let counter = 1; 

let display_product = (data)=> {
  // localStorage.setItem("total",JSON.stringify(cart_total));

  let container =document.getElementById("items");
  container.innerHTML = null;
  console.log(data);

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

    cart_total+=elem.price2;

    let del = document.createElement("button");
    del.innerText = "Delete";
    // del.style.marginTop = "20px";
    del.style.cursor = "pointer";
    del.addEventListener("click", () => {
        removeElem(index);
      });

    let div2 = document.createElement("div");
    let dec = document.createElement("button");
    dec.innerText = "-";

    dec.style.border="1px solid";
    
    dec.addEventListener("click", () => {
        decCount(elem);
      });

    // let quantity = document.createElement("span");
    // quantity.setAttribute("class","total_qty");
    // quantity.innerText=counter;
    // quantity.style.margin = "0px 10px 0px 10px";

    let inc = document.createElement("button");
    inc.innerText = " + ";
    inc.style.cursor = "pointer";
    inc.style.border="1px solid"
    inc.addEventListener("click", () => {
        incCount(elem);
      });
    // appending the child elements with the parent elements
    div2.append(dec, inc);
    div1.append(name, price2, div2, del);
    mainDiv.append(img, div1);
    container.append(mainDiv);
  });
}
display_product(data);
console.log(cart_total)

document.getElementById("total").innerText=cart_total;

function removeElem(index) {
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  display_product(data);
}

let incCount = (index)=> {
  counter++;
  console.log(index);
  cart_total+=index.price2;
  document.getElementById("total").innerText=cart_total;
  localStorage.setItem("price_total", JSON.stringify(cart_total));
  // document.querySelector(".total_qty").innerText=counter;
}

let decCount = (index)=> {
  counter--;
  cart_total=cart_total-index.price2;
  document.getElementById("total").innerText=cart_total;
  localStorage.setItem("price_total", JSON.stringify(cart_total));
  if(counter<1) {
    counter=1;
   }

  //  document.querySelector(".total_qty").innerText=counter;
}

localStorage.setItem("price_total", JSON.stringify(cart_total));
let proceed = (data)=> {
  if(data){
    alert("Your cart is empty Please add some items")
    window.location.href = "./prodDetails.html";
    return
  }
  else {
    window.location.href = "./processing.html";
  }
  window.localStorage.href = "./login.html";
}