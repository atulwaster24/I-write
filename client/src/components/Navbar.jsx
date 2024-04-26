import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  useEffect(()=>{

  }, [user])

  const inActiveStyle = "text-xl";
  const activeStyle = "text-white";

  return (
    <>
      <div className="bg-blue-500  flex items-center justify-around px-4">
        <Link to="/"  className=" my-4  font-bold text-4xl">
          I-Write
        </Link>
        <div className="flex gap-5">
          <Link to="blogs" className="text-xl hover:text-white">
            Discover Blogs
          </Link>
          <Link to="create-blog" className="text-xl hover:text-white">
            Create Blog
          </Link>
          {user && (
            <Link to={`user-profile/${user?._id}`}  className="text-xl hover:text-white font-bold flex gap-2 capitalize">
              {user?.name}
              <img src={user?.image} alt="user" className="h-8 w-8 rounded-full"/>
            </Link>
          )}
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
