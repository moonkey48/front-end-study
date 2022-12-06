import './App.css';
import UsersNoQuery from './components/usersNoQuery';
import UsersQuery from './components/usersQuery';
import { ReactQueryDevtools } from 'react-query/devtools';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Products/>
      {/* <UsersQuery/> */}
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
}

export default App;
