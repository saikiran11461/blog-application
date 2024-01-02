import * as types from "./actiontypes"
import axios from "axios";




export const postRegister = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_REGISTER_REQUEST})
   return    axios.post('http://localhost:5000/users/register', payload)
    .then(res=>{
      console.log("inside action register",res.data)
      return  dispatch({type:types.POST_REGISTER_SUCCESS, payload:res.data})
    })                                                                                  
    .catch(err=>{
        dispatch({type:types.POST_REGISTER_FAILURE})
    })
}



export const postLogin = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_LOGIN_REQUEST})
   return    axios.post('http://localhost:5000/users/login', payload)
    .then(res=>{
      console.log("inside  action", res.data.token)
      return  dispatch({type:types.POST_LOGIN_SUCCESS, payload:res.data})
    })                                                                                  
    .catch(err=>{
     return   dispatch({type:types.POST_LOGIN_FAILURE,payload:err})
    })
}
