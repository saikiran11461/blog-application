import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editPost, getPosts } from '../redux/app/action';
import { Input, Stack } from '@chakra-ui/react';

const EditPage = () => {
    const {id} = useParams();
    
    const dispatch = useDispatch();
     const [editName,setEditName] = useState("");
     const [editDesc,setEditDesc] = useState("");
  
     const posts = useSelector((state)=>state.appReducer.posts);

    useEffect(()=>{
            if(posts.length === 0) {
              dispatch(getPosts());   
            }
    },[posts.length , dispatch ])
    console.log(posts, "posts");


    useEffect(()=>{
        if(id){
            const currentPost = posts.filter((post)=> post._id === id);
            console.log("currentPost", currentPost);
            currentPost && setEditName(currentPost[0]?.title);
            currentPost && setEditDesc(currentPost[0]?.desc);
        }   
    },[id,dispatch])

    
    const handleSubmit=()=>{
      const payload ={
        title:editName,
        desc:editDesc
    }
    dispatch(editPost(id,payload)).then(res=>{
      dispatch(getPosts());
    })
    }

  
  return (
    <div>
       <Stack width={"30%"} margin={"auto"}>
       <label htmlFor="">name</label>
        <Input type="text" placeholder='name'  value={editName} onChange={(e)=>setEditName(e.target.value)}   />
        <label htmlFor="">desc</label>
        <Input type="text" placeholder='desc'  value={editDesc} onChange={(e)=>setEditDesc(e.target.value)}   />
        <Input onClick={handleSubmit} type='submit'/>
       </Stack>
    </div>
  )
}   

// 

export default EditPage