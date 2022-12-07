import { useEffect } from 'react';

interface IUseEnterEscButtonsProps {
    handleCancel: Function,
    handleConfirm: Function,
}
export const useEnterEscButtons = ({handleCancel, handleConfirm}:IUseEnterEscButtonsProps)=>{
    useEffect(()=>{
        const listener = (event: {code:string, preventDefault: ()=>void}) => {
            if((event.code === 'Enter' || event.code === 'NumpadEnter')){
                handleConfirm();
                event.preventDefault();
            }
        }
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        }
    },[handleConfirm]);

    useEffect(()=>{
        const listener = (event:{code:string, preventDefault:() => void}) => {
            if(event.code === 'Escape'){
                handleCancel();
                event.preventDefault();
            }
        }
        document.addEventListener('keydown', listener);

        return () => {
            document.removeEventListener('keydown', listener);
        }
    },[handleCancel]);
}
