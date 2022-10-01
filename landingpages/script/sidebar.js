hidesidebar = () => {
  let s = document.querySelector("#sidebar__content-wrap");
  s.style.display = "none";
  let r = document.querySelector(".hamburger");
  r.style.display = "block";
};
function womenside(){
  let s= document.querySelector("#womenside");
  let a= document.querySelector("#manside");
  let d= document.querySelector("#kidside");
  s.style.display= "block";
  a.style.display= "none";
  d.style.display= "none";
  
}
function menside(){
  let s= document.querySelector("#womenside");
  let a= document.querySelector("#manside");
  let d= document.querySelector("#kidside");
  s.style.display= "none";
  a.style.display= "block";
  d.style.display= "none";
  
}
function kidsside(){
  let s= document.querySelector("#womenside");
  let a= document.querySelector("#manside");
  let d= document.querySelector("#kidside");
  s.style.display= "none";
  a.style.display= "none";
  d.style.display= "block";
  
}