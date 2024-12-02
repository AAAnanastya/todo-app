import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEditor from './components/ListEditor';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <ListEditor />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
