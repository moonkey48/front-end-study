
export const createPostThunk = (type,promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

    return param => async dispatch => {
        dispatch({type,param});
        try{
            const payload = await promiseCreator(param);
            dispatch({type:SUCCESS,payload});
        }catch(e){
            dispatch({type:ERROR,payload:e,error:true})
        }
    }
};
const defaultIdSelector = param => param;
export const createPostThunkById = (type,promiseCreator,idSelector=defaultIdSelector) =>{
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

    return param => async dispatch => {
        const id = idSelector(id);
        dispatch({type, param, meta:id});
        try{
            const payload = await promiseCreator(param);
            dispatch({type:SUCCESS, payload, meta:id});
        }catch(e){
            dispatch({type:ERROR, payload:e, meta:id});
        }
    }
}

export const postsUtils = {
    initial:(initialData=null)=>({
        loading:false,
        data:initialData,
        error:null,
    }),
    loading:(prevState=null)=>({
        loading:true,
        data:prevState,
        error:null,
    }),
    success:(payload)=>({
        loading:false,
        data:payload,
        error:null,
    }),
    error:(payload)=>({
        loading:true,
        data:null,
        error:payload,
    }),
}

//reducer를 단축해서
export const handleAsyncAction = (type, key, keepData=false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];
    return (state, action)=>{
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key]:postsUtils.loading(keepData?state[key].data:null)
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: postsUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state,
                    [key]: postsUtils.error(action.payload)
                }
            default:
                return state;
        }
    }
}

export const handleAsyncActionById = (type, key)=>{
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

    return (state,action)=>{
        const id = action.meta;
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key]:{
                        ...state[key],
                        [id]:postsUtils.loading()
                    }
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]:{
                        ...state[key],
                        [id]:postsUtils.success(action.payload)
                    }
                }
            case ERROR:
                return {
                    ...state,
                    [key]:{
                        ...state[key],
                        [id]:postsUtils.error(action.payload)
                    }
                }
            default:
                return state;
        }
    }
}