// Hero Section
function Hero() {
  return (
    <section className="hero container">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="hero-left">
      <HeroImg />
    </div>
  );
}

function HeroImg() {
  return (
    <picture className="hero-img">
      <source media="(max-width : 450px)" srcSet="images/HeroMain(450w).jpg" />
      <source media="(max-width : 756px)" srcSet="images/HeroMain(756w).jpg" />
      <img src="images/HeroMain.jpg" alt="Bagas Saputra Picture" />
    </picture>
  );
}

function HeroRight() {
  return (
    <div className="hero-right">
      <span aria-label="Hero Subtitle" className="hero-subtitle">
        Hi There!
      </span>
      <h1 className="hero-title">
        I&apos;m{' '}
        <span aria-label="Hero Title My Name" className="hero-name">
          Bagas
        </span>
      </h1>
      <p className="hero-role">Fullstack Web Developer</p>
      <p className="hero-description">
        A passionate <strong>Fullstack Developer</strong> specializing in{' '}
        <strong>JavaScript</strong>. WIth foundation in the MERN tech stack even though I&apos;m
        still a beginner. I create dynamic and efficient web applications.
      </p>
      <a target="_blank" href="mailto:bagasbagass891@gmail.com" className="btn hero-btn">
        Reach out
      </a>
    </div>
  );
}

export { Hero };
