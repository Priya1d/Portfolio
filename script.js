const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

});