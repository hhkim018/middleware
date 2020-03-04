import React from 'react'


const Sample = ({loadingPost,loadingUser,post,user}) =>{

    return(
<div>
<section>
    <h1>post</h1>
    {loadingPost&&'loading.....'}
    {loadingPost&&post&&(
    <div>
<h3>{post.title}</h3>
    <h3>{post.body}</h3>
    </div>)}

</section>
<hr/>
<section>
<h1>user</h1>
{loadingUser && 'loading..'}
{loadingUser&& user && (
<ul>{user.map(user=>(<li key={user.id}>
{user.username} ({user.email})
</li>
))}
</ul>
)}
</section>
</div>
)}

export default Sample;