import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Rocky");

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
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
                <button>
                    Add Blog
                </button>
            </form>
            <h3>{ title }</h3>
            <p>{ body }</p>
            <sub>By, { author }</sub>
        </div>
     );
}
 
export default Create;