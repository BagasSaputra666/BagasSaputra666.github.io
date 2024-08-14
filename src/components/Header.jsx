/* eslint-disable react/prop-types */
import { memo } from 'react';

function Header({ children }) {
  return <header className="header container">{children}</header>;
}

// Navbar
function NavBar({ onToggle, toggle, children }) {
  return (
    <nav className="navbar">
      <NavBrand />
      {children}
      <button
        onClick={onToggle}
        className="btn-bars"
        aria-expanded={!toggle}
        aria-controls="mobile-nav"
      >
        <i className={toggle ? 'bi bi-x' : 'bi bi-list'}></i>
      </button>
    </nav>
  );
}

function NavBrand() {
  return (
    <div aria-label="Navbar Brand" className="nav-brand">
      <a href="#hero">
        <img src="/images/logo1.png" alt="Logo Brand" />
      </a>
    </div>
  );
}

function NavMenu({ onToggleTheme }) {
  return (
    <ul className="nav-menu">
      <NavList href={'#about'} icon={'bi bi-person-vcard'} />
      <NavList href={'#featured'} icon={'bi bi-subtract'} />
      <NavList href={'#project'} icon={'bi bi-postcard'} />
      <NavList href={'#contact'} icon={'bi bi-telephone-plus-fill'} />
      <li className="line"></li>
      <li>
        <button
          aria-controls="body-theme"
          onClick={onToggleTheme}
          className="btn-sun"
          aria-label="Button Theme Sun"
        >
          <i className="bi bi-sun" aria-hidden="true"></i>
        </button>
      </li>
      <li>
        <button className="btn-resume" aria-label="Button Theme Resume">
          <i className="bi bi-file-earmark-person" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  );
}

const NavList = memo(function NavList({ href, icon }) {
  return (
    <li>
      <a href={href} aria-label={`Navigate to ${href}`}>
        <i className={icon} aria-label="true"></i>
      </a>
    </li>
  );
});

export { Header, NavBar, NavMenu };
