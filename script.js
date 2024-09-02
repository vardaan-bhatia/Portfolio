//scroll Sections Active Link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*=${id}]`)
        .classList.add("active");
    }
  });
};

//scroll Reveal

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
ScrollReveal().reveal(".tech-stack", { origin: "left" });
ScrollReveal().reveal(".my-experience", { origin: "right" });
ScrollReveal().reveal(".projects .heading", { origin: "top" });
ScrollReveal().reveal(".image-part", { origin: "left" });
ScrollReveal().reveal(".activity-box", { origin: "right" });
ScrollReveal().reveal(".image-container", { origin: "left" });
ScrollReveal().reveal(".form", { origin: "right" });

//typed animation

var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Tech Blogger"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active"); // Toggle the active class to show/hide the menu
});
