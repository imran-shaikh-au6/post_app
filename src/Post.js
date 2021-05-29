import React from 'react';
import SinglePost from './SinglePost';
const Post = (props)=>{
    const {data,handleDeletePost} =props
    return (
        <SinglePost handleDeletePost={handleDeletePost} data={data}/>
    )
}

export default Post