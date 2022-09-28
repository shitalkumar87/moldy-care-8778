let data = JSON.parse(localStorage.getItem("product"));
console.log(data);
let container =document.getElementById("items");
let cart_total = 0;

let display_product = (data)=> {
  console.log('Hello');
  data.forEach((elem, index) => {
    let mainDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.imgUrl;

    let details = document.createElement("div");
    details.setAttribute("class", "desc");
    let name = document.createElement("h5");
    name.innerText = elem.prod_name;
    let price = document.createElement("p");
    price.style.textDecoration = "line-through";
    price.innerText = "₹" + elem.strikedOffPrice;
    let price2 = document.createElement("p");
    price2.setAttribute("class", "yellow");
    price2.innerText = "₹" + elem.price;
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.style.marginTop = "20px";
    del.style.cursor = "pointer";
    del.addEventListener("click", () => {
        removeElem(index);
      });

    let quantityMain = document.createElement("div");
    let dec = document.createElement("button");
    dec.innerText = "-";
    if (elem.qty > 1) {
      dec.style.cursor = "pointer";
    }
    dec.addEventListener("click", () => {
        decCount(index);
      });
    let quantity = document.createElement("span");
    quantity.innerHTML = elem.qty;
    quantity.style.margin = "0px 10px 0px 10px";
    let inc = document.createElement("button");
    inc.innerText = " + ";
    inc.style.cursor = "pointer";
    inc.addEventListener("click", () => {
        incCount(index);
      });
    // appending the child elements with the parent elements
    quantityMain.append(dec, quantity, inc);
    details.append(name, price, price2, quantityMain, del);
    mainDiv.append(img, details);
    container.append(mainDiv);
  });
}
display_product(data);

let removeElem = (index)=> {
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  display_product(data);
}

let incCount = (index)=> {
  data[index].qty++;
  display_product(data);
}

let decCount = (index)=> {
  if (data[index].qty > 1) {
    data[index].qty--;
    display_product(data);
  }
}
let proceed = (data)=> {
  if(data.length===0){
    alert("Your cart is empty Please add some items")
    window.location.href = "./index.html";
    return
  }
  else {
    window.location.href = "./shipping.html";
  }
  window.location.href = "./login.html";
}
proceed(data);