import { useEffect } from 'react';

const useLightMode = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.body.classList.add(theme);
    }
  }, []);
};

function handleThemeToggle() {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light-mode');
  } else {
    localStorage.removeItem('theme');
    document.body.removeAttribute('class');
  }
}

function toggleTheme() {
  handleThemeToggle();
}

export { toggleTheme, useLightMode };
