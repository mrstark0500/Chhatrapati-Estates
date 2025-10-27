// ===== Smooth Bottom-to-Up Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const selectors = [
    "h1", "#heads", "header", "#catogry", "#down", "#end", "#footer", "#ender"
  ];

  const elements = [];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
      el.style.transition = "all 1s ease-out";
      elements.push(el);
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

// ===== Gallery Modal Slider =====
const modal = document.createElement("div");
modal.id = "galleryModal";
modal.style.cssText = `
  display:none; position:fixed; top:0; left:0; width:100%; height:100%;
  background:rgba(0,0,0,0.9); justify-content:center; align-items:center;
  z-index:1000; flex-direction:column; color:#fff; text-align:center;
  padding:20px;
`;
modal.innerHTML = `
  <span id="closeGalleryModal" style="position:absolute;top:20px;right:40px;font-size:30px;cursor:pointer;">&times;</span>
  <img id="galleryModalImage" src="" style="max-width:80%; max-height:70%; border-radius:8px; box-shadow:0 0 20px rgba(0,0,0,0.5);">
  <h2 id="galleryModalTitle" style="margin-top:15px;"></h2>
  <button id="galleryContactBtn" style="margin-top:15px;padding:10px 20px;font-size:16px;cursor:pointer;background:#25D366;color:#fff;border:none;border-radius:6px;">Contact on WhatsApp</button>
  <div style="margin-top:10px;">
    <button id="prevGalleryImage" style="margin-right:10px;">Prev</button>
    <button id="nextGalleryImage">Next</button>
  </div>
`;
document.body.appendChild(modal);

// ===== Modal Elements =====
const galleryModal = document.getElementById("galleryModal");
const galleryModalImage = document.getElementById("galleryModalImage");
const galleryModalTitle = document.getElementById("galleryModalTitle");
const closeGalleryModal = document.getElementById("closeGalleryModal");
const prevGalleryImage = document.getElementById("prevGalleryImage");
const nextGalleryImage = document.getElementById("nextGalleryImage");
const galleryContactBtn = document.getElementById("galleryContactBtn");

// ===== Gallery Data (You can easily edit images here) =====
const galleryData = [
  { section: "Luxury Flats", images: ["Luxury Flats/f1.jpg","Luxury Flats/f12.jpg","Luxury Flats/f5.jpg","Luxury Flats/f21.jpg","Luxury Flats/f3.jpg","Luxury Flats/f24.jpg","Luxury Flats/f25.jpg","Luxury Flats/f26.jpg","Luxury Flats/f18.jpg","Luxury Flats/f19.jpg","Luxury Flats/f20.jpg",] },
  { section: "Comfortable Interiors", images: ["Interiors/f1.jpg", "Interiors/f3.jpg", "Interiors/f4.jpg", "Interiors/f5.jpg", "Interiors/f6.jpg", "Interiors/f7.jpg", "Interiors/f8.jpg", "Interiors/f9.jpg", "Interiors/f10.jpg", "Interiors/f11.jpg"] },
  { section: "Scenic Views", images: ["Scenic/f2.jpg", "Scenic/f3.jpg", "Scenic/f1.jpg", "Scenic/f4.jpg", "Scenic/f5.jpg", "Scenic/f6.jpg", "Scenic/f7.jpg",] },
  { section: "Amenities", images: ["Amenities/f1.jpg", "Amenities/f2.jpg", "Amenities/f3.jpg", "Amenities/f4.jpg", "Amenities/f5.jpg", "Amenities/f6.jpg", "Amenities/f7.jpg", "Amenities/f8.jpg", "Amenities/f9.jpg", "Amenities/f10.jpg", "Amenities/f11.jpg"] }
];

// ===== Modal Logic =====
const galleryDivs = document.querySelectorAll("#catogry > div");
let currentGallery = null, currentIndex = 0;

galleryDivs.forEach((div, idx) => {
  div.addEventListener("click", () => {
    currentGallery = galleryData[idx];
    currentIndex = 0;
    showGalleryImage();
    galleryModal.style.display = "flex";
  });
});

function showGalleryImage() {
  if (!currentGallery) return;
  galleryModalImage.src = currentGallery.images[currentIndex];
  galleryModalTitle.textContent = currentGallery.section;
}

closeGalleryModal.onclick = () => galleryModal.style.display = "none";

prevGalleryImage.onclick = () => {
  if (!currentGallery) return;
  currentIndex = (currentIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
  showGalleryImage();
};

nextGalleryImage.onclick = () => {
  if (!currentGallery) return;
  currentIndex = (currentIndex + 1) % currentGallery.images.length;
  showGalleryImage();
};

galleryContactBtn.onclick = () => {
  if (!currentGallery) return;
  const phone = "918767675777";
  const message = `Hello Chhatrapati Estates, I am interested in the section: ${currentGallery.section}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

// ===== Footer Inquiry via WhatsApp =====
const footerSubmitBtn = document.getElementById("footerSubmitBtn");
if (footerSubmitBtn) {
  footerSubmitBtn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.getElementById("footerName").value.trim();
    if (name === "") {
      alert("Please enter your name!");
      return;
    }

    const phone = "918767675777";
    const message = `Hello Chhatrapati Estates, I am ${name}. I would like to know more about your flats.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    alert("Redirecting to WhatsApp...");
    document.getElementById("footerName").value = "";
  });
}
