import { useTheme } from './ThemeContext';

import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
import { useState } from 'react';

type Todo = {
  task: string;
  state: 'active' | 'done';
};

interface TaskListProps {
  todos: Todo[];
  onDeleteTask: (task: string) => void;
  onStatusChange: (task: string) => void;
  onClearCompleted: () => void;
}

export default function TaskList({ todos, onDeleteTask, onStatusChange, onClearCompleted }: TaskListProps): JSX.Element {
  const { theme } = useTheme();
  const [filters, setFilters] = useState<string>('all');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const taskLeftNum = todos.filter((todo) => todo.state === 'active').length;

  return (
    <div className={`${styles['todo-container']} ${styles[theme]}`}>
      {todos.length < 1 && <div className={styles['empty-mock']}>It seems there are no task added yet</div>}
      <ul>
        {filters === 'all'
          ? todos.map((todo) => (
              <TaskItem key={todo.task} task={todo.task} status={todo.state} toDelete={onDeleteTask} statusChange={onStatusChange} />
            ))
          : todos
              .filter((todo) => todo.state === filters)
              .map((todo) => (
                <TaskItem key={todo.task} task={todo.task} status={todo.state} toDelete={onDeleteTask} statusChange={onStatusChange} />
              ))}
      </ul>

      <div className={styles['task-bar']}>
        <p className={styles['non-click']}>{taskLeftNum} items left</p>
        <div className={styles['task-navigation']}>
          <p
            className={`${selectedFilter === 'all' && styles.active}`}
            onClick={() => {
              setFilters('all');
              setSelectedFilter('all');
            }}>
            All
          </p>
          <p
            className={`${selectedFilter === 'active' && styles.active}`}
            onClick={() => {
              setFilters('active');
              setSelectedFilter('active');
            }}>
            Active
          </p>
          <p
            className={`${selectedFilter === 'done' && styles.active}`}
            onClick={() => {
              setFilters('done');
              setSelectedFilter('done');
            }}>
            Completed
          </p>
        </div>
        <p onClick={onClearCompleted}>Clear Completed</p>
      </div>
    </div>
  );
}
