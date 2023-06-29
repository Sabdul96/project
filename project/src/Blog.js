import React, { useState } from "react";


export default function Blog() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Post title: <br></br> <input name="postTitle" defaultValue="" />
        </label>
        <br></br>
        <br></br>
        <label>
          Edit your post:
          <textarea
            name="postContent"
            defaultValue=""
            rows={4}
            cols={40}
          />
        </label>
        <hr />
        <button type="reset">Reset </button>
        <button type="submit">Save Travel blog post</button>
      </form>
    );
  }

// const Form = () => {
//   const [posts, setPosts] = useState([]);

//   const addPost = (title, content) => {
//     const newPost = {
//       title: title,
//       content: content,
//     };
//     setPosts([...posts, newPost]);
//   };

//   const renderPosts = () => {
//     return (
//       <div>
//         {posts.map((post, index) => (
//           <div key={index}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>My Blog</h1>
//       <button onClick={() => addPost("My First Post", "This is my first blog post.")}>
//         Add Post
//       </button>
//       {renderPosts()}
//     </div>
//   );
// };

// export default Form;
