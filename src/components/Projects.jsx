import LazyImg from './LazyImg';

/* eslint-disable react/prop-types */
function Work() {
  return (
    <section className="work container section" id="project">
      <WorkHead />
      <WorkContent />
    </section>
  );
}

function WorkHead() {
  return (
    <>
      <h2 className="work-title">Project</h2>
      <p className="work-description">
        This section contains projects or websites that I have created, all of which I built using
        technology based on the JavaScript programming language.
      </p>
    </>
  );
}

function WorkContent() {
  const projectsData = [
    {
      title: 'Wedding Web',
      img: 'images/weddingWeb.png',
      description1:
        'A wedding website helps couples share wedding details, manage planning, and interact with guests. It can include travel info, dress code, and wedding day schedules. Creative elements like love stories and photos can also be added.',
      description2:
        'Accessible from any device, these sites are customizable based on templates to match the couple’s style.',
    },
    {
      title: 'Game Rock Paper Scissors',
      img: 'images/gameRockPaperScissors.png',
      description1: 'Rock, paper, scissors is a simple two-player game with straightforward rules.',
      description2:
        'Players simultaneously choose rock, paper, or scissors. Rock beats scissors, paper beats rock, and scissors beat paper. A tie occurs if both choose the same item.',
    },
    {
      title: 'Landing Web',
      img: 'images/landingWeb.png',
      description1:
        'A landing page is designed to encourage visitors to take specific actions, like signing up or making a purchase. Often used in marketing campaigns, these pages are separate from a website’s main navigation.',
      description2: 'They can be accessed via ads, emails, social media, or search results.',
    },
    {
      title: 'Shopping Notes',
      img: 'images/shoppingNotes.png',
      description1:
        'A tool to manage and organize shopping lists. Features include creating, editing, and sharing lists, and setting reminders.',
      description2:
        'Could also allow users to make personal notes on items they’re interested in buying later.',
    },
    {
      title: 'Ecommerce Action Figure',
      img: 'images/ecommerceWeb.png',
      description1:
        'A detailed listing of action figures categorized by series, characters, franchises (e.g., Marvel, DC, Star Wars, Anime), or manufacturers. Each product includes high-quality images, descriptions, sizes, and prices.',
      description2:
        'Standard e-commerce features like adding items to the cart, applying discount codes, and a secure checkout process with multiple payment options are available.',
    },
    {
      title: 'Search Movie API',
      img: 'images/searchMovieAPI.png',
      description1:
        'Allows users to search for movies by their title. The API returns results that match or are close to the given title.',
      description2:
        'Enables users to find movies based on actors, directors, or other crew members associated with the film.',
    },
  ];

  return (
    <div className="work-projects-container">
      {projectsData.map((project, id) => (
        <WorkProject key={id} {...project} />
      ))}
    </div>
  );
}

function WorkProject({ title, img, description1, description2 }) {
  return (
    <div className="work-project-container">
      <h3 className="work-project-title">{title}</h3>
      <div className="work-img-wrapper">
        <LazyImg src="https://fakeimg.pl/900x900" data={img} alt={title} />
      </div>
      <div className="work-project">
        <h3 className="work-project-subtitle">{title}</h3>
        <p className="work-project-description1">{description1}</p>
        <p className="work-project-description2">{description2}</p>
        <a
          target="_blank"
          className="btn work-project-btn"
          href="https://www.instagram.com/bagasaputra666/"
        >
          Follow Me
        </a>
      </div>
    </div>
  );
}

export { Work };
