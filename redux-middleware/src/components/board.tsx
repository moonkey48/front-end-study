import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Reducers/rootReducer';

const Board = () => {
    const boardList = useSelector((state:RootState)=>state.handleBoardList.boardList);
    return <>{boardList.length!==0?<>
    <h1>board ok</h1>
    <ul>{
        boardList.map(item=><li key={item.id}>
            <h1>{item.name}</h1>
        </li>)
    }</ul>
    </>: <h1>no board</h1> }</>
}

export default Board;