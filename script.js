"use strict";

const nav = document.querySelector(".menu-nav");
const navList = document.querySelector(".menu-nav__list");
const navItem = document.querySelector(".menu-nav__item");
const navItemHover = document.querySelectorAll(".menu-nav__item--hover");
const navLink = document.querySelector(".menu-nav__link");
// const navIcon = document.querySelectorAll(".menu-nav__icon");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
// const navIconUp = document.querySelector("menu-nav__icon--up");
// const navIconDown = document.querySelector("menu-nav__icon--down");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

document.addEventListener("mouseover", () => {
  if (screen.width < 900) {
    navItemHover.forEach(
      (hover) => hover.classList.remove("menu-nav__item--hover")
      // console.log(hover.classList.remove("menu-nav__item--hover"))
    );
  }
  if (screen.width > 900) {
    navItemHover.forEach((hover) =>
      hover.classList.add("menu-nav__item--hover")
    );
  }
});

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

document.addEventListener("click", function (e) {
  if (screen.width < 900) {
    const clickedDropdownButton = e.target.closest("[data-btn]");
    // 1. if no clicked on the ddButton && clicked inside dropdown, then return (do nothing).
    if (!clickedDropdownButton && e.target.closest(".dropdown") != null) return;
    // const t = clickedDropdownButton;
    // console.log(t);

    // const test = clickedDropdownButton.querySelectorAll(".menu-nav__icon");
    // console.log(test);

    let currentDropdown;
    let currentDropdownList; // Mobile 00
    let currentIcon;
    // 2. If we clicked ddButton, currentDropdown is equal dropdown.
    if (clickedDropdownButton) {
      currentDropdown = document.querySelector(
        `.dropdown__${clickedDropdownButton.dataset.btn}`
      );

      // mobile 01
      currentDropdownList = document.querySelector(
        `.dropdown__list--${clickedDropdownButton.dataset.btn}`
      );

      // ICON rotate
      currentIcon = document.querySelector(
        `.menu-nav__icon--${clickedDropdownButton.dataset.btn}`
      );

      // 3. If dropdown is closed(hidden), then we add(toggle) class="dropdown__visible" and vice versa
      currentDropdown.classList.toggle("dropdown__visible");
      currentDropdownList.classList.toggle("dropdown__list--active"); // mobile 02
      // ICON
      currentIcon.classList.toggle("menu-nav__icon--rotate");
    }

    document.querySelectorAll(".menu-nav__icon--rotate").forEach((icon) => {
      if (currentIcon === icon) return;
      icon.classList.remove("menu-nav__icon--rotate");
    });
    // ICON

    // we loop over all opened dropdown and close them exept the one that we just opened.
    document.querySelectorAll(".dropdown__visible").forEach((dropdown) => {
      // if (dropdown === currentDropdown) return;
      // dropdown.classList.remove("dropdown__visible");
      currentDropdown === dropdown
        ? "return"
        : dropdown.classList.remove("dropdown__visible");
    });

    // The Position: absolute is changed to relative
    document.querySelectorAll(".dropdown__list--active").forEach((active) => {
      if (currentDropdownList === active) return;
      active.classList.remove("dropdown__list--active");
    });
    ///////////// active
  }
});
