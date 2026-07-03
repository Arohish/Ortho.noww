// =====================================
// ORTHONOW LANDING PAGE
// JavaScript
// ====================================


// -----------------------------
// Initialize dataLayer
// -----------------------------

window.dataLayer = window.dataLayer || [];



// -----------------------------
// Elements
// -----------------------------

const form = document.getElementById("consultationForm");

const successMessage = document.getElementById("successMessage");

const faqQuestions = document.querySelectorAll(".faq-question");




// -----------------------------
// Consultation Form
// -----------------------------

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const clinic = document.getElementById("clinic").value;



    // Name Validation

    if (name.length < 3) {

        alert("Please enter a valid name.");

        return;

    }



    // Phone Validation

    if (!/^[6-9]\d{9}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }



    // ===========================
    // GTM EVENT
    // ===========================

    window.dataLayer.push({

        event: "consultation_form_submitted",

        patient_name: name,

        phone_number: phone,

        clinic_location: clinic,

        lead_source: "Google Ads",

        page_name: "Consultation Landing Page"

    });




    console.log(window.dataLayer);




    // Thank You State

    form.style.display = "none";

   successMessage.style.display="block";

successMessage.animate(

[

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0)"}

],

{

duration:700,

fill:"forwards"

}

);



});




// -----------------------------
// FAQ Accordion
// -----------------------------

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const isVisible = answer.style.display === "block";



        document.querySelectorAll(".faq-answer").forEach(item => {

            item.style.display = "none";

        });



        if (!isVisible) {

            answer.style.display = "block";

        }

    });

});





// -----------------------------
// Navbar Shadow
// -----------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";

    }

    else {

        header.style.boxShadow = "none";

    }

});




// -----------------------------
// Counter Animation
// -----------------------------

const counters = document.querySelectorAll(".trust-card h2");

let counted = false;

function animateCounters() {

    if (counted) return;

    const trigger = window.innerHeight;

    const section = document.querySelector(".trust");



    if (section.getBoundingClientRect().top < trigger - 100) {

        counted = true;



        counters.forEach(counter => {

            const text = counter.innerText;

            const value = parseInt(text.replace(/\D/g, ""));

            const suffix = text.replace(/[0-9]/g, "");



            let current = 0;



            const increment = value / 60;



            const update = () => {

                current += increment;

                if (current < value) {

                    counter.innerText =

                        Math.floor(current) + suffix;

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText =

                        value + suffix;

                }

            };



            update();

        });

    }

}

window.addEventListener("scroll", animateCounters);




// -----------------------------
// Reveal Animation
// -----------------------------

const cards = document.querySelectorAll(

    ".service-card, .why-card, .doctor-card, .review-card, .location-card"

);

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

});



const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transition = ".8s";

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => observer.observe(card));




// -----------------------------
// Phone Input
// -----------------------------

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

});




// -----------------------------
// Smooth Scroll
// -----------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();



        const target = document.querySelector(

            this.getAttribute("href")

        );



        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});




// -----------------------------
// Console Welcome
// -----------------------------

console.log(

    "%cOrthoNow Landing Page Loaded",

    "color:#0F4C81;font-size:16px;font-weight:bold"

);

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

}

window.onload=()=>{

document.getElementById("loader").style.display="none";

};

document.querySelectorAll("button, .primary-btn").forEach(btn => {

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});
