<?php require 'php/connect.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Kingsley's Portfolio</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Figtree:ital,wght@0,300..900;1,300..900&family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <link href="css/grid.css" rel="stylesheet">
  <script defer type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollToPlugin.min.js"></script>
  <script defer src="js/main.js"></script>
  <script defer src="js/animations.js"></script>
  <script defer src="js/contact.js"></script>
</head>

<body>

<div class="full-width-header">
  <header class="grid-con">

    <div id="header-logo" class="col-span-2 m-col-start-1 m-col-end-5 l-col-start-1 l-col-end-5">
      <img src="images/port-logo.png" alt="Kingsley Watson"/>
    </div>

    <button id="hamburger" class="col-start-4 col-end-4">&#9776;</button>

    <div class="overlay m-col-start-5 m-col-end-10 l-col-start-5 l-col-end-10" id="overlay">
      <button id="close">&#10005;</button>
      <nav id="menu">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#featured-work">Projects</a></li>
          <li><a href="#about">About Me</a></li>
        </ul>
      </nav>
    </div>

    <div class="nav-cta m-col-span-2 l-col-start-11 l-col-end-12">
      <a href="contact.php"><button class="btn-contact">Contact</button></a>
    </div>

  </header>
</div>


<main>

  <section class="hero" id="hero">
    <div class="grid-con hero-inner">
      <div class="hero-left col-span-4 m-col-span-6 l-col-start-2 l-col-end-7">
        <h1 class="highlight-m">
          I'm <span class="highlight">Kingsley Watson,</span><br/>
          Motion & Graphic Designer<br/>
          Based in Canada.
        </h1>
        <p>
          Emerging Designer graduating from Fanshawe College in April 2026, inspired by editing and motion since making Fortnite montages at 13.
        </p>
        <div class="hero-buttons">
          <a href="#featured-work" class="btn-primary">View My Work</a>
          <a href="images/watson_kingsley_resume.pdf" class="btn-secondary" download>Download CV</a>
        </div>
      </div>

      <div class="hero-right col-span-4 m-col-span-6 l-col-span-6">
        <div class="photo-wrapper">
          <img src="images/pic-of-me-f.png" alt="Your Photo" class="profile-photo"/>
          <div class="badge-circle">Available<br/>for Work</div>
        </div>
      </div>
    </div>
  </section>

  <div class="ticker-bar">
    <div class="ticker-track">
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
      <span>✦ Graphic Design</span>
      <span>✦ Branding</span>
      <span>✦ Motion Design</span>
      <span>✦ Marketing</span>
    </div>
  </div>

  <section class="featured-work grid-con" id="featured-work">
    <h2 class="featured-heading col-span-full m-col-start-1 m-col-end-12 l-col-start-2 l-col-end-12">Featured Projects</h2>
    <p class="featured-subtext col-span-full m-col-start-1 m-col-end-12 l-col-start-2 l-col-end-12">Hover to see more</p>
    <div class="work-inner col-span-full l-col-start-2 l-col-end-12">

      <?php
        $stmt = $pdo->prepare("SELECT * FROM projects WHERE is_deleted = 0 ORDER BY created_at DESC");
        $stmt->execute();
        $projects = $stmt->fetchAll();

        foreach ($projects as $project) {
          $tag_parts = explode('|', $project['tag']);
          $tag = htmlspecialchars($tag_parts[0], ENT_QUOTES, 'UTF-8');
          $title = htmlspecialchars($project['title'], ENT_QUOTES, 'UTF-8');
          $desc = htmlspecialchars($project['description'], ENT_QUOTES, 'UTF-8');
          $image = htmlspecialchars($project['image'], ENT_QUOTES, 'UTF-8');
          $link = htmlspecialchars($project['link'], ENT_QUOTES, 'UTF-8');

          echo '
          <div class="work-box">
            <img src="' . $image . '" alt="' . $title . '" class="work-img">
            <div class="work-overlay">
              <span class="work-tag">' . $tag . '</span>
              <h3 class="work-title">' . $title . '</h3>
              <p class="work-desc">' . $desc . '</p>
              <a href="' . $link . '" class="work-btn">View Project &#8599;</a>
            </div>
          </div>';
        }
      ?>

    </div>
  </section>

  <section class="about-section" id="about">
    <div class="about-inner grid-con">
      <h2 class="featured-heading col-span-full l-col-start-1 l-col-end-12">About Me</h2>

      <div class="about-heading-wrap col-span-4 m-col-span-12 l-col-span-12">
        <h2 class="about-heading">
          I'm a 19-year-old student driven by a passion to
          <span class="about-highlight">create something meaningful</span>
          from start to finish something I can
          <span class="about-highlight">truly be proud of.</span>
        </h2>
      </div>

      <div class="about-card col-span-full m-col-span-3 l-col-span-3">
        <div class="card-icon">🎮</div>
        <h3 class="card-title">Gaming & Hockey</h3>
        <p class="card-text">Gaming with friends, watching or playing hockey, and cheering on the Toronto Maple Leafs.</p>
      </div>

      <div class="about-card col-span-full m-col-span-3 l-col-span-3">
        <div class="card-icon">👾</div>
        <h3 class="card-title">Anime & Pokémon</h3>
        <p class="card-text">Gengar is my all-time favourite and Death Note is my go-to anime. Proud of my nerdy side.</p>
      </div>

      <div class="about-card col-span-full m-col-span-3 l-col-span-3">
        <div class="card-icon">🎵</div>
        <h3 class="card-title">Music</h3>
        <p class="card-text">Playlists on repeat with The Kid Laroi, Juice WRLD, and DC The Don. Music never stops.</p>
      </div>

      <div class="about-card col-span-full m-col-span-3 l-col-span-3">
        <div class="card-icon">🌊</div>
        <h3 class="card-title">Nature & Travel</h3>
        <p class="card-text">Beach days, outdoor exploring, and getting inspired by travel videos and new places worldwide.</p>
      </div>

    </div>
  </section>

  <section class="hero-video grid-con">
    <div class="video-container col-span-full m-col-start-1 m-col-end-13 l-col-start-2 l-col-end-12">
      <video controls poster="images/demo-reel-thumbail.jpg" id="hero-video">
        <source src="videos/demo-reel.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </section>

  <section class="grid-con" id="portfolio-section">
    <div class="portfolio-inner col-span-full m-col-span-full l-col-start-2 l-col-end-12">
      <h2 class="featured-heading col-span-full m-col-span-full l-col-start-1 l-col-end-12">Software Skills</h2>

      <div id="portfolio-container" class="skills-grid">

        <div class="portfolio-box">
          <img src="images/photoshop-logo.svg" alt="Photoshop">
          <h3>Photoshop</h3>
        </div>

        <div class="portfolio-box">
          <img src="images/after-effects-logo.svg" alt="After Effects">
          <h3>After Effects</h3>
        </div>

        <div class="portfolio-box">
          <img src="images/premiere-logo.svg" alt="Premiere">
          <h3>Premiere</h3>
        </div>

        <div class="portfolio-box">
          <img src="images/illustrator-logo.svg" alt="Illustrator">
          <h3>Illustrator</h3>
        </div>

        <div class="portfolio-box">
          <img src="images/cinema-logo.svg" alt="Cinema 4D">
          <h3>Cinema 4D</h3>
        </div>

        <div class="portfolio-box">
          <img src="images/figma-logo.svg" alt="Figma">
          <h3>Figma</h3>
        </div>

      </div>

      <div class="load-more-wrapper">
        <button id="load-more-btn">See more...</button>
      </div>

    </div>
  </section>

  <section class="contact-cta grid-con">
    <div class="contact-inner col-span-4 m-col-start-1 m-col-end-13 l-col-start-2 l-col-end-12">
      <div class="contact-text col-span-3 m-col-span-10 l-col-span-10">
        <span class="contact-pill">Let's Talk</span>
        <h2 class="contact-heading">Got a project<br>in mind?</h2>
        <p class="contact-sub">Let's create something amazing together.</p>
      </div>
      <a href="contact.php" class="contact-circle col-span-1 m-col-span-2 l-col-span-2">&#10132;</a>
    </div>
  </section>

</main>

<footer class="site-footer">
  <hr>
  <div class="footer-container grid-con">
    <div class="footer-about col-span-4 m-col-span-4 l-col-span-4">
      <h3>Kingsley Watson</h3>
      <p>I'm always open to new projects and collaborations. Feel free to reach out to me anytime!</p>
    </div>

    <div class="footer-links col-span-4 m-col-span-4 l-col-span-4">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#featured-work">Projects</a></li>
        <li><a href="#about">About Me</a></li>
      </ul>
    </div>

    <section class="footer-social col-span-4 m-col-span-4 l-col-span-4">
      <h4>Follow Me</h4>
      <ul class="social-icons">
        <li><a href="https://www.instagram.com/kingsley.watson" target="_blank"><img src="images/insta-logo.svg" alt="Instagram"></a></li>
        <li><a href="https://www.facebook.com" target="_blank"><img src="images/facebook-logo.svg" alt="Facebook"></a></li>
        <li><a href="https://www.x.com" target="_blank"><img src="images/x-logo1.svg" alt="X"></a></li>
      </ul>
    </section>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Kingsley Watson. All rights reserved.</p>
  </div>
</footer>

</body>
</html>