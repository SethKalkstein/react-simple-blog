import NavBar from './NavBar';
import Home from "./Home";
import BlogComponent from "./BlogComponent";
import { useEffect } from 'react';

function App() {
  const title = "Welcome to my newest blog";
  const likes = 30;

  useEffect( () => console.log("use effect has fired from the main app component") );

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
        <p>liked {likes} times</p>
        <p>{10}</p>
        <p>{likes > 40 ? "lots of likes" : "Not enough likes"}</p>
        <br/>
        <BlogComponent />
      </div>
    </div>
  );
}

export default App;
