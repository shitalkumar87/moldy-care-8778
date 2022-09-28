let url = `http://localhost:3000/api/mens`;

let getData = async() => {
    let res = await fetch(`${url}`);
    res = await res.json();
    console.log(res);
    renderDom(res)
}
getData();

let container = document.getElementById('container');

let renderDom = (data) => {
  container.innerHtml = null;

  data.forEach((el) => {
    if(el.image1 !== 'https://static.zara.net/stdstatic/2.20.0-b.20/images/transparent-background.png'){
     let div1 = document.createElement("div");
     div1.setAttribute('id','card');

     let img = document.createElement('img');
     img.src = el.image1;
    //  console.log(img)

     let Name = document.createElement('h3');
     Name.innerText = el.name;

     let Quantity = document.createElement('p');
     Quantity.innerText = `Available Colours -> ${el.quantity}`;

     let Price = document.createElement('p');
     Price.innerText = el.price;
    
     
        
        div1.append(img,Name,Quantity,Price);
        container.append(div1);
     }
    
     
  });
}