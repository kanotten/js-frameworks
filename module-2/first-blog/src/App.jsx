import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <h1 className="text-3xl  font-bold">Hello World!</h1>
      <form
        action=""
        className="flex flex-col max-w-sm items-center mx-auto p-4 gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          // Grab values and log them out
          const title = e.target.title.value;
          const content = e.target.content.value;
          console.log(title, content);

          setPosts([
            ...posts,
            {
              id: posts.length ? posts[posts.length - 1].id + 1 : 1,
              title: title,
              content: content,
            },
          ]);
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
        {posts
          .map((post) => {
            return (
              <div className="border p-4" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
}

export default App;
