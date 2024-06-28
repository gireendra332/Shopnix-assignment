// navbar script

document.getElementById("navToggle").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  const navClose = document.getElementById("navClose");
  navLinks.classList.toggle("show");
  navClose.classList.toggle("show");
});

document.getElementById("navClose").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  const navClose = document.getElementById("navClose");
  navLinks.classList.remove("show");
  navClose.classList.remove("show");
});

// script for cards step1

const applyButtons = document.querySelectorAll(".btn-custom");

applyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    applyButtons.forEach((btn) => {
      btn.textContent = "Apply";
    });

    button.textContent = "Applied";
  });
});

//   script for step3

// js for form
document.addEventListener("DOMContentLoaded", function () {
  const productName = document.getElementById("product-name");
  productName.addEventListener("input", updatePreview);

  const productDescription = document.getElementById("product-description");

  productDescription.addEventListener("input", updatePreview);

  const productImage = document.getElementById("product-image");
  productImage.addEventListener("change", updateImagePreview);

  const netPrice = document.getElementById("product-net-price");
  netPrice.addEventListener("input", updatePricePreview);
  const listPrice = document.getElementById("product-list-price");

  const previewTitle = document.getElementById("product-preview-title");
  listPrice.addEventListener("input", updatePricePreview);
  const previewDescription = document.getElementById(
    "product-preview-description"
  );
  const previewImage = document.getElementById("product-preview-image");
  const previewNetPrice = document.getElementById("product-preview-net-price");
  const previewListPrice = document.getElementById(
    "product-preview-list-price"
  );

  function updatePreview() {
    previewTitle.textContent = productName.value;
    previewDescription.textContent = productDescription.value;
  }

  function updateImagePreview() {
    const file = productImage.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.src = "default-image.png";
    }
  }

  function updatePricePreview() {
    previewNetPrice.textContent = netPrice.value ? `RS ${netPrice.value}` : "0";

    // previewNetPrice.textContent = netPrice.value || "0";
    previewListPrice.textContent = listPrice.value
      ? `RS ${listPrice.value}`
      : "0";
  }
});

// //   document.getElementById("back-button").onclick = function () {
// //     window.location.href = "../page2/page2.html";
//   };

// script for each step display
function showSection(sectionNumber) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });

  const sectionToShow = document.getElementById(`section${sectionNumber}`);
  sectionToShow.classList.remove("hidden");
}
