import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <Box width={"90%"}   border={"2px solid transprent"} margin={"auto"} boxSizing='border-box' padding={"10px 30px"} boxShadow='dark-lg' borderRadius={"10px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Box>Blogs Here</Box>
                <Box display={"flex"} gap={"20px"}>
                   <Link to={"/"}> <Button colorScheme='teal'> Blogs</Button></Link>
                   <Link to={"/addpost"}> <Button colorScheme='teal'>Add Blog</Button></Link>
                   <Link to={"/register"}><Button colorScheme='teal'>Register</Button></Link>
                   <Link to={"/login"}><Button colorScheme='teal'>Login</Button></Link>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar