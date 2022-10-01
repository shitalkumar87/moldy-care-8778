
let data=[
      {
        img:"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

      },
      {
        img:"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

      },
      {
        img:"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

      },
      {
        img:"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

      }

]
  
 
let append=(data)=>{

    let cont=document.getElementById("append-box")
    cont.innerHTML=null

    data.forEach((el)=>{

        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=el.img
        image.id="img"

        div.append(image)
        cont.append(div)
    })
}

append(data)

import footer from "../components/component.js"

 let Footer=document.getElementById("footer")
 Footer.innerHTML=footer()


 import header from "../components/header.js"
let Header=document.getElementById("headerContents")
Header.innerHTML=header()

import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()