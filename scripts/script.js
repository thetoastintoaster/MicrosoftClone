"use strict";

const searchButton = document.querySelector(".search-button");
const searchButtonMobile = document.querySelector(".search-button-mobile");
const menuButton = document.querySelector(".menu-button");
const searchBox = document.querySelector(".search-box");
const closeSearch = document.querySelector(".cancel");
const closeSearchMobile = document.querySelector(".back-button");
const homeLink = document.querySelector(".home-link-img");
const navLinks = document.querySelector(".nav-list");
const navLinksTwo = document.querySelector(".nav-box-two");
const navBox = document.querySelector(".nav-box");
const closeMobileMenu = document.querySelector(".close-menu-mobile-button");
const flexDisplay = document.querySelector(".flexDisplay");
const mobileMenu = document.querySelector(".mobile-menu");
const extraLinks = document.querySelector(".all-microsoft-button");
const navMenu = document.querySelector(".nav-menu");
const subNavMenu = document.querySelector(".sub-nav-menu");
const collapsedLinks = document.querySelector(".more-link");

// For the menu and sub menu for mobile
const softwareButton = document.querySelector(".menu-button-software");
const subMenuSoftware = document.querySelector(".mobile-sub-menu-software");
const pcButton = document.querySelector(".menu-button-pc");
const subMenuPc = document.querySelector(".mobile-sub-menu-pc");
const entertainmentButton = document.querySelector(
  ".menu-button-entertainment"
);
const subMenuEntertainment = document.querySelector(
  ".mobile-sub-menu-entertainment"
);
const businessButton = document.querySelector(".menu-button-business");
const subMenuBusiness = document.querySelector(".mobile-sub-menu-business");
const developerButton = document.querySelector(".menu-button-developer");
const subMenuDeveloper = document.querySelector(".mobile-sub-menu-developer");
const otherButton = document.querySelector(".menu-button-other");
const subMenuOther = document.querySelector(".mobile-sub-menu-other");

const subMenuSVGDOWN = document.querySelector(".sub-menu-svg");
const subMenuSVGUP = document.querySelector(".sub-menu-svg-up");
//////////////////////////////////////////

const heroImgOne = document.querySelector(".hero-link-img-container-one");
const heroImgTwo = document.querySelector(".hero-link-img-container-two");
const heroImgThree = document.querySelector(".hero-link-img-container-three");

const heroHeaderBox = document.querySelector(".hero-header-box");
const heroHeaderBoxTwo = document.querySelector(".hero-header-box-two");
const heroHeaderBoxThree = document.querySelector(".hero-header-box-three");

const heroSlideButtonLeft = document.querySelector(".slide-button-left");
const heroSlideButtonRight = document.querySelector(".slide-button-right");

const promoImgTwo = document.querySelector(".promo-link-img-container-two");
const promoImgThree = document.querySelector(".promo-link-img-container-three");
const promoHeaderBoxTwo = document.querySelector(".promo-header-box-two");
const promoHeaderBoxThree = document.querySelector(".promo-header-box-three");

//I made these variables to give the last section (not the footer), animations because animating promoHeaderBoxTwo causes the animation to bug out.
//I'm animating the elements individually, instead of the entire container
const promoHeaderTwo = document.querySelector(".promo-header-two");
const promoHeaderThree = document.querySelector(".promo-header-three");
const promoSubHeaderTwo = document.querySelector(".promo-sub-header-two");
const promoSubHeaderThree = document.querySelector(".promo-sub-header-three");

//The buttons glitch out when animating them individually
// const promoButtonTwo = document.querySelector(".promo-button-two");
// const promoButtonThree = document.querySelector(".promo-button-three");

const promoSlideButtonLeft = document.querySelector(".slide-button-left-promo");
const promoSlideButtonRight = document.querySelector(
  ".slide-button-right-promo"
);

// MEDIA QUERIES

/* 860/16 = 53.75 */
const mediaQueryMobile = window.matchMedia("(max-width: 54em)");
const mediaQueryTablet = window.matchMedia("(min-width: 54em");

/* 925/16 = 57.8125 */
const mediaQueryDesktop = window.matchMedia("(min-width: 57em");

mediaQueryMobile.addListener(mobileChange);
mobileChange(mediaQueryMobile);

mediaQueryTablet.addListener(tabletChange);
tabletChange(mediaQueryTablet);

mediaQueryDesktop.addListener(desktopChange);
desktopChange(mediaQueryDesktop);

// Hides nav links and opens the search bar
searchButton.addEventListener("click", function () {
  if (searchButton.classList.contains("search-button")) {
    navLinks.classList.add("hidden");
    navLinksTwo.classList.add("hidden");
    searchBox.classList.remove("hidden");
    navLinks.classList.remove("flex-display");
  }
});

