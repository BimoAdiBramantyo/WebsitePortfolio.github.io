window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
        const tab = button.getAttribute("data-tab");

        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(tab).classList.add("active");
    });
});

document.querySelectorAll(".portfolio-item .btn").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const projectItem = button.closest(".portfolio-item");
        const modal = document.getElementById("project-modal");

        // Populate modal content
        document.getElementById("modal-image").src = projectItem.querySelector("img").src;
        document.getElementById("modal-title").textContent = projectItem.querySelector("h3").textContent;
        document.getElementById("modal-description").textContent = projectItem.querySelector("p").textContent;
        document.getElementById("modal-info").textContent = "Additional information about the project.";

        // Add zoom-in animation
        modal.style.display = "flex";
        const modalContent = modal.querySelector(".modal-content");
        modalContent.style.animation = "zoomIn 0.3s ease-in-out forwards";
    });
});

// Close modal functionality
document.querySelector(".close-btn").addEventListener("click", () => {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("project-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Open contact modal
document.querySelector(".home-btn .btn:first-child").addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById("contact-modal");
    modal.style.display = "flex";
});

// Close contact modal
document.querySelector("#contact-modal .close-btn").addEventListener("click", () => {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("contact-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

// Load dark mode preference on page load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
});
