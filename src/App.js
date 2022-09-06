import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.component';
import Todos from './components/todos.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-testid="reactImage" src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Todos />
      </header>
    </div>
  );
}

export default App;
