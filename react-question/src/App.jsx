import logo from './logo.svg';
import './App.css';
import Memo from './components/memo';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name:'austin',
    job:'developer'
  });
  return (
    <div className="App">
      <h1>{user.name}</h1>
    </div>
  );
}

export default App;
