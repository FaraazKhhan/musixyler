const hamburgerBtn=document.querySelector(".hamburger-menu"),navbar=document.querySelector(".navbar");hamburgerBtn.addEventListener("click",(()=>{navbar.classList.toggle("navbar-active"),hamburgerBtn.classList.toggle("hamburger-lines")}));const navlinks=document.querySelectorAll(".nav-link");navlinks.forEach((e=>{e.addEventListener("click",(()=>{navbar.classList.toggle("navbar-active"),hamburgerBtn.classList.toggle("hamburger-lines")}))}));const submitBtn=document.querySelector("#submit-btn");submitBtn.addEventListener("click",(()=>{alert("Website is not yet ready")}));