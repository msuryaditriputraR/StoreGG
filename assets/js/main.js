/*=============== NAV TOGGLE ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    console.log(navMenu);
    navMenu.classList.toggle("active-menu");
});
