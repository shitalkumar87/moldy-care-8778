import footer from "../components/component.js";

let Footer=document.getElementById("footer")
Footer.innerHTML=footer()

// import header from "../components/header.js"
 
// let Header=document.getElementById("headerContents")
// Header.innerHTML=header()
let totalprice=JSON.parse(localStorage.getItem("price_total"))
document.getElementById("price").innerText=totalprice
import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()

document.getElementById("continue-button").addEventListener("click",()=>{
    takePay();
})

let takePay =()=>{
    alert("Order Placed");
    // window.localStorage.href="./landingpages/men.html"
}