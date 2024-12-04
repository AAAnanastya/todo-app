import { useTheme } from './ThemeContext';

import TaskStatusIcon from './TaskStatusIcon';

import styles from './TaskItem.module.css';
import cross from '../assets/checker/icon-cross.svg';

interface TaskItemProps {
  task: string;
  status: 'active' | 'done';
  toDelete: (task: string) => void;
  statusChange: (task: string) => void;
}

export default function TaskItem({ task, status, toDelete, statusChange }: TaskItemProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className={`${styles['item-container']} ${styles[theme]}`}>
      <div className={`${styles['task-wrapper']}  ${styles[theme]}`} onClick={() => statusChange(task)}>
        <TaskStatusIcon status={status} />
        <p className={`${status === 'done' && styles.done}`}>{task}</p>
      </div>

      <img className={styles.cross} src={cross} alt="X" onClick={() => toDelete(task)} />
    </div>
  );
}
