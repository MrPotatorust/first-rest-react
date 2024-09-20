import { useEffect, useState } from "react";
import { getBlogs } from "../apiCalls"
import { Link } from "react-router-dom";

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [blogLen, setBlogLen] = useState(10);
  
    useEffect(() => {
        async function promiseResolution(){
            setBlogs(await getBlogs(0, blogLen));
        }
        promiseResolution()
    }, [blogLen]);




    const mappedBlogs = blogs.map((blog) => (
        <div key={blog.id} className="blog">
          <h2><Link to={`blog/${blog.id}`}>{blog.title}</Link></h2>
          <p>{blog.content}</p>
          <small>{blog.published_date}</small>
        </div>
      ))
  
    return (
      <>
        <h1>Blogs</h1>
        {mappedBlogs}
        {mappedBlogs.length >= blogLen && 
        <button className="load-more"
          onClick={() => setBlogLen(blogLen + 10)}
          >Load More</button>
        }
      </>
    );
  };

export default Blogs