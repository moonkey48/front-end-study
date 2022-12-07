import React, { useEffect } from 'react';
import { useEnterEscButtons } from '../hooks/useEnterEscButton';
import useWindowResize from '../hooks/useWindowResize';

const CustomHookTest = () => {
    //hook test #1
    // const handleConfirm = () => console.log('enter cliked')
    // const handleCancel = ()=>console.log('esc cliked')
    // useEnterEscButtons({handleCancel,handleConfirm});

    const {width, height} = useWindowResize();

    return (<>
    <form>
        <input type="text" />
    </form>
    <div style={{width:`${width-30}px`, height:'30px',backgroundColor:'red'}}></div>
    </>)
}
            

export default CustomHookTest;