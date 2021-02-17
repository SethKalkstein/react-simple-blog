import { useState } from "react";

const BlogList = () => {
    
    const [blogs, setBlogs] = useState([
        {title: "Welcome to my New Blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Rocky", id: 1},
        {title: "Let's Celebrate the Blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Adrienne", id: 2},
        {title: "Let's do web dev stuff", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam. Quos veniam tempora odit qui cum quaerat ullam deleniti laboriosam nobis vitae. Hic dolores laborum autem numquam ullam quaerat sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut placeat omnis cum, eos aliquam quisquam, repellendus esse rem in, odio sit fugit itaque dolores corrupti consequuntur cumque. Nostrum, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum sint rem. Dignissimos asperiores voluptate esse fuga ab voluptates quos distinctio praesentium ut, odit facilis repellat? Adipisci magni nam debitis!", author: "Mr. T", id: 3}
    ]);

    return ( 
        <div className="blogList">
            <h1>List of Blogs</h1>
            {
                blogs.map((blog)=> (
                   <div className="blog-preview" key={blog.id}>
                       <h2>{ blog.title }</h2>
                       <p>Written by: {blog.author} </p>
                    </div> 
                ))
            }
        </div>
     );
}
 
export default BlogList;
