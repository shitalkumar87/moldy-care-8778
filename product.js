// http://localhost:3000/product_data;
let data_arr= JSON.parse(localStorage.getItem("product")) || [];
initial();

async function initial() {
  let res = await fetch(`http://localhost:3000/product_data`);
  let products = await res.json();
  display(products);
}

document.querySelector("#sortPrice").addEventListener("change",sortByPrice);

async function sortByPrice() { 
  let selected = document.querySelector("#sortPrice").value;
  let res = await fetch(`http://localhost:3000/product_data`);
  let products = await res.json();
  if(selected == "low") {
    products.sort((a,b) => {
    return a.price - b.price
    });
  }
  if(selected == "high") {
    products.sort((a,b) => {
    return b.price - a.price
    }); 
  }
  if(selected == "less") {
    products = products.filter((product) => {
    console.log("here")
    return product.price <= 2000;      
    });
  }
  if(selected == "greater"){
    products = products.filter((product) => {
    return product.price >= 500;      
    });
  }
  console.log("Products : ", products);
  display(products);
}

function display(data) {
  let main = document.getElementById("main");
  main.innerHTML = "";
  data.forEach(function (elem) {
    let div = document.createElement("div");
    div.innerHTML = ` <img src=${elem.imgUrl} alt="">
    <div class="flex">
        <p class='underline'>${elem.prod_name}</p>
        <div>
            <p style="text-decoration:line-through">₹ ${elem.strikedOffPrice}</p>
            <p><span>${elem.prod_discount} </span> ₹ ${elem.price}</p>
        </div>
    </div>`;
    let add_cart = document.createElement("button");
    add_cart.innerText = "Add to Cart";
    div.append(add_cart);


   add_cart.addEventListener("click", function (e) {
      selectProd(elem);
    });
    main.appendChild(div);
  });
}

// product add to the local storage for carry forward to prod-info page
function selectProd(elem) {
  data_arr.push(elem);
  localStorage.setItem("product", JSON.stringify(data_arr));
  window.location.href = "./product.html";
}