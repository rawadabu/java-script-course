"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// Scroll to
btnScrollTo.addEventListener("click", function (e) {
  //const s1coords = section1.getBoundingClientRect();
  //console.log(e.target.getBoundingClientRect());
  // The distance between click and the top of the page
  //console.log("Current scroll (X/Y)", window.pageXOffset, pageYOffset);

  // To implement smooth, we need to specify an object left, top and behavior properties, but hardcoded
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Event delegation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // el.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   const id = this.getAttribute("href");
  //   console.log(id);
  //   document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  // }); BAD PRACTICE, WHAT IF WE HAVE 10000 ?, it creates 10000 copies?!
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////
//////////////////////////////////////
// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log("LINK", e.target);

//   // STOP PROPAGATION
//   // e.stopPropagation(); // the color only changes for LINK.
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log("CONTAINER", e.target);
//   this.style.backgroundColor = randomColor(0, 255);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log("NAV", e.target);
//   this.style.backgroundColor = randomColor(0, 255);
// });
// So when clicking on Feature, which its navbar link, all the background (child, root) like nav__links and nav will change its colors, interestring
