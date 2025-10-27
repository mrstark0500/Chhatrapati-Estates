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
const flatSale = document.getElementById("flatDeposit");
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
    Deposit: "2 Lakhs",
    area: "982 sqft",
    bhk: "3BHK",
    flower: "East-West Facing"
  },
  {
    name: "2BHK",
    price: "Rent: 63,000/-",
    images: [
      "rent flat 2/f1.jpg",
      "rent flat 2/f2.jpg",
      "rent flat 2/f3.jpg",
      "rent flat 2/f4.jpg",
      "rent flat 2/f5.jpg",
      "rent flat 2/2bhk.mp4"
    ],
    rent: "Yes",
    Deposit: "1.5 Lakhs",
    area: "780 sqft",
    bhk: "2BHK",
    flower: "South-North(more options available)"
  },
  {
    name: "2BHK",
    price: "Rent: 63,000/-",
    images: [
      "rent flat 2/f3.jpg",
      "rent flat 2/f2.jpg",
      "rent flat 2/f1.jpg",
      "rent flat 2/f4.jpg",
      "rent flat 2/f5.jpg"
    ],
    rent: "Yes",
    Deposit: "1.5 Lakhs",
    area: "780 sqft",
    bhk: "2BHK",
    flower: "South Facing(more options available)"
  },
   {
    name: "3BHK",
    price: "Rent: 85,000/-",
    images: [
      "3bhk farbised/f1.jpg",
      "3bhk farbised/f2.jpg",
      "3bhk farbised/f3.jpg",
      "3bhk farbised/f4.jpg",
      "3bhk farbised/f5.jpg"
    ],
    rent: "Yes",
    Deposit: "2 Lakhs",
    area: "950 sqft",
    bhk: "3BHK",
    flower: "East Facing"
  }, {
    name: "2BHK",
    price: "Rent: 63,000/-",
    images: [
      "rent flat 2/f1.jpg",
      "rent flat 2/f2.jpg",
      "rent flat 2/f3.jpg",
      "rent flat 2/f4.jpg",
      "rent flat 2/f5.jpg"
    ],
    rent: "Yes",
    Deposit: "2 Lakhs",
    area: "780 sqft",
    bhk: "2BHK",
    flower: "West Facing"
  },
  {
    name: "3BHK(Farbised)",
    price: "Rent: 85,000/-",
    images: [
      "3bhk farbised/f1.jpg",
      "3bhk farbised/f2.jpg",
      "3bhk farbised/f3.jpg",
      "3bhk farbised/f4.jpg",
      "3bhk farbised/f5.jpg"
    ],
    rent: "Yes",
    Deposit: "2 Lakhs",
    area: "982 sqft",
    bhk: "3BHK",
    flower: "East-West Facing"
  },
  {
    name: "3BHK(28F) ",
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
    Deposit: "2 Lakhs",
    area: "982 sqft",
    bhk: "3BHK",
    flower: "East-West Facing"
  },
  {
    name: "3BHK(semi Farbised)",
    price: "Rent: 85,000/-",
    images: [
      "3bhk semi farbised/f1.jpg",
      "3bhk semi farbised/f2.jpg",
      "3bhk semi farbised/f3.jpg",
      "3bhk semi farbised/f4.jpg",
      "3bhk semi farbised/f5.jpg"
    ],
    rent: "Yes",
    Deposit: "2 Lakhs",
    area: "950 sqft",
    bhk: "3BHK",
    flower: "East-West Facing"
  },{
    name: "3BHK(34F) ",
    price: "Rent: 85,000/-",
    images: [
      "rent flat 1/f3.jpg",
      "rent flat 1/f2.jpg",
      "rent flat 1/f1.jpg",
      "rent flat 1/f4.jpg",
      "rent flat 1/f5.jpg",
      "rent flat 1/tour.mp4"
    ],
    rent: "Yes",
    Deposit: "2 Lakhs",
    area: "982 sqft",
    bhk: "3BHK",
    flower: "East Facing"
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
  flatSale.textContent = currentFlat.Deposit;
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