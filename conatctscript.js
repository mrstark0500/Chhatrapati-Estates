// ===== Contact Form Submission (WhatsApp) =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!email || !phone) {
        alert("Please fill all required fields!");
        return;
    }

    // ✅ WhatsApp number in international format — NO spaces, NO +
    const whatsappNumber = "918767675777"; // Example: +91 89756 87004 → 918975687004

    // ✅ Encode the message properly for the URL
    const message = encodeURIComponent(
        `📩 New Inquiry from Contact Page\n` +
        `Full Name: ${fullName || "No Name"}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Please share details about available flats.`
    );

    // ✅ WhatsApp API link
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    // ✅ Open WhatsApp chat
    window.open(url, "_blank");

    alert("Redirecting to WhatsApp to send your inquiry...");
    document.getElementById("contactForm").reset();
});


// ===== Footer Support Form Submission (WhatsApp) =====
document.querySelector("#support button").addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    if (!name) {
        alert("Please enter your name!");
        return;
    }

    // ✅ Fixed number — digits only
    const whatsappNumber = "918767675777"; // Example: +91 87676 75777 → 918767675777

    const message = encodeURIComponent(
        `🧾 Footer Inquiry\n` +
        `Name: ${name}\n` +
        `I would like to get support or more information.`
    );

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");

    alert("Redirecting to WhatsApp...");
    document.getElementById("name").value = "";
});
