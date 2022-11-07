import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Board from './components/board';
import { setBoardList } from './redux/Actions/changeBoardListActions';
import * as type from './redux/Types';

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://jsonplaceholder.typicode.com/users'
    }).then(res=>{
      if(res.data.length){
        dispatch(setBoardList(res.data.map((user:any)=>{
          return {
            id:user.id,
            name:user.name,
          }
        })))
      }
    })
  },[]);

  return (
      <Board/>
  );
}

export default App;
