import footer from "../components/component.js"

 let Footer=document.getElementById("footer")
 Footer.innerHTML=footer()

  document.getElementById("pay-option-item2").addEventListener("click",()=>{
      border()
  })
  
  let border=()=>{
    document.getElementById("pay-option-item2").style.border="1px solid"
  }
 let totalprice=JSON.parse(localStorage.getItem("price_total"))
 

let total=document.getElementById("price")
  total.innerText=`₹ ${totalprice}.00`
 

  import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()