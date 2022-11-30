/*=============== NAV TOGGLE ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    console.log(navMenu);
    navMenu.classList.toggle("active-menu");
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    scrollUp.classList[this.scrollY >= 200 ? "add" : "remove"]("show-scroll");
}

window.addEventListener("scroll", scrollUp);
