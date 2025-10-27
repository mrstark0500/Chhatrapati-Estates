// Modal Elements
const modal = document.getElementById("flatModal");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const contactBtn = document.getElementById("contactWhatsApp");

// Flat detail fields
const flatName = document.getElementById("flatName");
const flatPrice = document.getElementById("flatPrice");
const flatRent = document.getElementById("flatRent");
const flatSale = document.getElementById("flatSale");
const flatArea = document.getElementById("flatArea");
const flatBhk = document.getElementById("flatBhk");
const flatFlower = document.getElementById("flatFlower");

let currentIndex = 0;
let currentFlat = null;
let zoom = 1;

// ✅ Flexible Flat Data — just add more objects to this array
const flatsData = [
  {
    name: "3BHK ",
    price: "Rent: 85,000/-",
    images: [
      "rent flat 1/f1.jpg",
      "rent flat 1/f2.jpg",
      "rent flat 1/f3.jpg",
      "rent flat 1/f4.jpg",
      "rent flat 1/f5.jpg",
      "rent flat 1/tour.mp4"
    ],
    rent: "Yes",
    sale: "Yes",
    area: "1000 sqft",
    bhk: "3 BHK",
    flower: "East Facing"
  },
  {
    name: "2BHK",
    price: "Rent: 65,000/-",
    images: [
      "rent flat 2/f1.jpg",
      "rent flat 2/f2.jpg",
      "rent flat 2/f3.jpg",
      "rent flat 2/f4.jpg",
      "rent flat 2/f5.jpg",
      "rent flat 2/2bhk.mp4"
    ],
    rent: "Yes",
    sale: "No",
    area: "780 sqft",
    bhk: "2 BHK",
    flower: "South-North"
  },
  {
    name: "2BHK",
    price: "Rent: 75,000/-",
    images: [
      "rent flat 2/f3.jpg",
      "rent flat 2/f2.jpg",
      "rent flat 2/f1.jpg",
      "rent flat 2/f4.jpg",
      "rent flat 2/f5.jpg"
    ],
    rent: "Yes",
    sale: "Yes",
    area: "950 sqft",
    bhk: "2.5 BHK",
    flower: "West Facing"
  },
   {
    name: "Modern Luxury Flat 4",
    price: "Rent: 75,000/-",
    images: [
      "rent flat 2/f1.jpg",
      "rent flat 2/f2.jpg",
      "rent flat 3/f3.jpg",
      "rent flat 3/f4.jpg",
      "rent flat 3/f5.jpg"
    ],
    rent: "Yes",
    sale: "Yes",
    area: "950 sqft",
    bhk: "2.5 BHK",
    flower: "West Facing"
  }
  // 👇 To add more flats, just copy and paste another object here
];

// ✅ Get all flat cards (auto-detected)
const flatsDivs = document.querySelectorAll("#sale .flats");

// ✅ Auto link HTML flats with data array
flatsDivs.forEach((flatDiv, i) => {
  flatDiv.addEventListener("click", () => {
    // Handle if more flats are in HTML but not in data
    if (!flatsData[i]) {
      alert("Flat details not available yet.");
      return;
    }

    currentFlat = flatsData[i];
    currentIndex = 0;
    updateModal();
    modal.style.display = "flex";
  });
});

// ✅ Update Modal
function updateModal() {
  if (!currentFlat) return;

  const media = currentFlat.images[currentIndex];
  zoom = 1;
  modalImage.style.transform = "scale(1)";

  if (media.endsWith(".mp4") || media.endsWith(".webm")) {
    modalImage.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = media;
  } else {
    modalVideo.style.display = "none";
    modalImage.style.display = "block";
    modalImage.src = media;
  }

  flatName.textContent = currentFlat.name;
  flatPrice.textContent = currentFlat.price;
  flatRent.textContent = currentFlat.rent;
  flatSale.textContent = currentFlat.sale;
  flatArea.textContent = currentFlat.area;
  flatBhk.textContent = currentFlat.bhk;
  flatFlower.textContent = currentFlat.flower;
}

// ✅ Close Modal
closeModal.onclick = () => {
  modal.style.display = "none";
  modalVideo.pause();
};

// ✅ Navigation
document.getElementById("prevImage").onclick = () => {
  if (!currentFlat) return;
  currentIndex = (currentIndex - 1 + currentFlat.images.length) % currentFlat.images.length;
  updateModal();
};
document.getElementById("nextImage").onclick = () => {
  if (!currentFlat) return;
  currentIndex = (currentIndex + 1) % currentFlat.images.length;
  updateModal();
};

// ✅ WhatsApp Contact
contactBtn.onclick = () => {
  const phone = "918767675777";
  const msg = `Hello Matoshri Galaxy, I'm interested in ${currentFlat.name} (${currentFlat.price}).`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};

// ✅ Zoom (mouse)
modalImage.addEventListener("wheel", e => {
  e.preventDefault();
  zoom += e.deltaY * -0.001;
  zoom = Math.min(Math.max(zoom, 1), 3);
  modalImage.style.transform = `scale(${zoom})`;
});

// ✅ Pinch Zoom (mobile)
let distanceStart = 0;
modalImage.addEventListener("touchstart", e => {
  if (e.touches.length === 2) {
    const [t1, t2] = e.touches;
    distanceStart = Math.hypot(t2.pageX - t1.pageX, t2.pageY - t1.pageY);
  }
});

modalImage.addEventListener("touchmove", e => {
  if (e.touches.length === 2) {
    e.preventDefault();
    const [t1, t2] = e.touches;
    const distance = Math.hypot(t2.pageX - t1.pageX, t2.pageY - t1.pageY);
    const scaleChange = distance / distanceStart;
    zoom = Math.min(Math.max(scaleChange, 1), 3);
    modalImage.style.transform = `scale(${zoom})`;
  }
});

// ✅ Close if clicked outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    currentFlat = null;
    modalVideo.pause();
  }
});
