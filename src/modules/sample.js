import * as api from '../lib/api'
import { handleActions } from 'redux-actions'
 

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE='sample/GET_POST_FAILURE'

const GET_USER = 'sample/GET_USER'
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS'
const GET_USER_FAILURE = 'sample/GET_USER_FAILURE'

export const getPost =id => async dispatch =>{

dispatch({type:GET_POST}); //요청 시작 

try{
const response = await api.getPost(id)
dispatch({
type:GET_POST_SUCCESS,
payload: response.data

});

}
catch (e){
dispatch({
type:GET_POST_FAILURE,
payload: e,// payload -> handleaction 에서 객체가 묶여서 나옴 
error:true
})
    throw e;
}

}


export const getUser =() =>async dispatch => {

dispatch({type:GET_USER})

try{
    const response = await api.getUser(); //배열 -> 미들웨어
    console.info(response.data);
    dispatch({
    type:GET_USER_SUCCESS,
    payload:response.data
    })
}
catch(e){
    dispatch({
        type:GET_USER_FAILURE,
        payload:e,
        error: true
    })
    throw e;

}


}

const inital ={
loading:{
GET_POST:false,
GET_USER:false
},

post:null,
user:null

};

const sample = handleActions({

[GET_POST] : state =>({
...state,
loading:{

    ...state.loading,
    GET_POST:true

}
}),

[GET_POST_SUCCESS]:(state,action) =>({

    ...state,
    loading:{

        ...state.loading,
        GET_POST:false
    },
    post:action.payload



}),
[GET_POST_FAILURE]:(state,action) =>({

...state,
loading:{
    ...state.loading,
    GET_POST:false
}
}),

[GET_USER] : state =>({

...state,
loading:{
    ...state.loading,
    GET_USER:true
}

}),

[GET_USER_SUCCESS]:(state,action) =>({

    ...state,
    loading:{
        ...state.loading,
        GEt_USER:false
    },
    user:action.payload



}),

[GET_USER_FAILURE]:(state,action) =>({

...state,
loading:{
    ...state.loading,
    GET_USER:false
}
})



},inital)

export default sample;