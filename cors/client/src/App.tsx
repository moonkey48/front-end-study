
import './App.css';
import axios from 'axios';
import { useRef, useState } from 'react';

function App() {
  const [name,setName] = useState<string>('austin')
  const nameRef = useRef<HTMLInputElement>(null);
  return <div className="">
    <h1>{name}</h1>
    <form>
      <input ref={nameRef} type="text" />
    </form>
    <button onClick={()=>{
      if(nameRef.current){
        axios.post('http://localhost:5000/',{name:nameRef.current.value}).then(res=>{
          if(res.data!==undefined || res.data!==null){
            setName(res.data.name);
          }
        });
      }
    }}>button</button>
  </div>
}

export default App;
