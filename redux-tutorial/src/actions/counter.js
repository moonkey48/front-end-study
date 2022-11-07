export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const SET_DIFF = 'counter/SET_DIFF';

export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});
export const setDiff = (payload)=>({type:SET_DIFF,payload});