const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close");
const menuLinks = document.querySelectorAll("#menu ul li a");
const loadMoreButton = document.querySelector("#load-more-btn");
const portfolioContainer = document.querySelector("#portfolio-container");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");

let showingOriginal = true;

const replacementItems = [
  { image: "images/html-logo.svg", title: "HTML" },
  { image: "images/css-logo.svg", title: "CSS" },
  { image: "images/js-logo.svg", title: "JavaScript" },
  { image: "images/sass-logo.svg", title: "SASS" },
  { image: "images/gsap-logo.svg", title: "Greensock" },
  { image: "images/php-logo.svg", title: "PHP" }
];

function toggleMenu() {
  const menuOverlay = document.querySelector("#overlay");
  menuOverlay.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

function addCloseListener(link) {
  link.addEventListener("click", toggleMenu);
}

function showReplacementSet() {
  portfolioContainer.innerHTML = "";

  replacementItems.forEach(function buildItem(item) {
    const newBox = document.createElement("div");
    newBox.classList.add("portfolio-box");

    newBox.innerHTML = `
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
    `;

    portfolioContainer.appendChild(newBox);
  });
}

function showOriginalSet() {
  portfolioContainer.innerHTML = "";

  portfolioBoxes.forEach(function appendBox(box) {
    portfolioContainer.appendChild(box);
  });
}

function handleToggleView() {
  if (showingOriginal) {
    showReplacementSet();
    loadMoreButton.textContent = "Go back...";
    showingOriginal = false;
  } else {
    showOriginalSet();
    loadMoreButton.textContent = "See more...";
    showingOriginal = true;
  }
}

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
menuLinks.forEach(addCloseListener);
loadMoreButton.addEventListener("click", handleToggleView);