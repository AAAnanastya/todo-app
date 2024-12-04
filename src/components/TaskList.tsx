import { useTheme } from './ThemeContext';

import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

type Todo = {
  task: string;
  state: 'active' | 'done';
};

interface TaskListProps {
  todos: Todo[];
  onDeleteTask: (task: string) => void;
  onStatusChange: (task: string) => void;
}

export default function TaskList({ todos, onDeleteTask, onStatusChange }: TaskListProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <ul className={`${styles['todo-container']} ${styles[theme]}`}>
      {todos.map((todo) => (
        <TaskItem key={todo.task} task={todo.task} status={todo.state} toDelete={onDeleteTask} statusChange={onStatusChange} />
      ))}
    </ul>
  );
}
