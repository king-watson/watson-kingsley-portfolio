gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const anchorLinks = document.querySelectorAll("a");
const workBoxes = gsap.utils.toArray(".work-box");
const skillBoxes = gsap.utils.toArray(".portfolio-box");
const footerSections = gsap.utils.toArray(".footer-about, .footer-links, .footer-social");

const sevenHeroImage = document.querySelector(".seven-hero-image");
const sevenOverviewTitle = document.querySelector(".seven-overview-title");
const sevenOverviewSubtitles = document.querySelectorAll(".seven-overview-subtitle");
const sevenOverviewDesc = document.querySelector(".seven-overview-desc");
const sevenOverviewTags = document.querySelectorAll(".seven-overview-tag");
const sevenGoalTitle = document.querySelector(".seven-goal-title");
const sevenGoalItems = document.querySelectorAll(".seven-goal-list li");
const sevenSectionTitles = document.querySelectorAll(".seven-process-title, .seven-problem-title, .seven-result-title");
const sevenSectionDescs = document.querySelectorAll(".seven-process-desc, .seven-problem-desc, .seven-result-desc");
const sevenDeepdiveImages = document.querySelectorAll(".seven-deepdive-img");
const sevenVideoWrapper = document.querySelector(".seven-video-wrapper");


function smoothScrollTo(e) {
  const targetId = e.currentTarget.getAttribute("href");

  if (targetId.startsWith("#")) {
    e.preventDefault();

    const targetSection = document.querySelector(targetId);
    const menuOverlay = document.querySelector("#overlay");

    if (targetSection) {
      menuOverlay.classList.remove("open");

      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: targetSection,
          offsetY: 80
        },
        ease: "power3.inOut"
      });
    }
  }
}

function addScrollListener(link) {
  link.addEventListener("click", smoothScrollTo);
}

function animateNav() {
  gsap.from("#header-logo", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.from("#menu ul li a", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });

  gsap.from(".nav-cta a", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    delay: 0.3,
    ease: "power2.out"
  });
}

function animateHero() {
  gsap.from(".hero h1", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".hero p", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".btn-primary, .btn-secondary", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.12,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".profile-photo", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".badge-circle", {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    delay: 0.6,
    ease: "back.out(1.7)"
  });
}

function animateAbout() {
  gsap.from(".about-heading", {
    scrollTrigger: {
      trigger: ".about-heading",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".about-card", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out"
  });
}

function animateVideo() {
  gsap.from(".video-container", {
    scrollTrigger: {
      trigger: ".hero-video",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });
}

function animateContact() {
  gsap.from(".contact-text", {
    scrollTrigger: {
      trigger: ".contact-cta",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power2.out"
  });

  gsap.from(".contact-circle", {
    scrollTrigger: {
      trigger: ".contact-cta",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    delay: 0.2,
    ease: "power2.out"
  });
}

function animateWorkBox(box) {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power2.out"
  });
}

function animateSkillBox(box, index) {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay: index * 0.08,
    ease: "power2.out"
  });
}

function animateFooterSection(section) {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  });
}

function animateSevenHero() {
  if (!sevenHeroImage) {
    return;
  }

  gsap.from(sevenHeroImage, {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out"
  });
}

function animateSevenOverview() {
  if (!sevenOverviewTitle) {
    return;
  }

  gsap.from(sevenOverviewTitle, {
    scrollTrigger: {
      trigger: sevenOverviewTitle,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -50,
    duration: 0.9,
    ease: "power2.out"
  });

  gsap.from(sevenOverviewSubtitles, {
    scrollTrigger: {
      trigger: sevenOverviewDesc,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out"
  });

  gsap.from(sevenOverviewDesc, {
    scrollTrigger: {
      trigger: sevenOverviewDesc,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(sevenOverviewTags, {
    scrollTrigger: {
      trigger: sevenOverviewTags[0],
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.85,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.5)"
  });
}

function animateSevenGoal() {
  if (!sevenGoalTitle) {
    return;
  }

  gsap.from(sevenGoalTitle, {
    scrollTrigger: {
      trigger: sevenGoalTitle,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -50,
    duration: 0.9,
    ease: "power2.out"
  });

  gsap.from(sevenGoalItems, {
    scrollTrigger: {
      trigger: sevenGoalItems[0],
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -30,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  });
}

function animateSevenSections() {
  if (!sevenSectionTitles.length) {
    return;
  }

  sevenSectionTitles.forEach(function animateSectionTitle(title) {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 0.9,
      ease: "power2.out"
    });
  });

  sevenSectionDescs.forEach(function animateSectionDesc(desc) {
    gsap.from(desc, {
      scrollTrigger: {
        trigger: desc,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });
  });
}

function animateSevenDeepdive() {
  if (!sevenDeepdiveImages.length) {
    return;
  }

  let slideLeft = true;

  sevenDeepdiveImages.forEach(function animateDeepdiveImage(img) {
    let xOffset;

    if (slideLeft) {
      xOffset = -50;
    } else {
      xOffset = 50;
    }

    if (slideLeft) {
      slideLeft = false;
    } else {
      slideLeft = true;
    }

    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: xOffset,
      duration: 0.9,
      ease: "power2.out"
    });
  });
}

function animateSevenVideo() {
  if (!sevenVideoWrapper) {
    return;
  }

  gsap.from(sevenVideoWrapper, {
    scrollTrigger: {
      trigger: sevenVideoWrapper,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power2.out"
  });
}

animateNav();
animateHero();
animateAbout();
animateVideo();
animateContact();
anchorLinks.forEach(addScrollListener);
workBoxes.forEach(animateWorkBox);
skillBoxes.forEach(animateSkillBox);
footerSections.forEach(animateFooterSection);

animateSevenHero();
animateSevenOverview();
animateSevenGoal();
animateSevenSections();
animateSevenDeepdive();
animateSevenVideo();