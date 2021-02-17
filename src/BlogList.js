// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;
const BlogList = ({ blogs, title }) => {
//destructuring {} inside the function argument accomplishes the same goal as taking props for the argument and declaring the variables below as done in the comment above.
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
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