import NavBar from './NavBar';
import Home from "./Home";
import BlogComponent from "./BlogComponent";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const title = "Welcome to my newest blog";
  const likes = 30;

  useEffect( () => console.log("use effect has fired from the main app component") );

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
              <p>liked {likes} times</p>
              <p>{10}</p>
              <p>{likes > 40 ? "lots of likes" : "Not enough likes"}</p>
              <br/>
              <BlogComponent />
            </Route>  
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
