let url = `https://ancient-bastion-92331.herokuapp.com/api/women`;

let getData = async() => {
  let res = await fetch(`${url}`);
  res = await res.json();
  console.log(res);
  renderDom(res);
}
getData();

let container = document.getElementById('container');

let renderDom = (data) => {
container.innerHtml = null;

data.forEach((el) => {
  let div1 = document.createElement("div");
  div1.setAttribute('id','card');

  let div2 = document.createElement("div");
  div2.setAttribute('id','images');

  let div3 = document.createElement('div');
  div3.setAttribute('id','data');

  let div4 = document.createElement('div');
  div4.setAttribute('id','data');

  let img1 = document.createElement('img');
  img1.src = el.image1;

  let img2 = document.createElement('img');
  img2.src = el.image3;

  let Name1 = document.createElement('h3');
   Name1.innerText = el.name;

   let Name2 = document.createElement('h3');
   Name2.innerText = el.name2;

  // let Quantity = document.createElement('p');
  // Quantity.innerText = `Available Colours -> ${el.quantity}`;

  let Price = document.createElement('p');
  Price.innerText = el.price;

  let Price2 = document.createElement('p');
  Price2.innerText = el.price__1;

  if(el.image3 !== ""){
      div3.append(img1,Name1,Price);
      div4.append(img2,Name2,Price2);
      div2.append(div3,div4);
      div1.append(div2);
      container.append(div1);
      
      
  }else{
      div1.append(img1,Name1,Price);
      container.append(div1);
   };
  //  let data = el;
      div1.addEventListener('click',function AddDetails(){
        
        localStorage.setItem('details',JSON.stringify(el));
        window.location.href="./prodDetails.html"
      });
      div2.addEventListener('click',function AddDetails(){
        
        localStorage.setItem('details',JSON.stringify(el));
        window.location.href="./prodDetails.html"
      });
   
});
}

import header from "../components/header.js"
let Header=document.getElementById("headerContents")
Header.innerHTML=header()