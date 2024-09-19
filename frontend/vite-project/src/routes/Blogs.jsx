import { useEffect, useState } from "react";

function Blogs() {

    const [blogs, setBlogs] = useState();
    const [blogLen, setBlogLen] = useState(10)



    useEffect(() => {
        setBlogs(getBlogs(0, 10))
    }, [])
    
    

    async function getBlogs(start, end) {
        const res = await fetch(`http://127.0.0.1:8000/api/get_blogs/${start}/${end}`);
        const data = await res.json();
        setBlogs(data)
    }

    // const mappedBlogs = blogs.map((blog) => {
    //     return (
    //         <div key={blog.id}>
    //             <h2>{blog.title}</h2>
    //             <p>{blog.published_date}</p>
    //             <p>{blog.content}</p>
    //         </div>
    //     )
    // })

    console.log(blogs.len)

    return (
        <div>
            <h1>Blogs</h1>
        </div>
    );
}

export default Blogs