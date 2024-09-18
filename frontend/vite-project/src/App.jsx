import { useState, useEffect } from 'react'
import Form from './Form'

function App() {
  const [blog, setBlog] = useState()

  async function getApi() {

    const res = await fetch('http://127.0.0.1:8000/api/test_get')
    const data = await res.json()
    setBlog(data);
  }
  async function postApi(formData) {

    const res = await fetch('http://127.0.0.1:8000/api/test_post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const content = await res.json()
    
  }

  useEffect(() => {
    getApi()
  }, []);



  return (
    <div>
      <h1>Hello</h1>
      <Form postApi={postApi}/>
      {blog && <p>{blog.content}</p>}
    </div>
  )
}

export default App
