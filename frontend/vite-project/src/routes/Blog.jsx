import { Link, useLoaderData } from "react-router-dom";
import { getApi } from "../apiCalls";

export async function loader({ params }){
    const blog = await getApi(params.blogId)
    return { blog }
}


export default function Blog() {
    const { blog } = useLoaderData()
    console.log(blog)
    return (
    <main>
        <h1>{blog.title}</h1>
        <small>{blog.published_date}</small>
        <Link to="/blogs"><button>Go back</button></Link>
        <p>{blog.content}</p>
    </main>
    )
}