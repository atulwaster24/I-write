import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlogAsync, editBlogAsync, fetchBlogsAsync, selectBlogState } from '../features/blogs/blogSlice';
import moment from 'moment/moment';
import GridLoader from './GridLoader';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BlogForm from './BlogForm';

const Blogs = ({setEditing}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blogs, loading} = useSelector(selectBlogState);
    const user = JSON.parse(localStorage.getItem('user'));

    

    useEffect(()=>{
        dispatch(fetchBlogsAsync());
    },[loading])



    if (!user) {
        return (
          <div className="flex flex-col gap-6 mt-48">
            <h1 className="text-3xl font-bold">Login to read Blogs.</h1>
            <Link className="text-xl hover:text-blue-700 font-bold" to={'/login'}>Go to Login Page.</Link>
          </div>
        );
      }

    const deleteBlog = (id) =>{
        dispatch(deleteBlogAsync(id));
    }

    if(loading === true) return <div className=' h-80vh flex justify-center items-center'><GridLoader /></div>;

  return (
    <div className='h-auto justify-center items-center flex flex-col'>
        <h1 className='text-4xl font-bold mt-24 text-blue-600'>Explore Blogs</h1>
        <div className='flex justify-center h-96 items-center flex-wrap mt-24'>
            {blogs?.length === 0 && <div><h1 className='text-2xl'>No blogs to show.</h1></div>}
            {blogs?.length >= 0 && (
                <div className='flex gap-24 justify-center flex-wrap '>
                    {blogs?.map((blog)=> (
                        <div key={blog?._id} className='border-2 h-96 p-5 flex gap-3 flex-col w-40rem mx-12 rounded-lg'>
                                <div className=''>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-2'>
                                        <img src={user?.image} className='w-10 h-10 rounded-full' alt='creator' />
                                        <p className='text-2xl text-lime-800 font-bold border-2 px-3 cursor-pointer py-1 rounded-full' onClick={()=> navigate(`/user-profile/${blog?.createdBy?._id}`)}>{blog?.createdBy?.name}</p>
                                        </div>
                                        {user?._id === blog?.createdBy?._id && (
                                            <div className='flex gap-4 items-start'>
                                                <MdDelete onClick={()=> deleteBlog(blog._id)} className='cursor-pointer hover:text-red-500' fontSize={26} />
                                                <Link to={`edit/${blog._id}`}><FaEdit onClick={()=>{setEditing(blog)}} className='cursor-pointer hover:text-blue-500' fontSize={24}/></Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            <div className=' pl-3 flex justify-start w-full'>
                                <h1 className='text-3xl font-bold text-sky-600'>{blog?.title}</h1>
                            </div>
                            <div className='flex justify-start rounded-md h-64 p-2 border-2 border-sky-200 text-xl pl-3'>
                                <p>{blog?.content}</p>
                            </div>
                                <div className='flex'>
                                    <div><p className='font-bold text-lime-700 px-2'>{moment(blog?.timestamp).fromNow()}</p></div>
                                </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Blogs