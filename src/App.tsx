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

  const handleAddTodo = (task: string) => {
    setTodos((prevTodos) => [...prevTodos, { task, state: 'active' }]);
  };

  return (
    <div className={`background ${theme}`}>
      <div className="content_container">
        <Header />
        <TaskInput onAddTodo={handleAddTodo} />
        <TaskList todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
