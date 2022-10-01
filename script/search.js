let submit=document.getElementById("query")
      submit.onclick=()=>{
          
      let box=document.getElementById("Trend_box")
        if(box.style.display=="none"){
          box.style.display="block"
        }

        else{
          box.style.display="none"
        }
      }

      import footer from "../components/component.js";

let Footer=document.getElementById("footer")
Footer.innerHTML=footer()

import header from "../components/header.js"
let Header=document.getElementById("headerContents")
Header.innerHTML=header()

import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()