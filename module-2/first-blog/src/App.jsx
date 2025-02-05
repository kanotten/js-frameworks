import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First",
      content: "My first post",
    },
    { id: 2, title: "Second", content: "My Second post" },
    { id: 3, title: "Third", content: "My third post" },
  ]);

  return (
    <>
      <h1 className="text-3xl  font-bold">Hello World!</h1>
      <form
        action=""
        className="flex flex-col max-w-sm items-center mx-auto p-4 gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          // Grab values and log them out
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" className="border" />
        <label htmlFor="content">content</label>
        <input type="text" id="content" name="content" className="border" />
        <button
          type="submit"
          className="border rounded py-1 px-2 cursor-pointer"
        >
          Post
        </button>
      </form>
      <div className="flex flex-col items-center gap-4">
        {posts.map((post) => {
          return (
            <div className="border p-4" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
