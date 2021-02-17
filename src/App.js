import NavBar from './NavBar';
import Home from "./Home";
import BlogList from "./BlogList";

function App() {
  const title = "Welcome to my newest blog";
  const likes = 30;


  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
        <p>liked {likes} times</p>
        <p>{10}</p>
        <p>{likes > 40 ? "lots of likes" : "Not enough likes"}</p>
        <br/>
        <BlogList />
      </div>
    </div>
  );
}

export default App;
