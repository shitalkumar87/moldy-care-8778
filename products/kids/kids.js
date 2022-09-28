let url = `http://localhost:3000/api/kids`;

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

    // let div3 = document.createElement('div');
    // div3.setAttribute('id','data1');

    // let div4 = document.createElement('div');
    // div4.setAttribute('id','data2');

    let img1 = document.createElement('img');
    img1.src = el.image1;

    let img2 = document.createElement('img');
    img2.src = el.image3;

    let Name1 = document.createElement('h3');
     Name1.innerText = el.name;

    let Quantity = document.createElement('p');
    Quantity.innerText = `Available Colours -> ${el.quantity}`;

    let Price = document.createElement('p');
    Price.innerText = el.price;

    let Price2 = document.createElement('p');
    Price2.innerText = el.price__1;

    if(el.image3 !== ""){
        // div3.append(img1);
        // div4.append(img2);
        div2.append(img1,img2);
        div1.append(div2,Name1,Quantity,Price);
        container.append(div1);
    }else{
        div1.append(img1,Name1,Quantity,Price);
        container.append(div1);
     }
     
  });
}