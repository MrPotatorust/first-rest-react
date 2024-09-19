import { useEffect, useState } from "react";

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [blogLen, setBlogLen] = useState(10);
  
    useEffect(() => {
      getBlogs(0, blogLen);
    }, [blogLen]);
  
    async function getBlogs(start, end) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/get_blogs/${start}/${end}`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
  
    return (
      <>
        <h1>Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <small>{blog.published_date}</small>
          </div>
        ))}
        <button className="load-more"
          onClick={() => setBlogLen(blogLen + 10)}
          >Load More</button>
      </>
    );
  };

export default Blogs