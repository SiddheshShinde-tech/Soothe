import React, {useState, useEffect} from "react";
import Card from "../UI/Card";
import "./style.css";
import blogPost from "../data/blogdata.json";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{marginBottom: "20px", padding: "15px", boxSizing: "border-box"}}
      >
        <div className="cardHeader">
          <h2>Recent Posts</h2>
        </div>

        <div className="posts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <div className="post">
                  <h3>{post.blogTitle}</h3>
                  <img
                    className="cardImg"
                    alt="Post Image"
                    src={require("../../images/" + post.blogImage)}
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
