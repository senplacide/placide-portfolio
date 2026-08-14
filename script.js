(function () {
    "use strict";

    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav-links");

    if (!toggle || !menu) return;

    function setOpen(open) {
        menu.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
        setOpen(!menu.classList.contains("open"));
    });

    menu.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest("header")) setOpen(false);
    });
})();
