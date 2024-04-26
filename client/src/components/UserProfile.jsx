import React from 'react';

import {googleLogout} from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

const UserProfile = ({user}) => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar user={user}/>
    <div className='flex flex-col items-center gap-5 m-24'>
      <h1 className='text-4xl font-bold text-blue-600'>Account Details</h1>
      <div className='flex items-center justify-center  gap-4'>
        <div className='flex flex-col gap-4 w-96 p-3 items-start'>
          <h1 className='text-2xl font-bold'>Username</h1>
          <h1 className='text-2xl font-bold'>Email</h1>
          <h1 className='text-2xl font-bold'>Profile Picture</h1>
        </div>
        <div className='flex flex-col gap-4 p-3 items-end w-96'>
            <p className='text-2xl'>{user.name}</p>
            <p className='text-2xl'>{user.email}</p>
            <p className='flex items-center text-2xl gap-4'><img className='w-8 h-8 rounded-full' src={user.image} alt='user' /><a className='font-bold hover:text-blue-500' href={`${user.image}`} target='_blank' rel='noreferrer'>Preview</a></p>
        </div>
      </div>
      <button className='border-2 border-blue-500 mt-12 font-bold rounded-2xl text-2xl px-4 py-1 text-blue-700 hover:text-white hover:bg-blue-500' onClick={()=> {googleLogout(); localStorage.clear(); navigate('/login')}}>
        Logout
        </button>

    </div>
    </>
  )
}

export default UserProfile