// Reveals nav links and closes the search bar
closeSearch.addEventListener("click", function () {
  if (searchButton.classList.contains("search-button")) {
    navLinks.classList.remove("hidden");
    navLinksTwo.classList.remove("hidden");
    searchBox.classList.add("hidden");
    navLinks.classList.add("flex-display");
    navBox.classList.remove("flow-remove");
    homeLink.classList.remove("hidden");
    searchButtonMobile.classList.remove("hidden");

    //If the close search button (mobile) is open, close it
    if (!closeSearchMobile.classList.contains("hidden")) {
      closeSearchMobile.classList.add("hidden");
      menuButton.classList.remove("hidden");
    }
  }
});

collapsedLinks.addEventListener("click", function () {
  if (subNavMenu.classList.contains("hidden")) {
    subNavMenu.classList.remove("hidden");
    subNavMenu.classList.add("fade-in");
  } else if (!subNavMenu.classList.contains("hidden")) {
    subNavMenu.classList.remove("fade-in");
    subNavMenu.classList.add("hidden");
  }

  if (!navMenu.classList.contains("hidden")) {
    navMenu.classList.add("hidden");
  }
});
// Reveals menu that contains more navigation links
extraLinks.addEventListener("click", function () {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("grid-display");
    navMenu.classList.add("fade-in");
  } else if (!navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("grid-display");
    navMenu.classList.remove("fade-in");
    navMenu.classList.add("hidden");
  }

  if (!subNavMenu.classList.contains("hidden")) {
    subNavMenu.classList.add("hidden");
  }
});

// (MOBILE) Hides nav links and opens the search bar
searchButtonMobile.addEventListener("click", function () {
  if (1 === 1) {
    menuButton.classList.add("hidden");
    homeLink.classList.add("hidden");
    searchButtonMobile.classList.add("hidden");
    navLinksTwo.classList.add("hidden");
    navBox.classList.add("flow-remove");
    searchButtonMobile.classList.add("hidden");
    closeSearchMobile.classList.remove("hidden");

    searchBox.classList.remove("hidden");
    navLinks.classList.remove("flex-display");
  }

  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    closeMobileMenu.classList.add("hidden");
  }
});

// (MOBILE) Reveals nav links and closes search bar
closeSearchMobile.addEventListener("click", function () {
  if (searchButtonMobile.classList.contains("search-button-mobile")) {
    closeSearchMobile.classList.add("hidden");
    navLinks.classList.remove("hidden");
    navLinksTwo.classList.remove("hidden");
    searchBox.classList.add("hidden");
    navLinks.classList.add("flex-display");
    navBox.classList.remove("flow-remove");
    homeLink.classList.remove("hidden");
    menuButton.classList.remove("hidden");
  }
});

// (MOBILE) Reveals the menu for mobile

menuButton.addEventListener("click", function () {
  menuButton.classList.add("hidden");
  closeMobileMenu.classList.remove("hidden");

  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex-display");
});

// (MOBILE) Hides the menu for mobile and if the search bar is opened, close it
closeMobileMenu.addEventListener("click", function () {
  closeMobileMenu.classList.add("hidden");
  menuButton.classList.remove("hidden");

  mobileMenu.classList.remove("mobile-flex-display");
  mobileMenu.classList.add("hidden");
});

// (MOBILE) Opens sub-menu within the menu when you click any of the links with the arrow-down svg
softwareButton.addEventListener("click", function () {
  menuControls(subMenuSoftware);
});
pcButton.addEventListener("click", function () {
  menuControls(subMenuPc);
});
entertainmentButton.addEventListener("click", function () {
  menuControls(subMenuEntertainment);
});
businessButton.addEventListener("click", function () {
  menuControls(subMenuBusiness);
});
developerButton.addEventListener("click", function () {
  menuControls(subMenuDeveloper);
});
otherButton.addEventListener("click", function () {
  menuControls(subMenuOther);
});

// Change images in the hero (main) section

heroSlideButtonRight.addEventListener("click", function () {
  slideShowControls(
    heroImgOne,
    heroImgTwo,
    heroImgThree,
    heroHeaderBox,
    heroHeaderBoxTwo,
    heroHeaderBoxThree
  );
});

