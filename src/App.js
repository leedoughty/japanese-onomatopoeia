import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import WordPage from "./WordPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/word/:id" component={WordPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
