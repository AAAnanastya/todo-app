import { useTheme } from './ThemeContext';

import styles from './TaskStatusIcon.module.css';
import checkIcon from '../assets/checker/icon-check.svg';

interface TaskStatusIconProps {
  status: 'active' | 'done' | 'default';
}

export default function TaskStatusIcon({ status }: TaskStatusIconProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles['icon-container']} ${styles[theme]} ${
        status === 'default' ? styles.nonclick : status === 'done' ? styles.done : ''
      }`}>
      {status === 'done' && <img src={checkIcon} alt="✓" />}
    </div>
  );
}
