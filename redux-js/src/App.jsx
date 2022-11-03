import logo from './logo.svg';
import './App.css';
import CounterContainer from './components/CounterContainer';
import TodoContainer from './components/TodoContainer';


function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <TodoContainer/>
    </div>
  );
}

export default App;
