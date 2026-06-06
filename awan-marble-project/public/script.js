/* =====================
   LAZY LOADING
===================== */
function lazyLoad() {
  const images = document.querySelectorAll("img.lazy");

  for (let img of images) {
    if (!img.style.height) {
      img.style.height = "300px";
    }

    if (img.offsetTop < window.innerHeight + window.pageYOffset) {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }

      if (img.dataset.alt) {
        img.alt = img.dataset.alt;
      }

      img.classList.remove("lazy");
      img.addEventListener(
        "load",
        function () {
          img.style.height = "auto";
          img.classList.add("loaded");
        },
        { once: true }
      );
    }
  }
}

window.addEventListener("load", lazyLoad);
window.addEventListener("scroll", lazyLoad, { passive: true });
window.addEventListener("resize", lazyLoad);

/* =====================
   FORM VALIDATION
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form");
  if (!form) return;

  const nameRe = /^[a-zA-Z ]{3,}$/;
  const emailRe = /^(.+)@([^\.].*)\.([a-z]{2,})$/;
  const phoneRe = /^03\d{2}-?\d{7}$/;

  form.addEventListener("submit", function (e) {
    let isValid = true;

    const fullname = document.querySelector("#fullname");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const projectType = document.querySelector("#project-type");
    const material = document.querySelector("#material");
    const budget = document.querySelector("#budget");
    const timeline = document.querySelector("#timeline");

    // Full Name Validation
    if (!fullname.value.trim() || !nameRe.test(fullname.value.trim())) {
      fullname.style.background = "#ffdddd";
      fullname.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      fullname.style.background = "";
      fullname.setAttribute("aria-invalid", "false");
    }

    // Email Validation
    if (!email.value.trim() || !emailRe.test(email.value.trim())) {
      email.style.background = "#ffdddd";
      email.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      email.style.background = "";
      email.setAttribute("aria-invalid", "false");
    }

    // Phone Validation
    if (!phone.value.trim() || !phoneRe.test(phone.value.trim())) {
      phone.style.background = "#ffdddd";
      phone.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      phone.style.background = "";
      phone.setAttribute("aria-invalid", "false");
    }

    // Project Type Validation
    if (!projectType.value) {
      projectType.style.background = "#ffdddd";
      projectType.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      projectType.style.background = "";
      projectType.setAttribute("aria-invalid", "false");
    }

    // Material Validation
    if (!material.value) {
      material.style.background = "#ffdddd";
      material.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      material.style.background = "";
      material.setAttribute("aria-invalid", "false");
    }

    // Budget Validation
    if (!budget.value) {
      budget.style.background = "#ffdddd";
      budget.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      budget.style.background = "";
      budget.setAttribute("aria-invalid", "false");
    }

    // Timeline Validation
    if (!timeline.value) {
      timeline.style.background = "#ffdddd";
      timeline.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      timeline.style.background = "";
      timeline.setAttribute("aria-invalid", "false");
    }

    if (!isValid) {
      e.preventDefault();
      alert("Please fix the highlighted required fields before submitting.");
    }
  });

  // Clear validation styling on input
  const requiredFields = form.querySelectorAll(
    "#fullname, #email, #phone, #project-type, #material, #budget, #timeline"
  );
  requiredFields.forEach((el) => {
    const evt = el.tagName.toLowerCase() === "select" ? "change" : "input";
    el.addEventListener(evt, () => {
      if (el.style.background) {
        el.style.background = "";
        el.setAttribute("aria-invalid", "false");
      }
    });
  });
});

/* =====================
   PRODUCT LOADING
===================== */
const API_URL = "/api/products";

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});

/**
 * Load and display products from API
 */
async function loadProducts() {
  const productContainer = document.getElementById("productContainer");
  const productBox = document.getElementById("products");
  
  if (!productContainer && !productBox) return;

  const container = productContainer || productBox;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    // Handle API response format
    const products = data.products || data || [];

    if (!Array.isArray(products) || products.length === 0) {
      container.innerHTML = "<p style='text-align: center; padding: 20px;'>No products available at the moment.</p>";
      return;
    }

    // Use template fragments for better performance
    const fragment = document.createDocumentFragment();
    const template = document.createElement("template");

    products.forEach((product) => {
      const html = formatProductCard(product);
      template.innerHTML = html;
      fragment.appendChild(template.content.cloneNode(true));
    });

    container.innerHTML = "";
    container.appendChild(fragment);
  } catch (error) {
    console.error("Error loading products:", error);
    container.innerHTML = "<p style='text-align: center; padding: 20px; color: #d32f2f;'>Failed to load products. Please try again later.</p>";
  }
}

/**
 * Format product card HTML
 * @param {Object} product - Product object
 * @returns {string} HTML string
 */
function formatProductCard(product) {
  const category = product.category || "Product";
  const name = product.name || "Unnamed Product";
  const description = product.description || "";
  const price = product.price || 0;
  const image = product.image || "indexPictures/marble.png";
  const features = Array.isArray(product.features) ? product.features : [];

  return `
    <article class="product-card">
      <div class="card-media">
        <span class="tag">${escapeHtml(category)}</span>
        <img src="${escapeHtml(image)}" alt="${escapeHtml(name)}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(description)}</p>
        ${
          features.length > 0
            ? `<div class="features">${features
                .map((f) => `<span>${escapeHtml(f)}</span>`)
                .join("")}</div>`
            : ""
        }
        <div class="detail-price">
          <button class="view-btn" aria-label="View ${escapeHtml(name)} details">View Detail</button>
          <p class="price">From Rs. ${escapeHtml(price.toString())}/sq ft</p>
        </div>
      </div>
    </article>
  `;
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
