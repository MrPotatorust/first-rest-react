


export async function getBlogs(start, end) {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/get_blogs/${start}/${end}`);
      const data = await res.json();
      return data
    } catch (error) {
      return "Error fetching blogs:", error
    }
  }



export async function getApi(id) {
try {
    const res = await fetch(`http://127.0.0.1:8000/api/test_get/${id}/`);
    const data = await res.json();
    return data
} catch (error){
    return"invalid id (probably doesnt exist)"
}
}

export async function postApi(formData) {
const res = await fetch("http://127.0.0.1:8000/api/test_post", {
    method: "POST",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
});
const data = await res.json();
return data
}