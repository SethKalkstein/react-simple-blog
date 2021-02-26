import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const BlogComponent = () => {
    const { data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    // const [blogs, setBlogs] = useState([]);
/*     const [blogs, setBlogs] = useState([
        {title: "Welcome to my New Blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Rocky", id: 1},
        {title: "Let's Celebrate the Blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Adrienne", id: 2},
        {title: "Let's do web dev stuff", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Rocky", id: 3}
    ]); */
    // const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState("Mr T");
    // const [error, setError] = useState(null);
    // const handleDelete = (id) => setBlogs(blogs.filter(blog => blog.id != id));
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect( () => console.log("use effect has fired from the blog component"), [name] );

//set dependency with an array of state changes (for the second arguament) that you want to trigger the useEffect function
//no second argument means that useEffect will trigger from any state change within the component. 
//an empty array will only fire useEffect when the component initially renders.
    return ( 
        <div className="blogComponent">
            {error && <h1 style={{fontSize: "70px", color: "red" }}>{ error }</h1> }
            <h1>Blog Component</h1>
            {/* blogs property declaration is a prop, it could be called anything. The value is inside the curly brackets and is the value, in this case we used the 'blogs' variable and also named the prop blogs */}
            {isLoading && <div>Loading...</div> }
            <BlogList blogs={blogs} title="Full Blog List" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Rocky')} title="Rocky's Blog List" />
{/*             <BlogList blogs={blogs} title="Full Blog List" handleDelete = { handleDelete } />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Rocky')} title="Rocky's Blog List" handleDelete = { handleDelete } /> */}
{/*             {blogs && <BlogList blogs={blogs} title="Full Blog List" handleDelete = { handleDelete } />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Rocky')} title="Rocky's Blog List" handleDelete = { handleDelete } />} */}
{/*             using the blogs && condition will cause the statement to be false for the split second that blogs takes to load from json server because
            blogs was initially set to null. Otherwise the map function in BlogList.js will throw an error because it would be trying to map out an
            the null value (and map only works on arrays not null) */}
            <button onClick={()=>setName(name == "Mr T" ? "Apollo" : "Mr T")}>{ name }</button>
        </div>
     );
}
 
export default BlogComponent;
