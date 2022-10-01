var widthmin= window.matchMedia("(min-width:950px)");
var widthmax= window.matchMedia("(max-width:1000px)");
function changemin(e){
    console.log("minimum");
    let img1= document.querySelector("#img1");
    img1.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/794/IMAGE-portrait-ipad-default-fill-a08ff349-7d66-4fe8-9298-b52b8d7d4d92-default_0.jpg?ts=1663773044249";
    let img2=document.querySelector("#img2");
    let img3=document.querySelector("#img3");
    let img4=document.querySelector("#img4");
    let img5=document.querySelector("#img5");
    let img6=document.querySelector("#img6");
    img2.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/578/IMAGE-portrait-ipad-c6b5432e-9404-4d49-aaf7-bd3062ed2a94-default_0.jpg?ts=1663583214111";
    img3.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/794/IMAGE-portrait-ipad-fill-036be388-a5b8-4bd3-b430-b725bdc3abb1-default_0.jpg?ts=1663794687064";
    img4.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/794/IMAGE-portrait-ipad-fill-5bb6c5e1-e779-4394-8ed9-3eac937742dc-default_0.jpg?ts=1663576361401";
    img5.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-38//w/794/IMAGE-portrait-ipad-default-fill-03a55f4b-5b97-4c55-828b-0ecec86789df-default_0.jpg?ts=1663770227717";
    img6.src="https://static.zara.net/photos///contents/mkt/spots/ss22-newsletter/subhome-xmedia-03//w/794/IMAGE-portrait-fill-cabff040-f3d1-40fa-8d04-11261d54bf49-default_0.jpg?ts=1643121593731";
}
function changemax(e){
    console.log("max")
    let img1= document.querySelector("#img1");
    img1.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1865/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159";
    let img2=document.querySelector("#img2");
    let img3=document.querySelector("#img3");
    let img4=document.querySelector("#img4");
    let img5=document.querySelector("#img5");
    let img6=document.querySelector("#img6");
    img2.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/1865/IMAGE-landscape-fill-c68605f6-1f94-4830-8f4a-0f3bf22017e2-default_0.jpg?ts=1663579002306";
    img3.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/1865/IMAGE-landscape-fill-8a1ce69a-a1f6-4b5c-b04a-c3ea44664c19-default_0.jpg?ts=1663794685596";
    img4.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1865/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647";
    img5.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-38//w/1865/IMAGE-landscape-default-fill-5c2d5cc1-7805-42c8-9238-635ec71551d3-default_0.jpg?ts=1663770211821";
    img6.src="https://static.zara.net/photos///contents/mkt/spots/ss22-newsletter/subhome-xmedia-03//w/1865/IMAGE-landscape-fill-6f5f24a2-7463-4ad2-91e9-0f2a99f75e89-default_0.jpg?ts=1643121593479";
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
        let buttn = document.querySelector("#menlink");
        buttn.style.color="white";
        let a1= document.querySelector("#hover_links");
        a1.style.color="white";

        
    }
    if(window.scrollY>600){
        let navbar= document.querySelector(".header__main");
        navbar.style.color="black";
        let logo= document.querySelector(".header__logo_svg");
        logo.style.fill="black";
        let ham= document.querySelector(".hamgurber_logo");
        ham.style.fill="black";
        let search=document.querySelector(".header_searchbar");
        search.style.color="black";
        search.style.borderColor="black";
        
    }
    if(window.scrollY>450){
        let buttn = document.querySelector("#menlink");
        buttn.style.color="black";
        let a1= document.querySelector("#hover_links");
        a1.style.color="BLACK";
    }
    if(window.scrollY>4500){
        let a1= document.querySelector("#hover_links");;
        a1.style.display="none";
        let buttn = document.querySelector("#menlink");
        buttn.style.display="none"
    }
    else{
        let a1= document.querySelector("#hover_links");
        a1.style.display="block";
        let buttn = document.querySelector("#menlink");
        buttn.style.display="block"
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
let m1=document.querySelector("#img1");
let m2=document.querySelector("#img2");
let m3=document.querySelector("#img3");
let m4=document.querySelector("#img4");
let m5=document.querySelector("#img5")
m1.addEventListener("click",()=>{
    window.location.href="../women.html"
})
m2.addEventListener("click",()=>{
    window.location.href="../women.html"
})
m3.addEventListener("click",()=>{
    window.location.href="../women.html"
})
m4.addEventListener("click",()=>{
    window.location.href="../women.html"
})
m5.addEventListener("click",()=>{
    window.location.href="../women.html"
})
