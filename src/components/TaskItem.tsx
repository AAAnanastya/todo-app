import { useTheme } from './ThemeContext';
import { Reorder } from 'framer-motion';

import TaskStatusIcon from './TaskStatusIcon';

import styles from './TaskItem.module.css';
import cross from '../assets/checker/icon-cross.svg';

interface TaskItemProps {
  todo: {
    task: string;
    state: 'active' | 'done';
  };
  toDelete: (task: string) => void;
  statusChange: (task: string) => void;
}

export default function TaskItem({ todo, toDelete, statusChange }: TaskItemProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <Reorder.Item value={todo} className={`${styles['item-container']} ${styles[theme]}`}>
      <div className={`${styles['task-wrapper']}  ${styles[theme]}`} onClick={() => statusChange(todo.task)}>
        <TaskStatusIcon status={todo.state} />
        <p className={`${todo.state === 'done' && styles.done}`}>{todo.task}</p>
      </div>

      <img className={styles.cross} src={cross} alt="X" onClick={() => toDelete(todo.task)} />
    </Reorder.Item>
  );
}
