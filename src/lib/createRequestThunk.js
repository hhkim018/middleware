import {startLoading,finishLoading} from '../modules/loading'


export default function createRequestThunk(type,request) {

const SUCCESS = type+'_SUCCESS'; //sample/GET_USER_SUCCESS
const FAILURE = type+'_FAILURE';

return params => async dispatch =>{
    dispatch({ //sample/GET_USER
        type
    });  
    dispatch(startLoading(type))
    try{
        const response = await request(params) 
        dispatch({ //sample/GET_USER_SUCCESS
            type:SUCCESS,
            payload:response.data
        });
        dispatch(finishLoading(type))
    }catch(e){
        dispatch({ //sample/GET_USER_FAILURE
            type:FAILURE,
            payload:e,
            error:true
        })
        dispatch(startLoading(type))
        throw e;
    }
};
}