import { useState, useEffect } from "react";
import { BlogForm, RequestForm } from "./Forms";

function App() {
  const [blog, setBlog] = useState();


  async function getApi() {
    const res = await fetch("http://127.0.0.1:8000/api/test_get");
    const data = await res.json();
    // setBlog(data);
  }


  async function postApi(formData) {
    const res = await fetch("http://127.0.0.1:8000/api/test_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const content = await res.json();
    setBlog(content);
  }

  return (
    <main>
      <h1 className="main--heading">API TESTING APP IN REACT</h1>
      <div className="forms">
        <BlogForm postApi={postApi} />
        <RequestForm getApi={getApi} />
        {blog && <p>Response: {blog.content}</p>}
      </div>
    </main>
  );
}

export default App;
