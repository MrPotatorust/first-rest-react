import { useState, useEffect } from "react";
import { BlogForm, RequestForm } from "./components/Forms";

function App() {
  const [blog, setBlog] = useState();

  async function getApi(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/test_get/${id}/`);
    const data = await res.json();
    setBlog(data);
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
    const data = await res.json();
    setBlog(data);
  }

  function handleChange(event, setFunction) {
    const { name, value } = event.target;

    setFunction((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function handleSubmit(event, submitState, post) {
    event.preventDefault();

    if (post === true) {
      postApi(submitState);
    }
    else{
      getApi(submitState.id)
    }
  }


  return (
    <main>
      <h1 className="main--heading">API TESTING APP IN REACT</h1>
      <div className="forms">
        <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} />
        <RequestForm handleChange={handleChange} handleSubmit={handleSubmit} />
        {blog && <p><strong>Response:</strong> {blog.content}</p>}
      </div>
    </main>
  );
}

export default App;
