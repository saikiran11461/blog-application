import { Box, Input, Stack ,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { postLogin } from '../redux/auth/action';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.data || "/"
 // const isAuth = useSelector((state)=>state.authReducer.isAuth);

  const [singinSuccess, setSinginSuccess] = useState('')

  const initData ={
    email:"",
    password:""
  }


  const [formData,setFormData] = useState(initData);

  const handleChange =(e)=>{
    const {name,value} = e.target;

    const payload ={
      ...formData,
      [name]:value
    }

    setFormData(payload)
  }


  const handleSubmit =(e)=>{
    e.preventDefault();

    dispatch(postLogin(formData)).then(res=>{
      console.log("res in login",res);
      setSinginSuccess(res.payload);
      
      if(res.payload.message == "login success"){
        localStorage.setItem("token", JSON.stringify(res.payload?.token))
        localStorage.setItem("id", JSON.stringify(res.payload?.user))
      }
      navigate(comingFrom,{replace:true})
    })

//  console.log("sing in success", singinSuccess);
  }
  return (
    <>
    <div>
      <Box width={"25%"} margin={"auto"} mt={"200px"}>
       {
        singinSuccess && <Text boxShadow='md' p='1' rounded='md' bg='white' m={"15px"} color={"red"}><li>{singinSuccess.message}</li></Text>
       }
      <form action="" onSubmit={handleSubmit}>
        <Stack>
          <Input type='email' value={formData.email} name="email" onChange={handleChange} placeholder='Enter Email'/>
          <Input type='password' value={formData.password} name='password'onChange={handleChange} placeholder='Enter Password'/>
          <Input  bgColor={"teal"} color={"white"} type='submit'/>
        </Stack>
      </form>
      </Box>
      
    </div></>
  )
}

export default Login