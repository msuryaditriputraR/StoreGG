/*=============== NAV TOGGLE ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    console.log(navMenu);
    navMenu.classList.toggle("active-menu");
});

/*=============== SHOW / HIDE ELEMENT SCROLL UP ===============*/
function toggleElement(elementId, elementClass) {
    const element = document.getElementById(elementId);

    element.classList[this.scrollY >= 200 ? "add" : "remove"](elementClass);
}

window.addEventListener("scroll", () => {
    /* === Hide Muse === */
    toggleElement("mouse-scroll", "hide-mouse");

    /* === Show Scroll === */
    toggleElement("scroll-up", "show-scroll");
});
