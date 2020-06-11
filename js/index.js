// navigation functionality
const navigationController = (function() {
    const _navButton = document.querySelector(".navigation__button");
    const _navBackground = document.querySelector(".navigation__background");
    const _navList = document.querySelector(".navigation__list");

    _navButton.addEventListener("click", () => {
        if(window.getComputedStyle(_navList).visibility === "hidden") {
            _navBackground.style.transform = "scale(80)";
            _navList.style.visibility = "visible";
            _navList.style.opacity = "1";
        } else {
            _navBackground.style.transform = "scale(0)";
            _navList.style.visibility = "hidden";
            _navList.style.opacity = "0";
        }
    });
}())