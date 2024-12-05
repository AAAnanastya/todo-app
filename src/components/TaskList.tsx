import { useTheme } from './ThemeContext';
import { Reorder } from 'framer-motion';

import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
import { useState, useEffect } from 'react';

type Todo = {
  task: string;
  state: 'active' | 'done';
};

interface TaskListProps {
  todos: Todo[];
  onDeleteTask: (task: string) => void;
  onStatusChange: (task: string) => void;
  onClearCompleted: () => void;
  toReorder: (reorder: Todo[] | ((prev: Todo[]) => Todo[])) => void;
}

export default function TaskList({ todos, onDeleteTask, onStatusChange, onClearCompleted, toReorder }: TaskListProps): JSX.Element {
  const { theme } = useTheme();
  const [filters, setFilters] = useState<string>('all');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const taskLeftNum = todos.filter((todo) => todo.state === 'active').length;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`${styles['todo-container']} ${styles[theme]}`}>
        {todos.length < 1 && <div className={styles['empty-mock']}>It seems there are no task added yet</div>}
        <Reorder.Group axis="y" values={todos} onReorder={toReorder}>
          {filters === 'all'
            ? todos.map((todo) => <TaskItem key={todo.task} todo={todo} toDelete={onDeleteTask} statusChange={onStatusChange} />)
            : todos
                .filter((todo) => todo.state === filters)
                .map((todo) => <TaskItem key={todo.task} todo={todo} toDelete={onDeleteTask} statusChange={onStatusChange} />)}
        </Reorder.Group>

        <div className={`${styles['task-bar']} ${styles[theme]}`}>
          <p className={styles['non-click']}>{taskLeftNum} items left</p>
          {windowWidth > 768 && (
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
          )}
          <p onClick={onClearCompleted}>Clear Completed</p>
        </div>
      </div>

      {windowWidth <= 768 && (
        <div className={`${styles['task-bar']} ${styles[theme]} ${styles['separate-nav-container']}`}>
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
        </div>
      )}
    </>
  );
}
