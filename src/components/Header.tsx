import { useTheme } from './ThemeContext';
import { useEffect } from 'react';

import styles from './Header.module.css';
import SunIcon from '../assets/theme_switcher/icon-sun.svg';
import MoonIcon from '../assets/theme_switcher/icon-moon.svg';

export default function Header(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles['header_container']}>
      <h1 className={styles.logo}>TODO</h1>
      <img
        src={theme === 'dark' ? MoonIcon : SunIcon}
        alt={theme === 'dark' ? 'dark mode' : 'light mode'}
        className={styles['theme_image']}
        onClick={toggleTheme}
      />
    </div>
  );
}
