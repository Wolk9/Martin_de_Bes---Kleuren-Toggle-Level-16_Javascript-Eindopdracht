let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
  let getNavBtn = document.querySelector(".btn-toggle-nav");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebar.style.opacity = "1";

    let arrayLength = getSidebarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";
    getSidebar.style.opacity = "0";
    getNavBtn.style.visibility = "visible";
    getNavBtn.style.zindex = "1000";

    let arrayLength = getSidebarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

function colorBG(getColorBG) {
  let getBody = document.querySelector("body");

  getBody.style.backgroundColor = getColorBG;
}
