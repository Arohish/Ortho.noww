// ===========================================
// ORTHONOW LANDING PAGE
// ===========================================

// ------------------------------
// Initialize GTM Data Layer
// -----------------------------
console.log("script.js loaded");
alert("loaded");
window.dataLayer = window.dataLayer || [];

// ------------------------------
// DOM Elements
// ------------------------------
const form = document.getElementById("consultationForm");
const successMessage = document.getElementById("successMessage");
const phoneInput = document.getElementById("phone");
const header = document.querySelector("header");
const topBtn = document.getElementById("topBtn");

// ------------------------------
// Consultation Form
// ------------------------------
if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const clinic = document.getElementById("clinic").value;

        if (name.length < 3) {
            alert("Please enter a valid name.");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // GTM Event
        window.dataLayer.push({
            event: "consultation_form_submitted",
            patient_name: name,
            phone_number: phone,
            clinic_location: clinic,
            lead_source: "Google Ads",
            page_name: "Consultation Landing Page"
        });


// Show the event in the browser console
console.log("Form Submitted Successfully");
console.log(window.dataLayer);

        form.style.display = "none";
        successMessage.style.display = "block";

        successMessage.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(30px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 600,
                fill: "forwards"
            }
        );

    });

}

// ------------------------------
// FAQ
// ------------------------------
document.querySelectorAll(".faq-question").forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {

            if (item !== answer) {

                item.style.display = "none";

            }

        });

        answer.style.display =
            answer.style.display === "block"
                ? "none"
                : "block";

    });

});

// ------------------------------
// Navbar Shadow
// ------------------------------
window.addEventListener("scroll", () => {

    if (!header) return;

    header.style.boxShadow =
        window.scrollY > 20
            ? "0 8px 25px rgba(0,0,0,.08)"
            : "none";

});

// ------------------------------
// Counter Animation
// ------------------------------
const counters = document.querySelectorAll(".trust-card h2");
let counted = false;

function animateCounters() {

    if (counted) return;

    const section = document.querySelector(".trust");

    if (!section) return;

    if (section.getBoundingClientRect().top < window.innerHeight - 100) {

        counted = true;

        counters.forEach(counter => {

            const text = counter.innerText;
            const value = parseInt(text.replace(/\D/g, ""));
            const suffix = text.replace(/[0-9]/g, "");

            let current = 0;

            const update = () => {

                current += value / 60;

                if (current < value) {

                    counter.innerText = Math.floor(current) + suffix;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = value + suffix;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", animateCounters);

// ------------------------------
// Reveal Animation
// ------------------------------
const cards = document.querySelectorAll(
    ".service-card, .why-card, .doctor-card, .review-card, .location-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = ".7s ease";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    observer.observe(card);

});

// ------------------------------
// Phone Input
// ------------------------------
if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

    });

}

// ------------------------------
// Smooth Scroll
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ------------------------------
// Loader
// ------------------------------
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// ------------------------------
// Scroll To Top
// ------------------------------
if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 500 ? "flex" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
