export default function createRequestThunk(type,request) {

const SUCCESS = '${type}_SUCCESS';
const FAILURE = '${type}_FAILURE';

return params => async dispatch =>{

    dispatch({type});
    try{
        const response = await request(params)


    }
    catch(e){
        dispatch({
            type:FAILURE,
            payload:e,
            error:true


        })
        throw e;
    }

}
}