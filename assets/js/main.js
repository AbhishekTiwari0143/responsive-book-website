/*=============== SEARCH ===============*/
const searchMenu = document.getElementById("search-content");
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");

searchButton.addEventListener("click", () => {
  searchMenu.classList.add("show__search");
});

searchClose.addEventListener("click", () => {
  searchMenu.classList.remove("show__search");
});

/*=============== LOGIN ===============*/
const loginMenu = document.getElementById("login-content");
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");

loginButton.addEventListener("click", () => {
  loginMenu.classList.add("show__login");
});

loginClose.addEventListener("click", () => {
  loginMenu.classList.remove("show__login");
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});
/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSLides: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSLides: true,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNw = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSLides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSLides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollup = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollup.classList.add("scrollShow");
  } else {
    scrollup.classList.remove("scrollShow");
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// we validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  document.body.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 200,
  // reset: true,
});

sr.reveal(`.home__data, .featured__container, .new__container,
              .join__data, .testimonial__container`);
sr.reveal(`.home__images`, { delay: 600 });
sr.reveal(`.services__card`, { interval: 100 });
sr.reveal(`.discount__data`, { origin: "left" });
sr.reveal(`.discount__images`, { origin: "right" });
