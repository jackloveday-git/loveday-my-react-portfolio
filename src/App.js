// Edited App.js by Jack Loveday

// Import dependencies
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
//import { About } from "./components/Pages/About";
//import { Blog } from "./components/Pages/Blog";
//import { Contact } from "./components/Pages/Contact";

// App functionality, react-dom
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

// <Route path="/about" component={About} />
// <Route path="/blog" component={Blog} />
// <Route path="/contact" component={Contact} />