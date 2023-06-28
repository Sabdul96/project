import React, { useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = {
      title: title,
      content: content,
    };
    setPosts([...posts, newPost]);
  };

  const renderPosts = () => {
    return (
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>My Blog</h1>
      <button onClick={() => addPost("My First Post", "This is my first blog post.")}>
        Add Post
      </button>
      {renderPosts()}
    </div>
  );
};

export default Blog;
