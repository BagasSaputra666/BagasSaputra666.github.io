import LazyImg from './LazyImg';

function About() {
  return (
    <section className="about container section" id="about">
      <AboutContent />
      <AboutImg />
    </section>
  );
}

function AboutContent() {
  return (
    <div className="about-content">
      <h2 className="about-title">About</h2>
      <AboutParagraph />
      <hr className="about-hr" />
      <h3 className="about-subtitle">Technologies</h3>
      <AboutList />
    </div>
  );
}

function AboutParagraph() {
  return (
    <>
      <p className="about-description">
        Hello there! I&apos;m Bagas, a <strong>Fullstack Developer</strong> specializing in
        <strong>JavaScript</strong>. Even though I&apos;m still a beginner, I&apos;m someone who
        likes to learn a lot and wants to know a lot of new things about technology, especially
        those related to <strong>Web technology</strong>.
      </p>
      <p className="about-description">
        My journey in web development is driven by a love for coding and a dedication to continuous
        learning and improvement.
      </p>
      <p className="about-description">Let&apos;s build something amazing together!</p>
    </>
  );
}

function AboutList() {
  return (
    <div className="about-ul-container">
      <ul className="about-ul">
        <li className="about-list">Javascript (ES6+)</li>
        <li className="about-list">CSS</li>
        <li className="about-list">HTML</li>
        <li className="about-list">Bootstrap</li>
      </ul>
      <ul className="about-ul">
        <li className="about-list">MongoDB</li>
        <li className="about-list">ExpressJS</li>
        <li className="about-list">ReactJS</li>
        <li className="about-list">NodeJS</li>
      </ul>
    </div>
  );
}

function AboutImg() {
  return (
    <div className="about-img-wrapper">
      <LazyImg
        src="https://fakeimg.pl/617x617"
        data="images/aboutImg.jpeg"
        alt="Profile Picture"
        additionalClass="about-img"
      />
    </div>
  );
}

export { About };
