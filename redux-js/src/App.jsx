import logo from './logo.svg';
import './App.css';
import CounterContainer from './components/CounterContainer';
import TodoContainer from './components/TodoContainer';
import PostListContainer from './components/PostListContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import { Route, Routes } from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <Routes>
        <Route path="/" element={<PostListPage/>} exact={true} />
        <Route path="/:id" element={<PostPage/>} />
      </Routes>
    </div>
  );
}

export default App;
