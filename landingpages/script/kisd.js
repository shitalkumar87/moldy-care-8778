var widthmin= window.matchMedia("(min-width:750px)");
var widthmax= window.matchMedia("(max-width:801px)");
function changemin(e){
    console.log("minimum");
    let video=document.querySelector("#video1");
    video.src="./css/components/videowomen800below.mp4"
    let img1= document.querySelector("#img1");
    img1.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-39//w/846/IMAGE-portrait-ipad-fill-649a1ca4-9c5c-4db6-abbf-104c2a2a4b8d-default_0.jpg?ts=1664521450090";
    let img2=document.querySelector("#img2");
    let img3=document.querySelector("#img3");
    let img4=document.querySelector("#img4");
    let img5=document.querySelector("#img5");
    let img6=document.querySelector("#img6");
    let img7=document.querySelector("#img7");
    img2.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-39//w/997/IMAGE-portrait-ipad-fill-3804ad28-fba6-4902-8639-3119527481e7-default_0.jpg?ts=1664521980794";
    img3.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-39//w/997/IMAGE-portrait-ipad-fill-fc498c64-4eec-4170-ac9f-7bc72c862e97-default_0.jpg?ts=1664525517490";
    img4.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-39//w/997/IMAGE-portrait-ipad-fill-759061a7-bcd2-4789-81dd-b2d8fe5b9745-default_0.jpg?ts=1664528140190";
    img5.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-37//w/997/IMAGE-portrait-ipad-fill-5da17319-4ca2-4d74-93e8-98ea64f20396-default_0.jpg?ts=1663325841790";
    img6.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-join-life/subhome-xmedia-38//w/997/IMAGE-portrait-ipad-fill-95c74b50-cad3-4fc2-a25c-caad2fd32718-default_0.jpg?ts=1663763505720";
}
function changemax(e){
    console.log("max")
    let video=document.querySelector("#video1");
    video.src="./css/components/womenvideo800plus.mp4"
    let img1= document.querySelector("#img1");
    img1.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-39//w/1579/IMAGE-landscape-fill-ccf425f8-7d6e-447a-99b0-d5bafce56b94-default_0.jpg?ts=1664521449113";
    let img2=document.querySelector("#img2");
    let img3=document.querySelector("#img3");
    let img4=document.querySelector("#img4");
    let img5=document.querySelector("#img5");
    let img6=document.querySelector("#img6");
    let img7=document.querySelector("#img7");
    img2.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-39//w/1579/IMAGE-landscape-fill-242f3b54-15ed-4d11-b891-857363cc097e-default_0.jpg?ts=1664521980663";
    img3.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-39//w/1579/IMAGE-landscape-fill-a75dfa66-0c5e-4531-b914-a3c96181ed05-default_0.jpg?ts=1664525516304";
    img4.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-39//w/1579/IMAGE-landscape-fill-4e56674e-9627-4a32-98e1-f3a40f87ce54-default_0.jpg?ts=1664528140249";
    img5.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-37//w/1579/IMAGE-landscape-fill-bd3917b7-471f-4f23-97a8-a6b6aa0d9c84-default_0.jpg?ts=1663325838920";
    img6.src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-join-life/subhome-xmedia-38//w/1579/IMAGE-landscape-fill-4e354fe1-c38f-4d4b-8e9c-d58f5718aefa-default_0.jpg?ts=1663763505030";
}
function max(e){

}
widthmin.addEventListener("change",changemin)
widthmax.addEventListener("change",changemax);

function changebg(){
   
    console.log(window.scrollY)
    if(window.scrollY<400){
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
    if(window.scrollY>400){
        let navbar= document.querySelector(".header__main");
        navbar.style.color="black";
        let logo= document.querySelector(".header__logo_svg");
        logo.style.fill="black";
        let ham= document.querySelector(".hamgurber_logo");
        ham.style.fill="black";
        let search=document.querySelector(".header_searchbar");
        search.style.color="black";
        search.style.borderColor="black";
        let buttn = document.querySelector("#menlink");
        buttn.style.color="black";
        let a1= document.querySelector("#hover_links");
        a1.style.color="black";
    }
    if(window.scrollY>6000){
        let a1= document.querySelector("#hover_links");;
        a1.style.display="none";
        let buttn = document.querySelector("#menlink");
        buttn.style.display="none";
    }
    else{
        let a1= document.querySelector("#hover_links");
        a1.style.display="block";
        let buttn = document.querySelector("#menlink");
        buttn.style.display="block";
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
    window.location.href="../kids.html"
})
m2.addEventListener("click",()=>{
    window.location.href="../kids.html"
})
m3.addEventListener("click",()=>{
    window.location.href="../kids.html"
})
m4.addEventListener("click",()=>{
    window.location.href="../kids.html"
})
m5.addEventListener("click",()=>{
    window.location.href="../kids.html"
})
