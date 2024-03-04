const items = document.querySelectorAll(".accordion-plus button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

function backtop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
  const mybackto = document.getElementById("backtops");
  if (document.documentElement.scrollTop > 500) {
    mybackto.style.display = "block";
  } else {
    mybackto.style.display = "none";
  }
});

items.forEach((item) => item.addEventListener("click", toggleAccordion));

let a = document.getElementById("nav-bar");
let flow = document.querySelector(".sec-flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let icon = document.querySelector("#icon");
let home = document.querySelector(".How");
let about = document.querySelector(".Brands");
let services = document.querySelector(".About");
let pricing = document.querySelector(".Careers");

icon.addEventListener("click", function () {
  if (a.classList !== document.querySelector("fix-lft")) {
    a.classList.toggle("fix-lft");
    flow.classList.toggle("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
  }
});

home.addEventListener("click", function () {
  a.classList.toggle("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
about.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
services.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
pricing.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
