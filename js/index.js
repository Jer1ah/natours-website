// navigation functionality
const navigationController = (function() {
    const _navButton = document.querySelector(".navigation__button");
    const _navBackground = document.querySelector(".navigation__background");

    _navButton.addEventListener("click", () => {
        if(window.getComputedStyle(_navBackground).transform === "none" || window.getComputedStyle(_navBackground).transform === "matrix(0, 0, 0, 0, 0, 0)") {
            _navBackground.style.transform = "scale(80)";
        } else {
            _navBackground.style.transform = "scale(0)";
        }
    });
}())
