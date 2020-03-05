import React from 'react'
import {getPost,getUser} from '../modules/sample'
import Sample from '../component/Sample'
import { connect } from 'react-redux'
import loading from '../modules/loading'

const {useEffect} = React


const SampleContainer = ({

getPost,
getUser,
post,
user,
loadingPost,
loadingUser

}) =>{
useEffect(()=>{
    getPost(1);
    getUser(1);
},[getPost,getUser])


return(
<Sample
post={post}
user={user}
loadingPost={loadingPost}
loadingUser={loadingUser}
></Sample>)
}


export default connect(

({sample}) =>({
    post:sample.post,
    user:sample.user,
    loadingPost:loading['sample/GET_POST'],
    loadingUser:loading['sample/GET_USER']
}),
{
getPost,
getUser
}

)(SampleContainer)