import footer from "../components/component.js";
 
let Footer=document.getElementById("footer")
Footer.innerHTML=footer()
 
 

import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()


class signupclass {
    constructor(email, password) {
      
      this.email = email;
      this.password = password;
    }
    signup() {
      if (this.#vlaidate()) {
        return true;
      } else {
        return false;
      }
    }
  
    #vlaidate() {
      if (this.password.length > 7 && this.password.includes("@")) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  let signupdataLS = JSON.parse(localStorage.getItem("signupdata")) || [];
  
  let Fil = (email) => {
    let chek = signupdataLS.filter((ele) => {
      return ele.email == email;
    });
    if (chek.length > 0) {
      return false;
    } else {
      return true;
    }
  };
  
  let signupFun=(event)=>{
    event.preventDefault()
   // let name=document.getElementById('name').value;
   let email=document.getElementById('email').value;
   let password=document.getElementById('password').value;
   let user = new signupclass(email,password);
    console.log(user);
    if (user.signup()) {
      if (Fil(email)) {
        alert("Account Created Succesfully");
        signupdataLS.push(user);
        localStorage.setItem("signupdata", JSON.stringify(signupdataLS));
        window.location.href="login.html"
      } else {
        alert("User Already Exists!");
      }
    } 
    else {
      alert("Password should contain atleast one special character and 6 characters");
    }
   
  }
  
  
  document.querySelector('#signUp').addEventListener("click",signupFun);