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
// nav
function openNav() {
  document.getElementById("navBar").classList.toggle("start-0");
  document.body.classList.toggle("overflow-hidden");
  document.querySelector(".menu").classList.toggle("cross");
}

function removeoverflow() {
  document.getElementById("navBar").classList.toggle("start-0");
  document.body.classList.remove("overflow-hidden");
  document.querySelector(".menu").classList.toggle("cross");
  document.body.classList.remove("overflow-hidden");
}