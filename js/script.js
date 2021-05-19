// The following function is to open the hamburger Nav.
// When is declared in HTML with onMouseOver (bonus requirement 3)

const openNav = function () {
  const getSidebar = document.querySelector(".nav-sidebar");
  const getSidebarUl = document.querySelector(".nav-sidebar ul");
  const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
  const getNavBtn = document.querySelector(".btn-toggle-nav");

  getSidebar.classList.add("openNavSideBar");
  getNavBtn.classList.add("openNavBtnToggleNav");
  getSidebarUl.classList.add("openNavSidebarul");

  let arrayLength = getSidebarLinks.length;

  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].classList.add("openSideBarA");
  }
};

// The following function to close the hamburger Nav.
// This is done when a color in the menu is clicked
// Bonus requirement 3:
// or when the mouse is not hovering above the hamburger

const closeNav = function () {
  const getSidebar = document.querySelector(".nav-sidebar");
  const getSidebarUl = document.querySelector(".nav-sidebar ul");
  const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
  const getNavBtn = document.querySelector(".btn-toggle-nav");

  getSidebar.classList.remove("openNavSideBar");
  getNavBtn.classList.remove("openNavBtnToggleNav");
  getSidebarUl.classList.remove("openNavSidebarul");

  let arrayLength = getSidebarLinks.length;

  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].classList.remove("openSideBarA");
  }
  getSidebarUl.classList.remove("openSideBarUl");
};

const toggleNav = document.querySelector(".btn-toggle-nav");

toggleNav.addEventListener("mousemove", openNav);
toggleNav.addEventListener("mouseout", closeNav);

// The following function is to change the BG color of the id BG (body)
// and to close the menu when a color is clicked
// it is adressed by keypress from 1 to 5 and from mouseclick in the nav

function colorBG(getColorBG) {
  const getBody = document.querySelector("body");
  const getForm = document.querySelector("form");
  const changeText = document.getElementById("p1");
  const changeSelectedRadioBtn = document.getElementsByName("choice");

  getBody.style.backgroundColor = getColorBG; // change the BG color in 'body'
  // Bonus requirement 4:
  changeText.innerHTML = getColorBG; // change text p1 to name of color
  changeText.classList.add("bigColorText"); // change fontweight of name of color and change size of name of color
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

document.addEventListener("click", (e) => {
  if (e.target.matches(".greyBG")) {
    colorBG("grey");
  } else if (e.target.matches(".redBG")) {
    colorBG("red");
  } else if (e.target.matches(".orangeBG")) {
    colorBG("orange");
  } else if (e.target.matches(".purpleBG")) {
    colorBG("purple");
  } else if (e.target.matches(".greenBG")) {
    colorBG("green");
  }
});

// The following functions are taking care of listening to the keyboard and
// change the colors accordingly.
// Bonus requirement 6:

document.addEventListener("keypress", (e) => {
  if (e.key === "1") {
    colorBG("grey");
  } else if (e.key === "2") {
    colorBG("red");
  } else if (e.key === "3") {
    colorBG("orange");
  } else if (e.key === "4") {
    colorBG("purple");
  } else if (e.key === "5") {
    colorBG("green");
  }
});
