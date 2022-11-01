import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [getId, setGetId] = useState('');
  const [postId, setPostId] = useState();
  const [postName, setPostName] = useState('');

  const getInfo = (id)=>{
    axios.get(`http://localhost:8080/api/users/${id}`).then(res=>{
      if(res.data.user){
        setUsers(res.data.user);
      }else if(res.data.users){
        setUsers(res.data.users);
      }else{
        console.log('데이터를 불러오는데 실패하였습니다.');
      }
    });
  }
  const postInfo = (id,name)=>{
    axios.post(`http://localhost:8080/api/users/add`,{
      id:id,
      name:name
    }).then(data=>console.log(data));
  }

  return (
    <div className="App">
      <section className='getSection'>
        <form>
          <input type="text" value={getId} onChange={(e)=>setGetId(e.target.value)}/>
        </form>
        <button onClick={()=>getInfo(getId)}>get info</button>
      </section>
      <section className='postSection'>
        <form>
          <input type="text" onChange={(e)=>setPostId(e.target.value)}/>
          <input type="text" onChange={(e)=>setPostName(e.target.value)}/>
        </form>
        <button onClick={()=>postInfo(postId,postName)}>post info</button>
      </section>
      <body>
        <div className="result">
        {users.length!==0? <ul>{
            users.map((user,idx)=>{
              return <li key={idx}>{user.name}</li>
            })
          }</ul> :''
        }
        </div>
      </body>
    </div>
  );
}

export default App;
