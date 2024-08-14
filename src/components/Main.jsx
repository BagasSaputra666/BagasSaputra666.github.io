// Components
import { Hero } from './Hero';
import { About } from './About';
import { Featured } from './Featured';
import { Work } from './Projects';
import { Contact } from './Contact';

function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Work />
      <Contact />
    </main>
  );
}

export { Main };
