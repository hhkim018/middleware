import * as api from '../lib/api'
import { handleActions } from 'redux-actions'
import createRequestThunk from '../lib/createRequestThunk'
 

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE='sample/GET_POST_FAILURE'

const GET_USER = 'sample/GET_USER'
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS'
const GET_USER_FAILURE = 'sample/GET_USER_FAILURE'

export const getPost =createRequestThunk(GET_POST,api.getPost);
export const getUser =createRequestThunk(GET_USER,api.getUser);
const inital ={
loading:{
GET_POST:false,
GET_USER:false
},
post:null,
user:null

};

const sample = handleActions({



[GET_POST_SUCCESS]:(state,action) =>({

    ...state,
    loading:{

        ...state.loading,
        GET_POST:false
    },
    post:action.payload



}),

[GET_USER_SUCCESS]:(state,action) =>({
    ...state,
    loading:{
        ...state.loading,
        GET_USER:false
    },
    user:action.payload
})



},inital)

export default sample;