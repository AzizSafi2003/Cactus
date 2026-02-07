/*=============== LOADER ===============*/
onload = () => {
  const load = document.getElementById("load");

  setTimeout(() => {
    load.style.display = "none";
  }, 1500);
};

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD HEADER BLUR ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
bgHeader();

/*======== SCROLL SECTIONS ACTIVE LINK ========*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href *= " + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
scrollUp();

/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home__img, .footer__container, .care__img, .contact__content`);
sr.reveal(`.home__data, .care__list, .contact__img`, { delay: 500 });
sr.reveal(`.new__card`, { delay: 500, interval: 100 });
sr.reveal(`.shop__card`, { interval: 100 });

/*========== LIGHT AND DARK THEME ==========*/
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check localStorage for saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.replace("ri-sun-line", "ri-moon-line"); // Show moon in light mode
} else {
  document.body.classList.remove("light-mode");
  themeIcon.classList.replace("ri-moon-line", "ri-sun-line"); // Show sun in dark mode
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.replace("ri-moon-line", "ri-sun-line"); // Show sun when dark
  } else {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    themeIcon.classList.replace("ri-sun-line", "ri-moon-line"); // Show moon when light
  }
});
