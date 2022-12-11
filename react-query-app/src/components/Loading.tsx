import React from 'react';
import s from './Loading.module.css';

const Loading = () => {
    return (
        <div className={s.square}>
            <div className={s.spin}></div>
        </div>
    )
    
}

export default Loading;