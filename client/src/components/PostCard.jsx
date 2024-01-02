import React, { useState } from 'react'
import {Card,Image,Stack,Text,CardFooter,CardBody,Heading,Button,Box, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import PostComments from '../components/PostComments';
const PostCard = ({id,title,desc,url,userName}) => {

  const [show,setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <>

    <Box width={"80%"} margin={"auto"} mb={"30px"}>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    width={"400px"}
    height={"250px"}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <Text textAlign={"left"} padding={"20px"}>{userName?.email}</Text>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.{desc}
      </Text>
    </CardBody>

    <CardFooter>
     <Flex>
      <Box display={"flex"} gap={"20px"}>
        <Button bgColor={"blue"} color={"white"}>Like</Button>
        <Button onClick={handleClick}>Comment</Button>
      </Box>
     <Link to={`posts/${id}`}> <Button ml={"20px"} variant='solid' colorScheme='blue'> view post</Button></Link>
     </Flex>
    
    </CardFooter>
    
  </Stack>

</Card>
{show && <PostComments/>}
    </Box>

   


</>
  )
}

export default PostCard