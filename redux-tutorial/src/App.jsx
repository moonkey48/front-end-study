
import CounterContainer from './components/counter/CounterContainer';
import {Routes, Route} from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <Routes>  
        <Route path='/' element={<PostsPage/>} />
        <Route path='/:id' element={<PostPage/>} />
      </Routes>
    </div>
  );
}

export default App;
