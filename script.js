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

    // Certificate lightbox

    var lightbox = document.getElementById("cert-lightbox");
    var certTrigger = document.querySelector(".certification-image-link");
    var certClose = document.querySelector(".cert-lightbox-close");

    if (lightbox && certTrigger && certClose) {
        certTrigger.addEventListener("click", function () {
            lightbox.hidden = false;
            requestAnimationFrame(function () {
                lightbox.classList.add("active");
            });
            document.body.style.overflow = "hidden";
        });

        function closeLightbox() {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
            setTimeout(function () {
                lightbox.hidden = true;
            }, 300);
        }

        certClose.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
        });
    }

})();
