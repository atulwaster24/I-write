import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import { Routes, Route, Link } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import illustration from "../assets/undraw_blogging_re_kl0d.svg";

const Home = ({user}) => {


  useEffect(()=>{

  },[user])

  return (
    <>
    <Navbar user={user}/>
    <div className="">
     <div className="flex justify-around mt-24 items-center">
        <div className=" flex flex-col justify-around rounded-lg h-96">
          <div className="flex w-128 p-4">
            <h1 className="text-blue-400 text-left text-5xl capitalize font-bold">
              Blogs can be a great way to tell people whats on your mind!
            </h1>
          </div>
          <div className="flex justify-start gap-4 p-4">
            <button className="border-2 border-indigo-500 rounded-lg p-2 hover:bg-indigo-500 hover:text-white">
              <Link to="blogs" className="text-xl">
                Discover Blogs
              </Link>
            </button>
            <button className="border-2 border-lime-500 text-lime-800  rounded-lg p-2  hover:bg-lime-500 hover:text-white">
            <Link to="create-blog" className="text-xl">
                Create a Blog
              </Link>
            </button>
          </div>
        </div>
        <div className="relative w-50rem border-2 m-4 p-2 rounded-lg border-blue-400 h-128">
          <img
            src={illustration}
            alt="cover"
            className="w-full h-full object-fit"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
