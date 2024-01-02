import React from 'react'
import {Routes,Route} from "react-router-dom";

import Register from '../pages/Register';
import Login from '../pages/Login';
import Notfound from '../pages/Notfound';
import Posts from '../pages/Posts';
import SinglePage from '../pages/SinglePage';
import EditPage from '../pages/EditPage';
import { Box } from '@chakra-ui/react';
import AddPost from '../components/AddPost';
import PrivateRoute from '../private/PrivateRoute';
import { useSelector } from 'react-redux';

const AllRoutes = () => {
  const isAuth = useSelector((state)=>state.authReducer.isAuth);
  return (
    <Box mt={"30px"}>
      <Routes >
        <Route path='/' element={<Posts/>}/>
        <Route path='/addpost' element={<PrivateRoute><AddPost/></PrivateRoute>}/>
        <Route path='posts/:id' element={<SinglePage/>} />
        <Route path='posts/:id/edit'  element={<EditPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Box>
  )
}

export default AllRoutes