"use strict";

function mobileChange(e) {
  if (e.matches) {
    if (!searchBox.classList.contains("hidden")) {
      searchBox.classList.add("hidden");
      navLinks.classList.remove("hidden");
      navLinks.classList.add("flex-display");
      navLinksTwo.classList.remove("hidden");
    }
    if (!navMenu.classList.contains("hidden")) {
      navMenu.classList.add("hidden");
    }
    if (!subNavMenu.classList.contains("hidden")) {
      subNavMenu.classList.add("hidden");
    }
  }
}

function tabletChange(f) {
  if (f.matches) {
    if (!mobileMenu.classList.contains("hidden")) {
      menuButton.classList.remove("hidden");
      closeMobileMenu.classList.add("hidden");

      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex-display");
    }

    if (!closeSearchMobile.classList.contains("hidden")) {
      closeSearchMobile.classList.add("hidden");
      navLinks.classList.add("flex-display");
      searchBox.classList.add("hidden");

      homeLink.classList.remove("hidden");
      navBox.classList.remove("flow-remove");
      navLinksTwo.classList.remove("hidden");
      menuButton.classList.remove("hidden");
    }
  }
}

function desktopChange(a) {
  if (a.matches) {
    if (!subNavMenu.classList.contains("hidden")) {
      subNavMenu.classList.add("hidden");
    }
  }
}

// function to open and close sub-menus (mobile)
function menuControls(option) {
  if (option.classList.contains("hidden")) {
    option.classList.remove("hidden");
    option.classList.add("flex-display");

    // subMenuSVGUP.classList.remove("hidden");
    // subMenuSVGDOWN.classList.add("hidden");
  } else if (!option.classList.contains("hidden")) {
    option.classList.add("hidden");
    option.classList.remove("flex-display");

    // subMenuSVGUP.classList.add("hidden");
    // subMenuSVGDOWN.classList.remove("hidden");
  }
}

//function to switch between left or right in the slideshow
function slideShowControls(
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
  fifthElement,
  sixthElement,
  seventhElement
) {
  if (
    secondElement.classList.contains("hidden") &&
    thirdElement.classList.contains("hidden")
  ) {
    firstElement.classList.add("hidden");
    secondElement.classList.remove("hidden");

    //ANIMATION
    secondElement.classList.add("slidein-right");
    fifthElement.classList.add("slidein-right-text");
    if (secondElement.classList.contains("slidein-left")) {
      secondElement.classList.remove("slidein-left");
      fifthElement.classList.remove("slidein-left-text");
    }
    /////////////////////////////
  } else if (
    firstElement.classList.contains("hidden") &&
    thirdElement.classList.contains("hidden")
  ) {
    secondElement.classList.add("hidden");
    thirdElement.classList.remove("hidden");

    //ANIMATION
    thirdElement.classList.add("slidein-right");
    sixthElement.classList.add("slidein-right-text");
    if (thirdElement.classList.contains("slidein-left")) {
      thirdElement.classList.remove("slidein-left");
      sixthElement.classList.remove("slidein-left-text");
    }
    /////////////////////////////
  } else if (
    firstElement.classList.contains("hidden") &&
    secondElement.classList.contains("hidden")
  ) {
    firstElement.classList.remove("hidden");
    thirdElement.classList.add("hidden");

    //ANIMATION
    firstElement.classList.add("slidein-right");
    fourthElement.classList.add("slidein-right-text");
    if (firstElement.classList.contains("slidein-left")) {
      firstElement.classList.remove("slidein-left");
      fourthElement.classList.remove("slidein-left-text");
    }
    // setTimeout(rr, 1000);
  }
}
