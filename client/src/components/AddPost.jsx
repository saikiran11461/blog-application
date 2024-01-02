import { Box, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AddingPost} from "../redux/app/action";
const AddPost = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initState = {
        title:"",
        desc:"", 
        url:"",
        user_id:JSON.parse(localStorage.getItem("id"))
    }
    const [formData,setFormData] = useState(initState)


    const handleChange = (e)=>{
        const  {name,value} = e.target;
        const payload={
            ...formData,
             [name]:value
        }
        setFormData(payload)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData);
      dispatch(AddingPost(formData)).then(res=>{
        navigate("/")
      })
    }

   

  return (
    <>
       <Box width={"40%"} margin={"auto"} mt={"200px"}>
       <form action="" onSubmit={handleSubmit}>
            <Stack>
            <Input type='text' value={formData.title} onChange={handleChange} name='title' placeholder='write title here'/>
            <Input type='text' value={formData.desc} onChange={handleChange} name='desc' placeholder='write desc here'/>
            <Input type='text' value={formData.url} onChange={handleChange} name='url' placeholder='url here'/>
            <Input bgColor={"teal"} color={"white"} type='submit'/>
            </Stack>
        </form>
       </Box>
    </>
  )
}

export default AddPost