import React, { useEffect, useState } from 'react';
import {Routes, Route, useNavigate } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import UserProfile from './components/UserProfile';
import EditBlog from './components/EditBlog';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(null);
  
  useEffect(()=>{
    let userInfo = JSON.parse(localStorage.getItem('user'));
    if(!userInfo){
      navigate('/login');
    }else{
      setUser(userInfo);
    }
  },[])


  return (
    <div className="App ">
      <Routes>
        <Route path='/*' element={<Home user={user}/>} />
        <Route path='/blogs/*' element={<Blogs setEditing={setEditing}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-blog' element={<BlogForm blog={null}/>} />
        <Route path='/user-profile/:userId' element={<UserProfile user={user}/>} />
        <Route path='/blogs/edit/:blogId' element={<EditBlog user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
