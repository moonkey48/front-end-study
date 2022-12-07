import React, { useEffect, useState } from 'react';

interface IUSerDebounce {
    value:any,
    delay:number
}
const UseDebounce = ({value, delay}:IUSerDebounce) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])

    return debouncedValue;
}

export default UseDebounce;