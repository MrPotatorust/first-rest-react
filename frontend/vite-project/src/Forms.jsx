import { useState } from "react";

function BlogForm(props) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setBlog((prevBlog) => {
      return { ...prevBlog, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(blog);

    props.postApi(blog);
  }

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        className="blog-form--title"
        type="text"
        name="title"
        value={blog.title}
        onChange={handleChange}
      />
      <label htmlFor="content">Content</label>
      <textarea
        className="blog-form--content"
        name="content"
        onChange={handleChange}
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
    <form action={props.handleSubmit}>
      <input type="text" value={request.id} onChange={handleChange} />
    </form>
  );
}

export { BlogForm, RequestForm };
