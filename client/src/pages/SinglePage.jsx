import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deletePost, singlePost} from "../redux/app/action";

import {Card,CardHeader,Flex,Box,Avatar,Heading,Text,IconButton,Button,CardFooter,CardBody,Image} from "@chakra-ui/react"
const SinglePage = () => {
    const {id} = useParams();
   // console.log(id);
   const navigate = useNavigate()

  //  const [deleteStatus ,setDeleteStatus] = useState('')
  //  const deletemsg = useSelector((state)=>state.appReducer.deleteMessage)

    const dispatch = useDispatch();
    const singeleData = useSelector((state)=>state.appReducer.singlePost);

    
    useEffect(()=>{
        dispatch(singlePost(id)).then(res=>{
          console.log(res);
        })
    },[id,dispatch])

    const HandleDeleteFunc=(id)=>{
            dispatch(deletePost(id)).then(res=>{
           //   console.log(res,"res from delete")
              navigate("/")
            })
    }

   // console.log("delete message", deletemsg)
  return (
    <>
    <Box width={"40%"} margin={"auto"} mt={"50px"}>

    {/* {
      deletemsg ? <Alert status='success'>
      <AlertIcon />
        {deletemsg?.message}:
    </Alert>:"null"
    } */}

    <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>{singeleData?.user_id?.firstName}</Heading>
          <Text>Sai Kiran</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.{singeleData.desc}
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    gap={"20px"}
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' color={"white"} bgColor='black' > Like</Button>
   <Link to={`/posts/${singeleData._id}/edit`}> <Button flex='1'  color={"white"} bgColor='teal' > Edit</Button></Link>
    <Button onClick={()=>HandleDeleteFunc(singeleData._id)} flex='1'  color={"white"} bgColor='red' > Delete</Button>
  </CardFooter>
</Card>

    </Box>
   
    </>
  )
}

export default SinglePage