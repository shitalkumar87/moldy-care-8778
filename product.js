// http://localhost:3000/product_data;

let initial = async ()=> {
  let res = await fetch(`http://localhost:3000/product_data`);
  let products = await res.json();
  display(products);
};

initial();

document.querySelector("#sortPrice").addEventListener("change",sortByPrice);

async function sortByPrice() {
  let selected = document.querySelector("#sortPrice").value;
  let res = await fetch( `http://localhost:3000/product_data`);
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
  if(selected == "greater") {
    products = products.filter((product) => {
    return product.price >= 500;     
    });
  }
  display(products);
}

let display = (data)=> {
  let main = document.getElementById("main");
  // main.innerHTML = null;
  data.forEach((elem) => {
    let div = document.createElement("div");
    div.innerHTML = ` <img src=${elem.imgUrl} alt="">
    <div class="flex">
        <p class='underline'>${elem.prod_name}</p>
        <div>
            <p style="text-decoration:line-through">₹ ${elem.strikedOffPrice}</p>
            <p><span>${elem.prod_discount} </span> ₹ ${elem.price}</p>
        </div>
    </div>`;
    let cart = document.createElement("button");
    cart.innerText = "Add to Bag";
    cart.style.backgroundColor = "skyblue";
    cart.style.border = " 0px solid skyblue"
    cart.style.cursor = "pointer"
    div.append(cart);
    cart.addEventListener("click", () => {
        selectProd(elem);
      });
    main.append(div);
  });
}

function selectProd(elem) {
  localStorage.setItem("product", JSON.stringify(elem));
  window.location.href = "./product.html";
}
