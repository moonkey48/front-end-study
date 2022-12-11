import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import MutationComp from './test/Mutation';
import PostMutation from './test/postMutaion';
import SuspenseProducts from './components/SuspenseProducts';
import UsersQuery from './components/usersQuery';



function App() {
  return (
    <div className="App">
      {/* <UsersQuery/> */}
      {/* <MutationComp/> */}
      {/* <PostMutation/> */}
      <SuspenseProducts/>
    </div>
  );
}

export default App;
