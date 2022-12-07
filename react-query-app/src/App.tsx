import './App.css';
import UsersNoQuery from './components/usersNoQuery';
import UsersQuery from './components/usersQuery';
import { ReactQueryDevtools } from 'react-query/devtools';
import Products from './components/Products';
import Mutation from './components/Mutation';
import CustomHookTest from './test/customHookTest';


function App() {
  return (
    <div className="App">
      <CustomHookTest/>
      {/* <Mutation/>
      <Products/> */}
      {/* <UsersQuery/> */}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </div>
  );
}

export default App;
