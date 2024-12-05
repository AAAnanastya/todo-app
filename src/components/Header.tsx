import { useTheme } from './ThemeContext';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.img
            key="moon"
            src={MoonIcon}
            alt="Dark mode icon"
            className={styles['theme_image']}
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        ) : (
          <motion.img
            key="sun"
            src={SunIcon}
            alt="Light mode icon"
            className={styles['theme_image']}
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
