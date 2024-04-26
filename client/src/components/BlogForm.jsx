import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlogAsync } from "../features/blogs/blogSlice";
import { Link, useNavigate } from "react-router-dom";

const BlogForm = ({ blog }) => {
  const [isEditForm, setIsEditForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    createdBy: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="flex flex-col gap-6 mt-48">
        <h1 className="text-3xl font-bold">Login to start writing and publishing blogs.</h1>
        <Link className="text-xl hover:text-blue-700 font-bold" to={'/login'}>Go to Login Page.</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog) {
      const newBlog = { ...blogData, createdBy: user._id };
      dispatch(addBlogAsync(newBlog));
      navigate("/blogs");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className=" my-24 w-[50%] rounded-3xl">
        <h1 className="font-bold text-4xl text-blue-600 mb-6">
          {isEditForm ? "Edit Blog" : "Create Blog"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 border-2 bg-gray-200 py-8 rounded-2xl"
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold text-2xl">Title</label>
            <input
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
              required
              className="w-128 border-2 font-bold rounded-xl p-2"
              placeholder="Enter The Blog Title"
              type="text"
              value={blogData.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-2xl">Content</label>
            <textarea
              onChange={(e) =>
                setBlogData({ ...blogData, content: e.target.value })
              }
              required
              className="border-2 rounded-xl w-128 p-2"
              placeholder="Write Your Blog Here."
              type="text"
              value={blogData.content}
            />
          </div>
          <button
            type="submit"
            className="border-2 font-bold text-blue-600 border-blue-600 rounded-lg p-2 hover:bg-blue-600 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
