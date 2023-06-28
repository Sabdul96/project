import React, { useState } from "react";
import Card from "./Card";

const Blog = () => {
  const [title, setTitle] = useState("My Blog");
  const [content, setContent] = useState("This is my blog post.");

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <Card title="My Card" content="This is my blog post."/>
      {/* <button onClick={() => setTitle("New Title")}>Change Title</button>
      <button onClick={() => setContent("New Content")}>Change Content</button> */}
    </div>
  );
};

export default Blog;