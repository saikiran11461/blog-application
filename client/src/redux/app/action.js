import * as types from "./actionTypes";
import axios from  "axios";




 export const getPosts = ()=>(dispatch)=>{
    dispatch({type:types.GET_POST_REQUEST});
   return axios.get("http://localhost:5000/posts")
    .then(res=>{
        dispatch({type:types.GET_POST_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        dispatch({type:types.GET_POST_FAILURE, payload:err.message})
    })
}

 export const singlePost = (id)=>(dispatch)=>{
    dispatch({type:types.GET_SINGLE_POST_REQUEST});
   return axios.get(`http://localhost:5000/posts/${id}`)
    .then(res=>{
     return   dispatch({type:types.GET_SINGLE_POST_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        dispatch({type:types.GET_SINGLE_POST_FAILURE, payload:err.message})
    })
}



export const editPost = (id,payload)=>(dispatch)=>{
    dispatch({type:types.EDIT_SINGLE_POST_REQUEST});
  return  axios.patch(`http://localhost:5000/posts/${id}`, payload)
    .then(res=>{
        dispatch({type:types.EDIT_SINGLE_POST_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        dispatch({type:types.EDIT_SINGLE_POST_FAILURE, payload:err.message})
    })
}



export const deletePost = (id)=>(dispatch)=>{
  //  console.log("getting id in delete", id)
    dispatch({type:types.DELETE_POST_REQUEST})
   return axios.delete(`http://localhost:5000/posts/${id}`)
    .then(res=>{
        dispatch({type:types.DELETE_POST_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        dispatch({type:types.DELETE_POST_FAILURE})
    })
}



export const AddingPost = (payload)=>(dispatch)=>{
    dispatch({type:types.ADD_POST_REQUEST})
   return axios.post('http://localhost:5000/posts/addpost', payload)
    .then(res=>{
        dispatch({type:types.ADD_POST_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        dispatch({type:types.ADD_POST_FAILURE})
    })
}








