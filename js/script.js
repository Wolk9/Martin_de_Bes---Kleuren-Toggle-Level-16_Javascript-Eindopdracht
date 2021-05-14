// The following function is to open the hamburger Nav.
// When is declared in HTML with onMouseOver (bonus requirement 3)

let openNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "272px";
  getSidebar.style.opacity = "1";

  let arrayLength = getSidebarLinks.length;

  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1";
  }
};

// The following function to close the hamburger Nav.
// This is done when a color in the menu is clicked
// Bonus requirement 3:
// or when the mouse is not hovering above the hamburger

let closeNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
  let getNavBtn = document.querySelector(".btn-toggle-nav");
  getSidebar.style.width = "0px";
  getSidebar.style.opacity = "0";
  getNavBtn.style.visibility = "visible";
  getNavBtn.style.zindex = "1000";

  let arrayLength = getSidebarLinks.length;

  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  }
  getSidebarUl.style.visibility = "hidden";
};

// The following function is to change the BG color of the id BG (body)
// and to close the menu when a color is clicked

function colorBG(getColorBG) {
  let getBody = document.querySelector("body");
  let getForm = document.querySelector("form");
  let changeText = document.getElementById("p1");
  let changeSelectedRadioBtn = document.getElementsByName("choice");

  getBody.style.backgroundColor = getColorBG; // change the BG color in 'body'
  // Bonus requirement 4:
  changeText.innerHTML = getColorBG; // change text p1 to name of color
  changeText.style.fontWeight = 700; // change fontweight of name of color
  changeText.style.fontSizeAdjust = 2; // change size of name of color
  getForm.style.visibility = "visible"; // change visibility of form tag once a color is selected

  // the function below checkes which color is selected and selects
  // the corresponding radiobutton
  // Bonus requirement 2:

  for (let x = 0; x < changeSelectedRadioBtn.length; x++) {
    if (changeSelectedRadioBtn[x].value === getColorBG) {
      changeSelectedRadioBtn[x].checked = true;
    }
  }

  closeNav(); // call function to close the hamburger Nav.
}

// The following functions are taking care of listening to the keyboard and
// change the colors accordingly.
// Bonus requirement 6:

function setKeyDownListener() {
  window.addEventListener("keydown", function (event) {
    catchKey(event.key);
  });
}

function catchKey(pressedKey) {
  if (pressedKey == "1") {
    colorBG("grey");
  } else if (pressedKey == "2") {
    colorBG("red");
  } else if (pressedKey == "3") {
    colorBG("orange");
  } else if (pressedKey == "4") {
    colorBG("purple");
  } else if (pressedKey == "5") {
    colorBG("green");
  }
}
