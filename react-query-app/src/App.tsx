import './App.css';
import UsersNoQuery from './components/usersNoQuery';
import UsersQuery from './components/usersQuery';
import { ReactQueryDevtools } from 'react-query/devtools';


function App() {
  return (
    <div className="App">
      <UsersQuery/>
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
}

export default App;
