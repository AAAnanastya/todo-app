import { useTheme } from './components/ThemeContext';

import Footer from './components/Footer';
import Header from './components/Header';
import ListEditor from './components/ListEditor';
import TodoList from './components/TodoList';

import './App.css';

function App(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className={`background ${theme}`}>
      <div className="content_container">
        <Header />
        <ListEditor />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
