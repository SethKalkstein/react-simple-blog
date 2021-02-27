import { Link } from "react-router-dom";
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;
// const BlogList = ({ blogs, title, handleDelete }) => {
const BlogList = ({ blogs, title }) => {
//destructuring {} inside the function parameters accomplishes the same goal as taking props for the argument and declaring the variables below as done in the comment above.

    // const handleDelete = (id) => setBlog(blogs.filter(blog => blog.id != id)); this could be accomplished by sending the setBlog function as a prop to this conponent instead of sending this function to this prop

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog)=> (
                   <div className="blog-preview" key={blog.id}>
                       <Link to={ "blogs/" + blog.id } >
                           <h2>{ blog.title }</h2>
                           <p>Written by: {blog.author} </p>
                       </Link>
                       {/* <button onClick={ () => handleDelete(blog.id) }>Delete</button> */}
                    </div> 
                ))
            }
        </div>
     );
}
 
export default BlogList;