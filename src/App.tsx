import { useTheme } from './components/ThemeContext';
import { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

import './App.css';

function App(): JSX.Element {
  const { theme } = useTheme();

  const [todos, setTodos] = useState<Todo[]>([]);

  interface Todo {
    task: string;
    state: 'active' | 'done';
  }

  function handleAddTodo(selectedTask: string) {
    setTodos((prevTodos) => [...prevTodos, { task: selectedTask, state: 'active' }]);
  }

  function handleTaskStatusChange(selectedTask: string) {
    let newParams: Todo[] = todos.map((todo) => {
      if (todo.task === selectedTask) {
        switch (todo.state) {
          case 'active':
            return { ...todo, state: 'done' };
          case 'done':
            return { ...todo, state: 'active' };
        }
      }
      return todo;
    });
    setTodos(newParams);
  }

  function handleDeleteTask(selectedTask: string) {
    let newParams: Todo[] = todos.filter((todo) => todo.task !== selectedTask);
    setTodos(newParams);
  }

  function handleDeleteCompleted() {
    let activeTasks: Todo[] = todos.filter((todo) => todo.state === 'active');
    setTodos(activeTasks);
  }

  return (
    <div className={`background ${theme}`}>
      <div className="content_container">
        <Header />
        <TaskInput onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onDeleteTask={handleDeleteTask}
          onStatusChange={handleTaskStatusChange}
          onClearCompleted={handleDeleteCompleted}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
