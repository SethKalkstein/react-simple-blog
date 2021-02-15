const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Sample Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    //inline style written in object format with camel case keys
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>

     );
}
 
export default NavBar;