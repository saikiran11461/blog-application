import { Box, Input, Stack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { postRegister } from '../redux/auth/action';
import { useNavigate} from "react-router-dom"
const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [registerMessage,setRegisterMessage] = useState("")

  const initData={
    firstName :"",
    lastName:"",
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

    dispatch(postRegister(formData)).then(res=>{
      setRegisterMessage(res.payload)
     // console.log("inside register", res.payload)
     navigate("/login")
    })
  }


  console.log( "registerdmessges", registerMessage)


  return (
    <div>
      <Box width={"25%"} margin={"auto"} mt={"200px"}>
      {
        registerMessage && <Text boxShadow='md' p='1' rounded='md' bg='white' m={"15px"} color={"red"}><li>{registerMessage.message}</li></Text>
       }
      <form action="" onSubmit={handleSubmit}>
        <Stack>
          <Input type='text' value={formData.firstName} name='firstName' onChange={handleChange} placeholder='Enter first name'/>
          <Input type='text' value={formData.lastName} name='lastName'onChange={handleChange} placeholder='Enter Last name'/>
          <Input type='email' value={formData.email} name="email" onChange={handleChange} placeholder='Enter Email'/>
          <Input type='password' value={formData.password} name='password'onChange={handleChange} placeholder='Enter Password'/>
          <Input  bgColor={"teal"} color={"white"} type='submit'/>
        </Stack>
      </form>
      </Box>
      
    </div>
  )
}

export default Register