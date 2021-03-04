import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Rocky");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsLoading(true);

        fetch("http://localhost:8000/blogs/", {
            method: 'POST',
            headers: {  "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            setTimeout(()=>{
                console.log("success");
                setIsLoading(false);
            }, 500)

        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}                    
                >
                    <option value="Rocky">Rocky</option>
                    <option value="Adrian">Adrian</option>
                    <option value="Mickey">Mickey</option>
                </select>
                {
                isLoading ? <button disabled>Saving...</button> : <button>Add Blog</button>
                }
            </form>
            <h3>{ title }</h3>
            <p>{ body }</p>
            <sub>By, { author }</sub>
        </div>
     );
}
 
export default Create;