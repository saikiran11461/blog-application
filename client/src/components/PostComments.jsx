import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const PostComments = () => {
  return (
    <>
        <Box width={"300px"} margin={"auto"} border={"2px solid transprent"}>
        <form style={{position:"relative"}}>
        <Textarea  placeholder='post your comment here' />
        <Button position={"absolute"} bottom={"2"} right={"2"}>post</Button>
        </form>
        </Box>
    </>
  )
}

export default PostComments