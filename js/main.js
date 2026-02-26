// Hamburger

(() => {
    const menu = document.querySelector('#menu');
    const hamburger = document.querySelector('#hamburger');
    const closeButton = document.querySelector('#close');
    const menuLinks = document.querySelectorAll('#menu nav ul li a');
    
    function toggleMenu() {
        menu.classList.toggle('open');
        document.body.classList.toggle("no-scroll");
    }


    hamburger.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
})();

// Software Part

const loadMoreButton = document.querySelector("#load-more-btn");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");
const portfolioContainer = document.querySelector("#portfolio-container");

let showingOriginal = true;

const replacementItems = [
  { image: "images/html-logo.svg", title: "HTML"},
  { image: "images/css-logo.svg", title: "CSS"},
  { image: "images/js-logo.svg", title: "JavaScript"},
  { image: "images/sass-logo.svg", title: "SASS"},
  { image: "images/gsap-logo.svg", title: "Greensock"},
  { image: "images/php-logo.svg", title: "PHP"}
];

function showReplacementSet() {
  portfolioContainer.innerHTML = "";

  replacementItems.forEach(function(item) {
    const newBox = document.createElement("div");
    newBox.classList.add("portfolio-box");

    newBox.innerHTML = `
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
    `;

    portfolioContainer.appendChild(newBox);
  });

  addToggleListenerAgain();
}

function showOriginalSet() {
  portfolioContainer.innerHTML = "";

  portfolioBoxes.forEach(function(box) {
    portfolioContainer.appendChild(box);
  });

  addToggleListenerAgain();
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

function addToggleListenerAgain() {
  const newButton = document.querySelector("#load-more-btn");
  newButton.addEventListener("click", handleToggleView);
}

loadMoreButton.addEventListener("click", handleToggleView);