heroSlideButtonLeft.addEventListener("click", function () {
  if (
    heroImgTwo.classList.contains("hidden") &&
    heroImgThree.classList.contains("hidden")
  ) {
    heroImgOne.classList.add("hidden");
    heroImgThree.classList.remove("hidden");

    //ANIMATION
    heroImgThree.classList.add("slidein-left");
    heroHeaderBoxThree.classList.add("slidein-left-text");
    if (heroImgThree.classList.contains("slidein-right")) {
      heroImgThree.classList.remove("slidein-right");
      heroHeaderBoxThree.classList.remove("slidein-right-text");
    }
    ////////////////////
  } else if (
    heroImgOne.classList.contains("hidden") &&
    heroImgTwo.classList.contains("hidden")
  ) {
    heroImgThree.classList.add("hidden");
    heroImgTwo.classList.remove("hidden");

    //ANIMATION
    heroImgTwo.classList.add("slidein-left");
    heroHeaderBoxTwo.classList.add("slidein-left-text");
    if (heroImgTwo.classList.contains("slidein-right")) {
      heroImgTwo.classList.remove("slidein-right");
      heroHeaderBoxTwo.classList.remove("slidein-right-text");
    }
    /////////////////////
  } else if (
    heroImgOne.classList.contains("hidden") &&
    heroImgThree.classList.contains("hidden")
  ) {
    heroImgTwo.classList.add("hidden");
    heroImgOne.classList.remove("hidden");

    // ANIMATION
    heroImgOne.classList.add("slidein-left");
    heroHeaderBox.classList.add("slidein-left-text");
    if (heroImgOne.classList.contains("slidein-right")) {
      heroImgOne.classList.remove("slidein-right");
      heroHeaderBox.classList.remove("slidein-right-text");
    }
  }
});

//Change images in the promotion section

promoSlideButtonRight.addEventListener("click", function () {
  if (promoImgThree.classList.contains("hidden")) {
    promoImgTwo.classList.add("hidden");
    promoImgThree.classList.remove("hidden");

    //ANIMATIOn
    promoImgThree.classList.add("slidein-right");
    promoHeaderThree.classList.add("slidein-right-text");
    promoSubHeaderThree.classList.add("slidein-right-text");
    if (promoImgThree.classList.contains("slidein-left")) {
      promoImgThree.classList.remove("slidein-left");
      promoHeaderThree.classList.remove("slidein-left-text");
      promoSubHeaderThree.classList.remove("slidein-left-text");
      promoButtonThree.classList.remove("slidein-left-text");
    }
    ///////////////////
  } else if (promoImgTwo.classList.contains("hidden")) {
    promoImgTwo.classList.remove("hidden");
    promoImgThree.classList.add("hidden");

    //ANIMATION
    promoImgTwo.classList.add("slidein-right");
    promoHeaderTwo.classList.add("slidein-right-text");
    promoSubHeaderTwo.classList.add("slidein-right-text");
    // promoHeaderBoxTwo.classList.add("slidein-right-text");
    if (promoImgTwo.classList.contains("slidein-left")) {
      promoImgTwo.classList.remove("slidein-left");
      promoHeaderTwo.classList.remove("slidein-left-text");
      promoSubHeaderTwo.classList.remove("slidein-left-text");
      promoButtonTwo.classList.remove("slidein-left-text");
    }
  }
});

promoSlideButtonLeft.addEventListener("click", function () {
  if (promoImgThree.classList.contains("hidden")) {
    promoImgTwo.classList.add("hidden");
    promoImgThree.classList.remove("hidden");

    //ANIMATION
    promoImgThree.classList.add("slidein-left");
    promoHeaderThree.classList.add("slidein-left-text");
    promoSubHeaderThree.classList.add("slidein-left-text");
    if (promoImgThree.classList.contains("slidein-right")) {
      promoImgThree.classList.remove("slidein-right");
      promoHeaderThree.classList.remove("slidein-right-text");
      promoSubHeaderThree.classList.remove("slidein-right-text");
      promoButtonThree.classList.remove("slidein-right-text");
    }
    /////////////
  } else if (promoImgTwo.classList.contains("hidden")) {
    promoImgTwo.classList.remove("hidden");
    promoImgThree.classList.add("hidden");

    //ANIMATION
    promoImgTwo.classList.add("slidein-left");
    promoHeaderTwo.classList.add("slidein-left-text");
    promoSubHeaderTwo.classList.add("slidein-left-text");
    // promoHeaderBoxTwo.classList.add("slidein-left-text");
    if (promoImgTwo.classList.contains("slidein-right")) {
      promoImgTwo.classList.remove("slidein-right");
      promoHeaderTwo.classList.remove("slidein-right-text");
      promoSubHeaderTwo.classList.remove("slidein-right-text");
      promoButtonTwo.classList.remove("slidein-right-text");
    }
  }
});
