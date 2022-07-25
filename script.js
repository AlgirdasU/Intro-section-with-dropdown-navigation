"use strict";

const navItemHover = document.querySelectorAll(".menu-nav__item--hover");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mobileBc = document.querySelector(".mobile-bc");
const navIcon = document.querySelectorAll(".menu-nav__icon");

document.addEventListener("click", function (e) {
  if (window.innerWidth < 900) {
    const clickedDropdownButton = e.target.closest("[data-btn]");
    if (!clickedDropdownButton && e.target.closest(".dropdown") != null) return;

    let currentDropdown;
    let currentDropdownList;
    let currentIcon;
    if (clickedDropdownButton) {
      currentDropdown = document.querySelector(
        `.dropdown__${clickedDropdownButton.dataset.btn}`
      );

      currentDropdownList = document.querySelector(
        `.dropdown__list--${clickedDropdownButton.dataset.btn}`
      );

      currentIcon = document.querySelector(
        `.menu-nav__icon--${clickedDropdownButton.dataset.btn}`
      );

      // If dropdown is closed(hidden), then we add(toggle) class="dropdown__visible" and vice versa
      currentDropdown.classList.toggle("dropdown__visible");
      currentDropdownList.classList.toggle("dropdown__list--active");
      currentIcon.classList.toggle("menu-nav__icon--rotate");
    }

    // If you'll hide this code from HERE to 55 line you can open all sub-menu at the same time.
    // Menu arrow btn's are rotated.
    document.querySelectorAll(".menu-nav__icon--rotate").forEach((rotate) => {
      if (currentIcon === rotate) return;
      rotate.classList.remove("menu-nav__icon--rotate");
    });
    // we loop over all opened dropdown and close them exept the one that we just opened.
    document.querySelectorAll(".dropdown__visible").forEach((dropdown) => {
      currentDropdown === dropdown
        ? "return"
        : dropdown.classList.remove("dropdown__visible");
    });
    // The Position: absolute is changed to relative
    document.querySelectorAll(".dropdown__list--active").forEach((active) => {
      if (currentDropdownList === active) return;
      active.classList.remove("dropdown__list--active");
    });
    // TO HERE
  }
});

window.onload = resetMenu();
function resetMenu() {
  if (window.innerWidth <= 900) {
    navItemHover.forEach((hover) =>
      hover.classList.remove("menu-nav__item--hover")
    );
  }
  if (window.innerWidth > 900) {
    navItemHover.forEach((hover) =>
      hover.classList.add("menu-nav__item--hover")
    );

    document
      .querySelectorAll(".menu-nav__icon--rotate")
      .forEach((icon) => icon.classList.remove("menu-nav__icon--rotate"));
    document
      .querySelectorAll(".dropdown__list--active")
      .forEach((ddList) => ddList.classList.remove("dropdown__list--active"));

    document
      .querySelectorAll(".dropdown__visible")
      .forEach((visible) => visible.classList.remove("dropdown__visible"));
  }
}
window.addEventListener("resize", resetMenu);

// We switch between menu/close btn and add transparent dark grey bc.
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  mobileBc.classList.toggle("transparent-mobile-bc");
});
