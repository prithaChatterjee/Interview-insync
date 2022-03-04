const mobnav = document.querySelector("#mob-menu")
const mobMenu = document.querySelector(".menu-big")

mobnav.addEventListener("click", () => {
    if (mobMenu.classList.contains("show")) {
        mobMenu.classList.remove("show")
    } else {
        mobMenu.classList.add("show")
    }
})