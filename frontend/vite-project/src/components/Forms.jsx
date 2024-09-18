import { useState } from "react";

function BlogForm(props) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  return (
    <form className="blog-form" onSubmit={(e) => props.handleSubmit(e, blog, true)}>
      <label htmlFor="title">Title</label>
      <input
        className="blog-form--title"
        type="text"
        name="title"
        id="title"
        value={blog.title}
        onChange={(e) => props.handleChange(e, setBlog)}
      />
      <label htmlFor="content">Content</label>
      <textarea
        className="blog-form--content"
        name="content"
        id="content"
        onChange={(e) => props.handleChange(e, setBlog)}
        value={blog.content}
      />
      <button className="blog-form--button">Submit</button>
    </form>
  );
}

function RequestForm(props) {
  const [request, setRequest] = useState({
    id: 0,
  });

  return (
    <form className="request-form" onSubmit={(e) => props.handleSubmit(e, request, false)}>
      <label htmlFor="id">Lookup ID</label>
      <br/>
      <input
        type="number"
        name="id"
        value={request.id}
        id="id"
        onChange={(e) => props.handleChange(e, setRequest)}
      />
      <button>Submit</button>
    </form>
  );
}

export { BlogForm, RequestForm };
