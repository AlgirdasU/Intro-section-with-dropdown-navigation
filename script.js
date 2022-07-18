"use strict";
/*
const nav = document.querySelector(".menu-nav");
const navList = document.querySelector(".menu-nav__list");
const navItem = document.querySelector(".menu-nav__item");
const navLink = document.querySelector(".menu-nav__link");
const navIcon = document.querySelectorAll(".menu-nav__icon");
const dropdown = document.querySelectorAll(".dropdown");
const navIconUp = document.querySelector("menu-nav__icon--up");
const navIconDown = document.querySelector("menu-nav__icon--down");

document.addEventListener("click", function (e) {
  const clickedDropdownButton = e.target.closest("[data-btn]");
  // 1. if no clicked on the ddButton && clicked inside dropdown, then return (do nothing).
  if (!clickedDropdownButton && e.target.closest(".dropdown") != null) return;

  let currentDropdown;
  // 2. If we clicked ddButton, currentDropdown is equal dropdown.
  if (clickedDropdownButton) {
    currentDropdown = document.querySelector(
      `.dropdown__${clickedDropdownButton.dataset.btn}`
    );
    // 3. If dropdown is closed(hidden), then we add(toggle) class="dropdown__visible" and vice versa
    currentDropdown.classList.toggle("dropdown__visible");

    //////////////
    // Change icons down > up
    // clickedDropdownButton
    //   .querySelectorAll(".menu-nav__icon")
    //   .forEach((icon) => icon.classList.toggle("menu-nav__icon--hidden"));
    ///////
  }

  // 4. we loop over all opened dropdown and close them exept the one that we just opened.
  document.querySelectorAll(".dropdown__visible").forEach((dropdown) => {
    // if (dropdown === currentDropdown) return;
    // dropdown.classList.remove("dropdown__visible");
    console.log(dropdown);
    currentDropdown === dropdown
      ? "return"
      : dropdown.classList.remove("dropdown__visible");
  });
});
*/
