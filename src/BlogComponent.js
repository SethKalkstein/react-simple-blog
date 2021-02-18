import { useState } from "react";
import BlogList from "./BlogList";

const BlogComponent = () => {
    
    const [blogs, setBlogs] = useState([
        {title: "Welcome to my New Blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Rocky", id: 1},
        {title: "Let's Celebrate the Blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Adrienne", id: 2},
        {title: "Let's do web dev stuff", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Rocky", id: 3}
    ]);

    const handleDelete = (id) => setBlogs(blogs.filter(blog => blog.id != id));
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return ( 
        <div className="blogComponent">
            <h1>Blog Component</h1>
            {/* blogs property declaration is a prop, it could be called anything. The value is inside the curly brackets and is the value, in this case we used the 'blogs' variable and also named the prop blogs */}
            <BlogList blogs={blogs} title="Full Blog List" handleDelete = { handleDelete } />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Rocky')} title="Rocky's Blog List" handleDelete = { handleDelete } />
        </div>
     );
}
 
export default BlogComponent;
