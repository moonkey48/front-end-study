import './App.css';
import MutationComp from './components/Mutation';
import PostMutation from './components/postMutaion';
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
