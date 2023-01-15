import './App.css';
import Counter from './components/Counter';
import Main from './components/Main';
import TodoBody from './components/TodoBody';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoBody />
      <Counter />
      <Main />
    </div>
  );
}

export default App;
