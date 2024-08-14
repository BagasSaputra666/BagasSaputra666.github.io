// Style
import './styles/index';
// Components
import { Header, NavBar, NavMenu } from './components/Header';
import { Main } from './components/Main';
import { NavMobile } from './components/NavMobile';
import { Footer } from './components/Footer';
// Utils
import { toggleMenu, useBodyScroll } from './utils/utils';
import { toggleTheme, useLightMode } from './utils/lightMode';

import { useState, useCallback } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);

  // Gunakan fungsi utilitas untuk mengatur scroll body
  useBodyScroll(toggle);

  // Cek apakah sedang berada pada light-mode
  useLightMode();

  // Gunakan fungsi utilitas untuk toggle menu
  const onToggleTheme = useCallback(() => {
    toggleTheme();
  }, []);

  // Gunakan fungsi utilitas untuk toggle menu
  const onToggle = useCallback(() => {
    toggleMenu(setToggle);
  }, []);
  return (
    <>
      <Header>
        <NavBar onToggle={onToggle} toggle={toggle}>
          <NavMenu onToggleTheme={onToggleTheme} />
        </NavBar>
      </Header>
      <NavMobile onToggleTheme={onToggleTheme} setToggle={setToggle} toggle={toggle} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
