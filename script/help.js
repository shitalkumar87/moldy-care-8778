function goTozarashop() {
    window.location.href = "./cart.html";
}
function goToproduct() {
    window.location.href = "./product.html";
}

function goTohelp() {
    window.location.href = "./help.html";
}

import header from "../components/header.js"



import footer from "../components/component.js";
 
let Footer=document.getElementById("footer")
Footer.innerHTML=footer()

import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()