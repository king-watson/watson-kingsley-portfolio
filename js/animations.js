gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const anchorLinks = document.querySelectorAll('a[href^="#"]');
const overlay = document.querySelector("#overlay");
const workBoxes = gsap.utils.toArray(".work-box");
const skillBoxes = gsap.utils.toArray(".portfolio-box");
const footerSections = gsap.utils.toArray(".footer-about, .footer-links, .footer-social");


function smoothScrollTo(e) {
  e.preventDefault();

  const targetId = e.currentTarget.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    overlay.classList.remove("active");

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

function addScrollListener(link) {
  link.addEventListener("click", smoothScrollTo);
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

 gsap.from("#header-logo", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.out"
  });

anchorLinks.forEach(addScrollListener);
workBoxes.forEach(animateWorkBox);
skillBoxes.forEach(animateSkillBox);
footerSections.forEach(animateFooterSection);