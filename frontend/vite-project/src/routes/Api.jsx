import { useState, useEffect } from "react";
import { BlogForm, RequestForm } from "../components/Forms";
import {getApi, postApi} from "../apiCalls";

function App() {
  const [blog, setBlog] = useState();


  function handleChange(event, setFunction) {
    const { name, value } = event.target;

    setFunction((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function handleSubmit(event, submitState, post) {
    event.preventDefault();

    async function promiseResolution(func, state) {
      setBlog(await func(state))
    }

    if (post === true) {
      promiseResolution(postApi, submitState);
    } else {
      promiseResolution(getApi, submitState.id);
    }

  }

  return (
    <>
      <main className="api">
        <h1 className="api--heading">API TESTING APP IN REACT</h1>
        <div className="forms">
          <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} />
          <RequestForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          {blog && (
            <p>
              <strong>Response:</strong> {blog.content ? blog.content : blog}
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
