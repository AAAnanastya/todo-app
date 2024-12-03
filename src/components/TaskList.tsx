type Todo = {
  task: string;
  state: 'active' | 'done';
};

interface TaskListProps {
  todos: Todo[];
}

export default function TaskList({ todos }: TaskListProps): JSX.Element {
  return (
    <ul>
      <li>Todo List</li>
      <li>Todo List</li>
      <li>Todo List</li>
      <li>Todo List</li>
      <li>Todo List</li>
    </ul>
  );
}
