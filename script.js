const navBtn = document.querySelector("#nav-btn");
const menuBox = document.querySelector('.toggle-menu-box');
navBtn.addEventListener("click", () => {
    if (menuBox.style.display === "none") {
        menuBox.style.display = "block";
    } else {
        menuBox.style.display = "none";
    }
});