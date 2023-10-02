import { ChangeEventHandler } from 'react';
import './ThemeToggle.scss';
import siteConfig from '@/types/site-config';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;
const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = e => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const ThemeToggle = () => {
  return siteConfig.theme.darkMode ? (
    <div className="toggle-theme-wrapper">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
          ></path>
        </svg>
      </span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} defaultChecked={defaultDark} />
        <div className="slider round"></div>
      </label>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
          <path strokeWidth="1.5" d="M7.633 3.067A3.001 3.001 0 1 1 4.017 6.32M22 13.05a3.5 3.5 0 1 0-3 5.914"></path>
          <path
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.5 8.51.01-.011M10 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          ></path>
        </svg>
      </span>
    </div>
  ) : null;
};

export default ThemeToggle;
