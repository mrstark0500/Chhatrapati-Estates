// =======================
// Smooth Scroll to Listing
// =======================
document.querySelectorAll('.goToListing').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('listingSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =======================
// WhatsApp Form Submission
// =======================
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('inquiryName').value.trim();
        if(name === "") {
            alert("Please enter your name!");
            return;
        }
        const phone = "918975687004";
        const message = `Hello Matoshri Galaxy, I am ${name} and interested in your flats.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
}

// =======================
// Email Form Submission (Footer Support)
// =======================
const emailForm = document.getElementById('emailForm');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('supportName').value.trim();
        if(name === "") {
            alert("Please enter your name!");
            return;
        }

        // EmailJS send
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            to_email: "nilrajj0001@gmail.com",
            message: `Hello Matoshri Galaxy, My name is ${name} and I am interested in your flats.`
        }).then(function(response) {
            alert("Your inquiry has been sent successfully!");
            document.getElementById('supportName').value = '';
        }, function(error) {
            alert("Failed to send. Please try again later.");
        });
    });
}

