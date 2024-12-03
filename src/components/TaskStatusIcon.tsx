import styles from './TaskStatusIcon.module.css';

import checkIcon from '../assets/checker/icon-check.svg';

export default function TaskStatusIcon(): JSX.Element {
  return <div className={styles['icon-container']}>{/* <img src={checkIcon} alt="✓" /> */}</div>;
}
