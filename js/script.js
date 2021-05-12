// function to open the hamburger Nav. When is declared in HTML with onMouseOver

let openNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
  let getNavBtn = document.querySelector(".btn-toggle-nav");

  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "272px";
  getSidebar.style.opacity = "1";

  let arrayLength = getSidebarLinks.length;

  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1";
  }
};

//function to close the hamburger Nav. This is done when a color in the menu is clicked

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

//function to change the BG color of the id BG (body)
//and to close the menu when a color is clicked

function colorBG(getColorBG) {
  let getBody = document.querySelector("body");
  let changeText = document.getElementById("p1");

  getBody.style.backgroundColor = getColorBG;
  changeText.innerHTML = getColorBG;
  changeText.style.fontWeight = 700;
  changeText.style.fontSizeAdjust = 2;

  closeNav();
}

const keyPress = document
  .getElementById("BG")
  .addEventListener(KeyboardEvent, colorBG);

function keysDown(keyPress1) {
  if (keyPress == "1") {
    colorBG(grey);
  } else if (keyPress == "2") {
    colorBG(red);
  }
  1;
}
