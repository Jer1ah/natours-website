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
}());

// popup card functionality
const popupCardController = (function() {
    const _openButton = document.querySelector(".packages-button");
    const _closeButton = document.querySelector(".close-icon");
    const _overlay = document.querySelector(".popup-overlay");
    const _popupCard = document.querySelector(".popup-card");

    _openButton.addEventListener("click", (event) => {
        event.preventDefault();
        _overlay.style.visibility = "visible";
        _overlay.style.opacity = 1;

        _popupCard.style.visibility = "visible";
        _popupCard.style.opacity = 1;
    });

    _closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        _overlay.style.visibility = "hidden";
        _overlay.style.opacity = 0;

        _popupCard.style.visibility = "hidden";
        _popupCard.style.opacity = 0;
    });

    _overlay.addEventListener("click", (event) => {
        event.preventDefault();
        _overlay.style.visibility = "hidden";
        _overlay.style.opacity = 0;

        _popupCard.style.visibility = "hidden";
        _popupCard.style.opacity = 0;
    });
}());

// prevent default functionality
const preventDefaultController = (function() {
    const _anchors = document.querySelectorAll("a");
    for(let i = 0; i < _anchors.length; i++) {
        _anchors[i].addEventListener("click", (event) => {
            if( _anchors[i].classList[0] !== "header__button" ) {
                event.preventDefault();
            }
        });
    }
}());

// booking card functionality
const bookingCardController = (() => {
    const _submitButton = document.querySelector('.contact-button');
    const _submitTitle = document.querySelector('.contact h5');

    _submitButton.addEventListener('click', () => {
        _submitTitle.style.opacity = "1";

        window.setTimeout(() => {
            _submitTitle.style.opacity = "0";
        }, 3500);
    });
})();