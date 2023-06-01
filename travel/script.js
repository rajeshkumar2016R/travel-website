let form = document.querySelector(".form-container");
let daynight = document.querySelector(".day-night");
let videoBtn = document.querySelectorAll(".video-btn");
let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menu");

// ==========sticky-nav===========
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 )
})
// =============== Mobile-navbar ===========
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
})

// ================= login-form ====================
document.querySelector(".log-in").onclick = () =>{
    form.classList.add("form-active");
}
document.querySelector(".close-btn").onclick = () =>{
    form.classList.remove("form-active");
}

// ================= video-click ====================
videoBtn.forEach(btn =>{
    btn.addEventListener("click", () => {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    });
});

// =============DARKMODDE=====================
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener ("load", () => {
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    } else {
        daynight.querySelector("i").classList.add("fa-moon");
    };
});

// ============ review-slider ================
var swiper = new Swiper(".review-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
