// =========================
// THE HOPE ACADEMY
// JavaScript
// =========================


// Admission / Contact Form
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting THE HOPE ACADEMY!\n\n" +
        "Your admission request has been received.\n\n" +
        "For further information, please call:\n" +
        "0321-4966591"
    );

    contactForm.reset();
});


// =========================
// Navbar Active Link
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// =========================
// Scroll Animation
// =========================

const animatedElements = document.querySelectorAll(
    ".about-box, .class-card, .facility-card, .contact-info, .contact-form"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =========================
// Current Year
// =========================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} THE HOPE ACADEMY. All Rights Reserved.`;

}


// =========================
// Call Button Confirmation
// =========================

const callButton = document.querySelector(".call-btn");

if (callButton) {

    callButton.addEventListener("click", function () {

        console.log(
            "Calling THE HOPE ACADEMY: 0321-4966591"
        );

    });

}
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const parentName = this.querySelector('input[placeholder="Parent Name"]').value;
    const studentName = this.querySelector('input[placeholder="Student Name"]').value;
    const studentClass = this.querySelector("select").value;
    const phone = this.querySelector('input[placeholder="Phone Number"]').value;
    const message = this.querySelector("textarea").value;

    const whatsappMessage =
        "🎓 THE HOPE ACADEMY - Admission Request%0A%0A" +
        "👤 Parent Name: " + encodeURIComponent(parentName) + "%0A" +
        "👨‍🎓 Student Name: " + encodeURIComponent(studentName) + "%0A" +
        "📚 Class: " + encodeURIComponent(studentClass) + "%0A" +
        "📞 Phone: " + encodeURIComponent(phone) + "%0A" +
        "💬 Message: " + encodeURIComponent(message);

    const whatsappNumber = "923214966591";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage,
        "_blank"
    );
});
const successMessage = document.getElementById("success-message");

successMessage.textContent =
    "✅ Admission request prepared successfully! Please send the message on WhatsApp.";

successMessage.style.display = "block";