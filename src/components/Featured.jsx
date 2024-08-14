import LazyImg from './LazyImg';

function Featured() {
  return (
    <section id="featured" className="featured container section">
      <FeaturedHead />
      <FeaturedInfo />
      <FeaturedImg />
    </section>
  );
}

function FeaturedHead() {
  return (
    <>
      <h3 className="featured-subtitle">Featured project</h3>
      <FeaturedTitle />
      <FeaturedParagraph />
    </>
  );
}

function FeaturedTitle() {
  return (
    <div className="featured-wrapper">
      <h2 className="featured-title">My Portofolio Website</h2>
      <a target="_blank" href="https://www.instagram.com/bagasaputra666/" className="featured-link">
        <i className="bi bi-link-45deg"></i>
      </a>
    </div>
  );
}
function FeaturedParagraph() {
  return (
    <p className="featured-description">
      A portfolio website is a digital space that showcases a person&apos;s work, skills,
      achievements, and experiences. It can be used as a resume or online gallery to visually
      present a person&apos;s work to potential clients, employers, collaborators, or followers
    </p>
  );
}

function FeaturedInfo() {
  return (
    <div className="featured-label-container">
      <div>
        <h3 className="featured-label">Tech stack</h3>
        <ul className="featured-tech-stack">
          <li className="featured-info">Bootstrap</li>
          <li className="featured-info">Vite</li>
          <li className="featured-info">MongoDB</li>
          <li className="featured-info">ExpressJS</li>
          <li className="featured-info">ReactJS</li>
          <li className="featured-info">NodeJS</li>
        </ul>
      </div>
      <div>
        <h3 className="featured-label">Project Type</h3>
        <p className="featured-info">Fullstack MERN Stack</p>
      </div>
      <div>
        <h3 className="featured-label">Timeline</h3>
        <p className="featured-info">August 2024 - Present</p>
      </div>
    </div>
  );
}

function FeaturedImg() {
  return (
    <div className="featured-img-container">
      <div className="featured-img-wrapper">
        <LazyImg
          src="https://fakeimg.pl/2366x1346"
          data="images/heroSection.png"
          alt="My Portofolio Hero"
        />
      </div>
      <div className="featured-img-wrapper">
        <LazyImg
          src="https://fakeimg.pl/2366x1346"
          data="images/aboutSection.png"
          alt="My Portofolio About"
        />
      </div>
      <div className="featured-img-wrapper">
        <LazyImg
          src="https://fakeimg.pl/2366x1346"
          data="images/featuredSection.png"
          alt="My Portofolio Featured"
        />
      </div>
      <div className="featured-img-wrapper">
        <LazyImg
          src="https://fakeimg.pl/2366x1346"
          data="images/contactSection.png"
          alt="My Portofolio Contact"
        />
      </div>
    </div>
  );
}

export { Featured };
