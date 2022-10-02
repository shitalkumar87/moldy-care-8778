import footer from "../components/component.js";

let Footer=document.getElementById("footer")
Footer.innerHTML=footer()
 

import manufacture from "../components/manufacture.js"

let endpart=document.getElementById("ending")
endpart.innerHTML=manufacture()


class loginclass {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
    chek() {
      let data = JSON.parse(localStorage.getItem("signupdata")) || [];
      let newdata = data.filter((element) => {
        return this.email == element.email;
      });
      if (newdata.length > 0) {
        newdata =newdata .filter((element) => {
          return this.password == element.password;
        });
        if (newdata.length > 0) {
          localStorage.setItem("logeduser", JSON.stringify(newdata[0]));
          return true;
        } else {
          return false;
        }
      } else {
        alert("You Seems to be a New User, please SignUp");
      }
    }
  }
  let data = JSON.parse(localStorage.getItem("signupdata")) || [];
  
  let login = localStorage.setItem("login", false);
  
 
  
  let  signinFun= () => {
    event.preventDefault();
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPasswd').value;
    let user = new loginclass(email, password);
    if (user.chek()) {
      alert("Valid Credentials");
      localStorage.setItem("login", true);
       window.location.href = "./processing.html";
    } else {
      alert("Wrong Password");
    }
  };
 
  document.querySelector('#signin').addEventListener("click",signinFun)