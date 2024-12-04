import styles from './TaskStatusIcon.module.css';
import checkIcon from '../assets/checker/icon-check.svg';

interface TaskStatusIconProps {
  status: 'active' | 'done' | 'default';
}

export default function TaskStatusIcon({ status }: TaskStatusIconProps): JSX.Element {
  return (
    <div className={`${styles['icon-container']} ${status === 'default' ? styles.nonclick : status === 'done' ? styles.done : ''}`}>
      {status === 'done' && <img src={checkIcon} alt="✓" />}
    </div>
  );
}
