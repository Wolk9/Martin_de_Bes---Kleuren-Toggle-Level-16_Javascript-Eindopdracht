// At first I have found and applied some code that destinguish wether
// we are on a Desktop or Mobile device. I want to know that as hovering
// (mouseover/mouseenter) does not fly on a mobile

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const menuTog = document.querySelector(".menu-toggle");
const somewhereSelect = document.querySelector("html");
const nav = document.querySelector(".nav");
const navLeft = document.querySelector(".nav-left");
const navOption = document.querySelector(".nav-link");
const radioButton = document.querySelector("form");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

// Hereunder is the function declared that opens the nav.
// With the toggleNavSatus the status flips once hovered or clicked in mobile state
// it adds the class active which evokes transitions declared in the css
// the links appear one after another with a nice delay

let toggleNavStatus = false;

const openNav = () => {
  if (toggleNavStatus === false) {
    menuTog.classList.add("active");
    nav.classList.add("active");
    navLeft.classList.add("active");

    for (let i = 0; i < navLinks.length; i++) {
      setTimeout(() => {
        navLinks[i].classList.add("active");
        console.log(" navlink open: ", i);
      }, i * 200);
    }
    toggleNavStatus = true;
  }

  if (deviceType() == "desktop") {
    menuTog.removeEventListener("mouseenter", openNav);
  } else {
    menuTog.removeEventListener("click", openNav);
    somewhereSelect.removeEventListener("click", closeNav);
    setTimeout(() => {
      somewhereSelect.addEventListener("click", closeNav);
    }, 200); //otherwise the click was registered right away and closed immediately the nav again
  }
};

// hereunder is the function that closes the nav.
// it removes the active class. the navLinks disappear in the opposite
// order with one after the other delay.

const closeNav = () => {
  if (toggleNavStatus === true) {
    for (let i = 0 - navLinks.lenght; i > navLinks.length; i++) {
      setTimeout(() => {
        navLinks[i].classList.remove("active");
        console.log(" navlink close: ", i);
      }, i * 200);
    }

    navLeft.classList.remove("active");
    nav.classList.remove("active");
    menuTog.classList.remove("active");

    toggleNavStatus = false;
  }
  if (deviceType() == "desktop") {
    menuTog.addEventListener("mouseenter", openNav);
  } else {
    menuTog.addEventListener("click", openNav);
  }
};

// eventListeners below opens the menu and spins the hamburger
// when hovered (desktop) or clicked (mobile),
// and closes and spins back once somewhere is clicked.

if (deviceType() == "desktop") {
  menuTog.addEventListener("mouseenter", openNav);
} else {
  menuTog.addEventListener("click", openNav);
}

somewhereSelect.addEventListener("click", closeNav);

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
  3;
  // the function below checkes which color is selected and selects
  // the corresponding radiobutton
  // Bonus requirement 2:

  radioButton.classList.add("active");
  for (let x = 0; x < changeSelectedRadioBtn.length; x++) {
    if (changeSelectedRadioBtn[x].value === getColorBG) {
      changeSelectedRadioBtn[x].checked = true;
    }
  }
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
