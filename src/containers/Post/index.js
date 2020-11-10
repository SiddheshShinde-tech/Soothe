import React from "react";
import "./style.css";
import Blogpost from "../../Components/Blogpost";
import Sidebar from "../../Components/Blogpost/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const Post = (props) => {
  console.log(props);

  return (
    <div className="container1">
      <Navbar />
      <Blogpost {...props}></Blogpost>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Post;
