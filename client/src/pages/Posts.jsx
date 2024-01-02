import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/app/action"
import PostCard from '../components/PostCard';
const Posts = () => {

  const posts  = useSelector((state)=>state.appReducer.posts);

  const Loading  = useSelector((state)=>state.appReducer.isLoading);

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getPosts())
  },[dispatch])

 // console.log(["posts here", posts])

  return (
    <div>
      {Loading && <h1>Loading ....</h1> }
      {
        posts.map((item)=>(
        //  console.log(item.user_id.email, "user details")
          <PostCard key={item._id} id={item._id} title={item.title} desc={item.desc} url={item.url} userName={item.user_id}/>
        ))
      }
    </div>
  )
}

export default Posts