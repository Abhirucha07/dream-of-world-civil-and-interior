// SELECT ELEMENTS
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll("nav a");

/* =========================
   MOBILE MENU TOGGLE
========================= */
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* =========================
   CLOSE MENU AFTER CLICK (MOBILE)
========================= */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

/* =========================
   SMOOTH SCROLL (ALL DEVICES)
========================= */
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");

        // Skip if it's just "#"
        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();

            const headerOffset = 70; // adjust for sticky navbar
            const elementPosition = targetSection.offsetTop - headerOffset;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   BUTTON SCROLL FUNCTION
========================= */
function scrollToContact() {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
        const headerOffset = 70;

        window.scrollTo({
            top: contactSection.offsetTop - headerOffset,
            behavior: "smooth"
        });
    }
}

/* =========================
   CLOSE MENU IF CLICK OUTSIDE
========================= */
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove("active");
    }
});

/* =========================
   FIX FOR RESIZE (TABLET → DESKTOP)
========================= */
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
    }
});