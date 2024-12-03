import { useTheme } from './ThemeContext';
import { useState } from 'react';

import styles from './TaskInput.module.css';
import TaskStatusIcon from './TaskStatusIcon';

interface TaskInputProps {
  onAddTodo: (task: string) => void;
}

export default function TaskInput({ onAddTodo }: TaskInputProps): JSX.Element {
  const { theme } = useTheme();

  const [inputValue, setInputValue] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className={`${styles['input_container']} ${styles[theme]}`}>
      <TaskStatusIcon />
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyUp={handleKeyUp} placeholder="Create a new todo..."></input>
    </div>
  );
}
