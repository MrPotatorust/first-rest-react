import { useState } from "react";

function Form(props){

    const [blog, setBlog] = useState({
        title: '',
        content: ''
    })

    function handleChange(event){
        const {name, value} = event.target

        setBlog((prevBlog) => {
            return {...prevBlog, [name]: value}
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        console.log(blog)

        props.postApi(blog)
    }

    return (
        <form className="blogForm" onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="title"
            value={blog.title}
            onChange={handleChange}
            />
            <textarea 
            name="content" 
            onChange={handleChange}
            value={blog.content}
            />  
            <button>Submit</button>
        </form>
    )

}


export default Form