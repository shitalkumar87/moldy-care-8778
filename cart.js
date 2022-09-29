let data = JSON.parse(localStorage.getItem("product"));

let cart_total = 0;

let display_product = (data)=> {
  document.querySelector("#cartLen").innerText = data.reduce((sum, item) =>{
    return sum + item.qty
},0);

cart_total =
  "₹ " +
  data.reduce(function (ac, cv) {
    return ac + cv.price * cv.qty;
  }, 0);

  localStorage.setItem("total",JSON.stringify(cart_total));

document.querySelector("#total").innerHTML = cart_total;



  let container =document.getElementById("items");
  container.innerHTML = null;
  data.forEach((elem, index) => {
    let mainDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.imgUrl;

    let div1 = document.createElement("div");
    div1.setAttribute("class", "desc");
    let name = document.createElement("h5");
    name.innerText = elem.prod_name;
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
    quantity.innerHTML = elem.qty;
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