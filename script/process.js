
 let totalprice=JSON.parse(localStorage.getItem("price_total"))
 let data = JSON.parse(localStorage.getItem("cart"));
  console.log(data)
let append=(data)=>{

    let cont=document.getElementById("append-box")
    cont.innerHTML=null

    data.forEach((el)=>{

        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=el.image
        image.id="img"

        div.append(image)
        cont.append(div)
    })
}

append(data)

import footer from "../components/component.js"

 let Footer=document.getElementById("footer")
 Footer.innerHTML=footer()

 document.getElementById("price").innerText=`₹ ${totalprice}`

 

import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()
 