/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useClickLink } from '../utils/utils';

function NavMobile({ toggle, onToggleTheme, setToggle }) {
  const navRef = useRef(null); // Membuat ref untuk elemen navigation

  // Menggunakan hook dari utils.js
  useClickLink(navRef, setToggle);

  return (
    <div
      className={`mobile-nav ${toggle ? 'active' : ''}`}
      role="navigation"
      aria-expanded={toggle}
    >
      <nav ref={navRef}>
        <NavMobileMenu onToggleTheme={onToggleTheme} />
      </nav>
    </div>
  );
}

function NavMobileMenu({ onToggleTheme }) {
  return (
    <ul className="mobile-nav-menu">
      <NavMobileList href={'#about'} text={'About'} />
      <NavMobileList href={'#featured'} text={'Featured'} />
      <NavMobileList href={'#project'} text={'Project'} />
      <NavMobileList href={'#contact'} text={'Contact'} />
      <li className="mobile-nav-link-line"></li>
      <li>
        <button aria-controls="body-theme" onClick={onToggleTheme} className="mobile-nav-sun">
          <i className="bi bi-sun"></i>
        </button>
      </li>
      <li>
        <a aria-label="Button Resume" className="mobile-nav-btn btn" href="#">
          Resume
        </a>
      </li>
    </ul>
  );
}

function NavMobileList({ href, text }) {
  return (
    <li>
      <a aria-label={`Link to ${text}`} className="mobile-nav-link" href={href}>
        {text}
      </a>
    </li>
  );
}

export { NavMobile };
