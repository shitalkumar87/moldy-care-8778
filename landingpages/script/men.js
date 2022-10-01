var widthmin= window.matchMedia("(min-width:750px)");
var widthmax= window.matchMedia("(max-width:801px)");
function changemin(e){
    console.log("minimum");
    let img1= document.querySelector("#img1");
    img1.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-athleticz/subhome-xmedia-39//w/719/IMAGE-portrait-ipad-fill-6dc8a00c-86e5-4981-b179-54aa570b8b36-default_0.jpg?ts=1664446882817";
    let img2=document.querySelector("#img2");
    let img3=document.querySelector("#img3");
    let img4=document.querySelector("#img4");
    let img5=document.querySelector("#img5");
    let img6=document.querySelector("#img6");
    let img7=document.querySelector("#img7");
    img2.src="./css/components/menjpg.png";
    img3.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/753/IMAGE-portrait-ipad-fill-632771d6-5b19-4ae9-900d-01c6a4b66563-default_0.jpg?ts=1664208806866";
    img4.src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-39//w/753/IMAGE-portrait-ipad-fill-62279b68-6bf5-4da1-9785-49ef4bcf06c3-default_0.jpg?ts=1664446804242";
    img5.src="https://static.zara.net/photos///contents/mkt/spots/ss22-newsletter/subhome-xmedia-03//w/753/IMAGE-portrait-fill-cabff040-f3d1-40fa-8d04-11261d54bf49-default_0.jpg?ts=1643121593731";
}
function changemax(e){
    console.log("max")
    let img1= document.querySelector("#img1");
    img1.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-athleticz/subhome-xmedia-39//w/1637/IMAGE-landscape-fill-ce34d91d-aa7d-45ee-9286-03e5da22c420-default_0.jpg?ts=1664446878049";
    let img2=document.querySelector("#img2");
    let img3=document.querySelector("#img3");
    let img4=document.querySelector("#img4");
    let img5=document.querySelector("#img5");
    let img6=document.querySelector("#img6");
    let img7=document.querySelector("#img7");
    img2.src="./css/components/menjpg.png";
    img3.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/1637/IMAGE-landscape-fill-fbb20929-1e45-4d24-8139-c6351a17419b-default_0.jpg?ts=1664208804884";
    img4.src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-39//w/1637/IMAGE-landscape-fill-cf948558-c0fd-435d-a052-8c66026c9f16-default_0.jpg?ts=1664447076752";
    img5.src="https://static.zara.net/photos///contents/mkt/spots/ss22-newsletter/subhome-xmedia-03//w/1637/IMAGE-landscape-fill-6f5f24a2-7463-4ad2-91e9-0f2a99f75e89-default_0.jpg?ts=1643121593479";
}
function max(e){

}
widthmin.addEventListener("change",changemin)
widthmax.addEventListener("change",changemax);

function changebg(){
   
    console.log(window.scrollY)
    if(window.scrollY<500){
        let navbar= document.querySelector(".header__main");
        navbar.style.color="white";
        let logo= document.querySelector(".header__logo_svg");
        logo.style.fill="white";
        let ham= document.querySelector(".hamgurber_logo");
        ham.style.fill="white";
        let search=document.querySelector(".header_searchbar");
        search.style.color="white";
        search.style.borderColor="white";
        let button1=document.querySelector("#womenlink");
        button1.style.color="white";
        let button2=document.querySelector("#kidlink");
        button2.style.color="white";
        let a1= document.querySelector("#hover_links");
        a1.style.color="white";
        let cart= document.querySelector("#svg__cart");
        cart.style.fill="white";

        
    }
    if(window.scrollY>1000){
        let navbar= document.querySelector(".header__main");
        navbar.style.color="black";
        let logo= document.querySelector(".header__logo_svg");
        logo.style.fill="black";
        let ham= document.querySelector(".hamgurber_logo");
        ham.style.fill="black";
        let search=document.querySelector(".header_searchbar");
        search.style.color="black";
        search.style.borderColor="black";
        let button1=document.querySelector("#womenlink");
        button1.style.color="black";
        let button2=document.querySelector("#kidlink");
        button2.style.color="black"
        let cart= document.querySelector("#svg__cart");
        cart.style.fill="black";
    }
    if(window.scrollY>900){
        let a1= document.querySelector("#hover_links");
        a1.style.color="black";
    }
    if(window.scrollY>3000){
        let a1= document.querySelector("#hover_links");;
        a1.style.display="none";
        let button1=document.querySelector("#womenlink");
        button1.style.display="none";
        let button2=document.querySelector("#kidlink");
        button2.style.display="none";
    }
    else{
        let a1= document.querySelector("#hover_links");
        a1.style.display="block";
        let button1=document.querySelector("#womenlink");
        button1.style.display="block";
        let button2=document.querySelector("#kidlink");
        button2.style.display="block";
    }
}
window.addEventListener("scroll",changebg);
function takewomen(){
    window.location.href="./women.html"
}
function takekid(){
    window.location.href="./kids.html"
}
function takemen(){
    window.location.href="./men.html"
}
function zaraathel(){
    console.log("asdfsg")
    window.location.href="#first_img"
}
let m1=document.querySelector("#img1");
let m2=document.querySelector("#img2");
let m3=document.querySelector("#img3");
let m4=document.querySelector("#img4");
let m5=document.querySelector("#img5")
m1.addEventListener("click",()=>{
    window.location.href="../mens.html"
})
m2.addEventListener("click",()=>{
    window.location.href="../mens.html"
})
m3.addEventListener("click",()=>{
    window.location.href="../mens.html"
})
m4.addEventListener("click",()=>{
    window.location.href="../mens.html"
})
m5.addEventListener("click",()=>{
    window.location.href="../mens.html"
})
