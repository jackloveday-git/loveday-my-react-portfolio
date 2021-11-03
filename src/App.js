// Edited App.js by Jack Loveday

// Import dependencies
import './App.css';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Resume } from "./components/pages/Resume";
import { Portfolio } from "./components/pages/Portfolio";
import { Contact } from "./components/pages/Contact";

// App functionality, react-dom
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;

