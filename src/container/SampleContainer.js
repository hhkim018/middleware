import React from 'react'
import {getPost,getUser} from '../modules/sample'
import Sample from '../component/Sample'
import { connect } from 'react-redux'

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
    loadingPost:sample.loading.GET_POST,
    loadingUser:sample.loading.GET_USER
}),
{
getPost,
getUser
}

)(SampleContainer)