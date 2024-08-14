// utils.js
import { useEffect } from 'react';

function useBodyScroll(toggle) {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = 'hidden'; // Mengembalikan scroll vertikal
    } else {
      document.body.style.overflowY = 'auto'; // Mencegah scroll vertikal
    }

    // Clean up style saat komponen dibersihkan
    return () => {
      document.body.style.overflowY = 'auto'; // Pastikan scroll diaktifkan saat komponen dibersihkan
    };
  }, [toggle]);
}

function useClickLink(navRef, setToggle) {
  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    function handleClickLink(event) {
      if (event.target.closest('.mobile-nav-link')) {
        setToggle(false);
      }
    }

    navElement.addEventListener('click', handleClickLink);

    return () => {
      navElement.removeEventListener('click', handleClickLink);
    };
  }, [navRef, setToggle]);
}

function toggleMenu(setToggle) {
  setToggle((prev) => !prev);
}

export { toggleMenu, useBodyScroll, useClickLink };
